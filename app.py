import imp
import os
from pickle import TRUE
from pyexpat import model
from werkzeug.utils import secure_filename
from flask import Flask,render_template, request
    
app = Flask(__name__)

@app.route("/")
def hello_world():
    return render_template("home.html")

@app.route("/wordimage", methods = ['GET','POST'])
def word():
    if request.method == 'POST':
        decoder = request.form['decoder']
        f= request.files['file1']
        f.save(os.path.join("C:\\Users\\Admin\\image_forgery\\Image_Forgerey\\static",'word.png'))
        print(decoder)
        return render_template('output.html',name="",prob="")

if __name__ == "__main__":
    app.run(debug=True)