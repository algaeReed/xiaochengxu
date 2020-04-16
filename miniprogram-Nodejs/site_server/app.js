var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();
//上传图片的包
var multer=require('multer');
//读写文件
var fs = require('fs');

//视图加载
app.set('views', path.join(__dirname, 'views'));
// 渲染文件
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
//传输数据 进行json处理
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ 
	extended: false, //拓展模式
	limit: 2 * 1024 * 1024 //限制2m
}));

//页面地址 访问 ：  http://127.0.0.1:8080/index  
app.get('/index',function(req,res){
	//读取文档的内容
	fs.readFile('./data.txt',function(err,data){
		if(err){
			console.log(err);
		}
		var result = JSON.parse(data);
		console.log(result)
		// 渲染页面
		res.render('index',{data:result})
	})
	
})
//=============================================================================
// 通过 filename 属性定制
var storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, 'static/uploads/'); // 保存的路径，备注：需要自己创建
	},
	filename: function (req, file, cb) {
	// 将保存文件名设置为 字段名 + 时间戳，比如 logo-1478521468943
	let suffix=file. mimetype.split('/')[1];//获取文件格式
		cb(null, file.fieldname + '-' + Date.now()+'.'+suffix); 
	}
});
//生成的图片放入uploads文件夹下
var upload=multer({storage: storage })
//图片上传必须用post方法
//=============================================================================

//编写一个函数 接收小程序提交的标题、内容、图片
app.post('/file',upload.single('demo'),function(req,res){
		// 接收小程序提交的标题和内容
		var tit = req.body.title;
		var con = req.body.content;
		var file = req.file;
		//console.log(tit,con , file);
		//处理提交的数据
		var obj = {
			title:tit,
			content:con,
			src:'http://127.0.0.1:8080/uploads/'+file.filename
		}
		//读取文档的内容
		fs.readFile('./data.txt',function(err,data){
			if(err){
				console.log(err);
			}
			var result = JSON.parse(data);
			//把处理好的数据添加到数组中
			result.push(obj);
			//把data数组转成字符串
			var str =  JSON.stringify(result);
			//写入data.txt
			fs.writeFile('./data.txt',str,function(err){
				if(err){
					console.log(err)
				}
			})
		})
		
	
		//响应数据
		res.send({
			message:"提交数据成功"
		})
})

//配置静态资源的路径
//express
app.use(express.static('static'));























app.listen(8080,function(){
	console.log("服务已经启动了  http://127.0.0.1:8080")
})