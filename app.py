import imp
import os
os.environ['KMP_DUPLICATE_LIB_OK']='True'
import urllib.request
from PIL import Image
import cv2
import numpy as np
from pickle import TRUE
from werkzeug.utils import secure_filename
from flask import Flask,render_template, request
import predict
import skimage
from skimage import measure
import lib

app = Flask(__name__)

@app.route("/")
def hello_world():
    return render_template("home.html")

@app.route("/wordimage", methods = ['GET','POST'])
def word():
    if request.method == 'POST':
        f = request.files['file1']
        url = request.form['link']
        f.save('static/input.png')
        if(url):
            urllib.request.urlretrieve(url, "static/input.png")
        lib.compressMe('static/input.png')

        predict.main('input.png','output.png')
        result = lib.cluster()

        return render_template('output.html',name=result[0],prob= result[1] )

if __name__ == "__main__":
    app.run(debug=True)