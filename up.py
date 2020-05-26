import os
from bs4 import BeautifulSoup
import pandas as pd
import lxml
from flask import Flask,request
from flask_restful import Resource, Api
from flask_cors import CORS, cross_origin
from biosppy import storage
import io
import csv
from biosppy.signals import ecg
app = Flask(__name__)
api = Api(app)
CORS(app)

@app.route("/pd",methods=["POST"])
def process():
	print("yes")
	if request.method == "POST":
		data = request.files["csv"]
		a = pd.read_excel(data)
		print(type(a))
		return "ok" 

if __name__ == '__main__':
     app.run(host='0.0.0.0',port=8080)
