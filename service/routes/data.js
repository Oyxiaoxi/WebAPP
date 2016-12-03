var express = require('express');
var router = express.Router();
var fs = require('fs');
var PATH = './public/data/';

/**
 * 读取数据模块,供客户端调用
 * date / read ? type = it
 * date / read ? type = it.json
 * 查询接口，token校验
 */
router.get('/read', function(req, res, next) {
    var type = req.param('type') || '';
    fs.readFile(PATH + type + '.json', function(err, data) {
        if (err) {
            return res.send({
                status: 0,
                info: '读取文件失败，服务异常'
            });
        }
        var COUNT = 50;
        // TODO:try catch
        var obj = [];
        try {
            obj = JSON.parse(data.toString());
        } catch (e) {
            obj = [];
        }

        if (obj.length > COUNT) {
            obj = obj.slice(0, COUNT);
        }
        return res.send({
            status: 1,
            data: obj
        });
    });
});
/**
 * 数据存储模块 后台开发使用
 * post 是获得 post提交的数据
 * get 就是获得直接通过浏览的网址或的数据
 */
router.post('/write', function(req, res, next) {
    //判断用户是否登陆
    if (!req.session.user) {
        return res.send({
            status: 0,
            info: '未登陆(未鉴权认证)'
        });
    }
    //文件名
    var type = req.param('type') || '';
    //关键字段
    var url = req.param('url') || '';
    var title = req.param('title') || '';
    var img = req.param('img') || '';
    if (!type || !url || !title || !img) {
        return res.send({
            status: 0,
            info: '提交的字段不全'
        });
    }
    //1)读取文件
    var filePath = PATH + type + '.json';
    fs.readFile(filePath, function(err, data) {
        if (err) {
            return res.send({
                status: 0,
                info: '读取数据失败'
            });
        }
        var arr = JSON.parse(data.toString());
        //代表每一条记录
        var obj = {
            img: img,
            url: url,
            title: title,
            id: guidGenerate(),
            time: new Date()
        };
        arr.splice(0, 0, obj);
        //2)写入文件
        var newData = JSON.stringify(arr);
        fs.writeFile(filePath, newData, function(err) {
            if (err) {
                return res.send({
                    status: 0,
                    info: '写入文件失败'
                });
            }
            return res.send({
                status: 1,
                info: obj
            });
        });
    });
});

/**
 * 阅读模块写入接口
 * TODO:进行提交数据的验证
 * 防 xxs 攻击
 * npm install xss
 * var xss = require('xss')
 * var str = xss(name);
 * @returns
 */
router.post('/write_config', function(req, res, next) {
    //判断用户是否登陆
    if (!req.session.user) {
        return res.send({
            status: 0,
            info: '未登陆(未鉴权认证)'
        });
    }
    var data = req.body.data;
    var obj = JSON.parse(data);
    var newData = JSON.stringify(obj);
    // 写入
    fs.writeFile(PATH + 'config.json', newData, function(err) {
        if (err) {
            return res.send({
                status: 0,
                info: '写入数据失败'
            });
        }
        return res.send({
            status: 1,
            info: obj
        });
    });

});
/**
 * 登陆接口
 * username , password
 * TODO: 对用户密码进行校验
 * xxs处理，判断是否为空
 * 密码加密处理 md5(md5(password + '随机字符串'))
 * 可以写入 JSON 文件
 */
router.post('/login', function(req, res, next) {
    var username = req.body.username;
    var password = req.body.password;

    if (username === 'admin' && password === 'admin') {
        req.session.user = {
            username: username
        };
        return res.send({
            status: 1,
            info: '登陆成功'
        });
    }
    return res.send({
        status: 0,
        info: '登陆失败'
    });
});
/**
 * 数据存储生成id
 * id:"FC3C6CD6-9DF1-4D18-9497-0685A0739B52"
 */
function guidGenerate() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0,
            v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    }).toUpperCase();
}

module.exports = router;