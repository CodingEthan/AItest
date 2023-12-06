from flask import Flask, request, url_for, session, jsonify, render_template

app = Flask(__name__)

from app.route import uplord_route
