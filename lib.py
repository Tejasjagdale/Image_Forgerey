
import urllib.request
from PIL import Image
import cv2
import numpy as np
from pickle import TRUE
import predict
import skimage
from skimage import measure

def compressMe(filepath, verbose = False):
    picture = Image.open(filepath)

    if(picture.size[0] > 384 and picture.size[1] > 256):
        picture = picture.resize((384,256),Image.ANTIALIAS)
        picture.save(filepath,
                    optimize = True, 
                    quality = 10)
        
    if(picture.size[0] > 384 and picture.size[1] < 256):
        picture = picture.resize((384,picture.size[1]),Image.ANTIALIAS)
        picture.save(filepath,
                    optimize = True, 
                    quality = 10)
        
    if(picture.size[0] < 384 and picture.size[1] > 256):
        picture = picture.resize((picture.size[0],256),Image.ANTIALIAS)
        picture.save(filepath,
                    optimize = True, 
                    quality = 10)
    return

def cluster():
    img = cv2.imread('static/output.png', cv2.IMREAD_GRAYSCALE)
    labels_mask = measure.label(img)                       
    regions = measure.regionprops(labels_mask)
    regions.sort(key=lambda x: x.area, reverse=True)
    if len(regions) > 1:
        for rg in regions[1:]:
            labels_mask[rg.coords[:,0], rg.coords[:,1]] = 0
    labels_mask[labels_mask!=0] = 1
    mask = labels_mask
    result = predict.mask_to_image(mask)
    result.save('static/output2.png')

    return percentage(img)

def percentage(img):
    n_white_pix = np.sum(img == 255)
    n_black_pix = np.sum(img == 0)
    total = n_white_pix + n_black_pix
    per = round((n_white_pix/total)*100)

    forged = "image is Suspecious"

    if(per >= 5):
        forged = "image is forged"
    elif(3 < per < 5):
        forged = "image is Suspecious"
    else:
        forged = "image is unforged"

    return [forged,per]