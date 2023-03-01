import imp
import os
import cv2
import numpy as np
from pickle import TRUE
from werkzeug.utils import secure_filename
from flask import Flask,render_template, request
import predict

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
        n_white_pix = np.sum(img == 255)
        n_black_pix = np.sum(img == 0)
        total = n_white_pix + n_black_pix
        per = (n_white_pix/total)*100

        forged = "image is Suspecious"
        if(per > 30):
            forged = "image is forged"
        else:
            forged = "image is unforged"

        return render_template('output.html',name=forged,prob=round((n_white_pix/total)*100) )

if __name__ == "__main__":
    app.run(debug=True)