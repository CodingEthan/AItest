from flask import request, render_template,jsonify, render_template
from app.router import app

@app.route('/')
def home_page():
    return render_template('首页.html')

@app.route('/uplord_data',methods = ['GET','POST'])
def uplord_face():
    if request.method=="GET":
        return render_template('首页.html')
    else:
        if 'file' not in request.files:
            return jsonify({"result":"请先选择文件"})
        else:
            obj = request.files['file']
            obj_name = obj.filename
            objpath = "app/static/file/%s" %obj_name    
            obj.save(objpath)
            return jsonify({"result":"上传成功"})

