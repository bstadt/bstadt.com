from flask import Flask, render_template, url_for, request
app = Flask(__name__)

@app.route('/', methods=['GET'])
def index():
	if request.method == 'GET':
		return render_template('index.html')

@app.route('/acrobatics', methods=['GET'])
def acrobatics():
	if request.method == 'GET':
		return render_template('acrobatics.html')


@app.route('/projects', methods=['GET'])
def projects():
	if request.method == 'GET':
		return render_template('projects.html')

@app.route('/hackathons', methods=['GET'])
def hackathons():
	if request.method == 'GET':
		return render_template('hackathons.html')

@app.route('/circus', methods=['GET'])
def circus():
	if request.method == 'GET':
		return render_template('circus.html')
