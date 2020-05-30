import os
from bs4 import BeautifulSoup
import pandas as pd
from flask import Flask,request
from flask_restful import Resource, Api
from flask_cors import CORS, cross_origin

app = Flask(__name__)
api = Api(app)
CORS(app)

@app.route("/pd",methods=["POST"])
def process():
	print("yes")
	if request.method == "POST":
		data = request.files["csv"]
		a = pd.read_excel(data)
		global b 
		b = [1,2,3]
		print(type(a))
		return "ok" 

@app.route("/retrain",methods=["GET"])
def retrain():
	global b
	print(b)
	return "ok"

if __name__ == '__main__':
     app.run(host='0.0.0.0',port=8080)
