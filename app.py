import imp
import os
os.environ['KMP_DUPLICATE_LIB_OK']='True'
import cv2
import numpy as np
from pickle import TRUE
from werkzeug.utils import secure_filename
from flask import Flask,render_template, request
import predict
import skimage
from skimage import measure

app = Flask(__name__)

@app.route("/")
def hello_world():
    return render_template("home.html")

@app.route("/wordimage", methods = ['GET','POST'])
def word():
    if request.method == 'POST':
        f = request.files['file1']
        f.save(os.path.join("C:\\Users\\Admin\\image_forgery\\Image_Forgerey\\static",'input.png'))
        predict.main('input.png','output.png')

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

        n_white_pix = np.sum(img == 255)
        n_black_pix = np.sum(img == 0)
        total = n_white_pix + n_black_pix
        per = round((n_white_pix/total)*100)

        forged = "image is Suspecious"

        if(per >= 5):
            forged = "image is forged"
        elif(per < 5):
            forged = "image is unforged"

        return render_template('output.html',name=forged,prob=per )

if __name__ == "__main__":
    app.run(debug=True)