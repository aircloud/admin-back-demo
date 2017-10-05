/*
* 本页面给出后端返回的路由的样例
* 先以工单排产为例给出
* by iconie
* */

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.get('/arrange/factorydata/',function(req,res,next){
    res.json([
        {
            name:'工厂01',
            list:['A','B','C','D']
        },
        {
            name:'工厂02',
            list:['A','B','C','D']
        },
        {
            name:'工厂03',
            list:['A','B','C','D']
        }
    ]);
});

router.get('/arrange/arrangedata',function(req,res,next){
    res.json({
        machine: [
            {
                basic: {
                    name: 'FX001',
                    process: [
                        {
                            name: 'H',
                            data: '30%'
                        }
                    ],

                },
                config: {
                    title: 'Handler',
                    data: [
                        {
                            wordOrder: 'wk001',
                            station: 'st001',
                            recipe: 'rc001',
                            fixture: 'fx001',
                            status: 'st001'
                        },
                        {
                            wordOrder: 'wk002',
                            station: 'st002',
                            recipe: 'rc002',
                            fixture: 'fx002',
                            status: 'st002'
                        },
                        {
                            wordOrder: 'wk003',
                            station: 'st003',
                            recipe: 'rc003',
                            fixture: 'fx003',
                            status: 'st003'
                        },
                        {
                            wordOrder: 'wk004',
                            station: 'st004',
                            recipe: 'rc004',
                            fixture: 'fx004',
                            status: 'st004'
                        }
                    ]
                },
            },
            {
                basic: {
                    name: 'CS',
                    process: [
                        {
                            name: 'TA',
                            data: '50%'
                        }, {
                            name: 'TB',
                            data: '50%'
                        }

                    ],

                },
                config: {
                    title: 'Handler2',
                    data: [
                        {
                            wordOrder: 'wk001',
                            station: 'st001',
                            program: 'pr001',
                            status: 'st001'
                        },
                        {
                            wordOrder: 'wk002',
                            station: 'st002',
                            program: 'pr002',
                            status: 'st002'
                        },
                        {
                            wordOrder: 'wk003',
                            station: 'st003',
                            program: 'pr003',
                            status: 'st003'
                        },
                        {
                            wordOrder: 'wk004',
                            station: 'st004',
                            program: 'pr004',
                            status: 'st004'
                        }
                    ]
                },
            }
        ],
        configSource: {
            fx: {
                ConfigType: [
                    {
                        name: '工单编号',
                        attrName: 'wordOrder',
                    },
                    {
                        name: '站名',
                        attrName: 'station',
                    },
                    {
                        name: 'recipe',
                        attrName: 'recipe'
                    },
                    {
                        name: '治具',
                        attrName: 'fixture'
                    },
                    {
                        name: '状态',
                        attrName: 'status'
                    },
                ],
                staticData: {
                    wordOrder: ['wk001', 'wk002', 'wk003', 'wk004', 'wk005', 'wk006', 'wk007', 'wk008', 'wk009', 'wk0010', 'wk0011', 'wk0012'],
                    station: ['st001', 'st002', 'st003', 'st004', 'st005', 'st006', 'st007', 'st008', 'st009', 'st010'],
                    recipe: ['rc001', 'rc002', 'rc003', 'rc004', 'rc005', 'rc006', 'rc007', 'rc008', 'rc009'],
                    fixture: ['fx001', 'fx002', 'fx003', 'fx004', 'fx005', 'fx006', 'fx007'],
                    status: ['st001', 'st002', 'st003']
                },

            },
            cs: {
                fx: {
                    ConfigType: [
                        {
                            name: '工单编号',
                            attrName: 'wordOrder',
                        },
                        {
                            name: '站名',
                            attrName: 'station',
                        },
                        {
                            name: '程序',
                            attrName: 'program'
                        },
                        {
                            name: '状态',
                            attrName: 'status'
                        },
                    ],
                    staticData: {
                        wordOrder: ['wk001', 'wk002', 'wk003', 'wk004', 'wk005', 'wk006', 'wk007', 'wk008', 'wk009', 'wk0010', 'wk0011', 'wk0012'],
                        station: ['st001', 'st002', 'st003', 'st004', 'st005', 'st006', 'st007', 'st008', 'st009', 'st010'],
                        program: ['pr001', 'pr002', 'pr003', 'pr004', 'pr005', 'pr006', 'pr007', 'pr008', 'pr009'],
                        status: ['st001', 'st002', 'st003']
                    }
                }
            }
        }
    });
});

router.get('/arrange/batch/arrange',function(req,res,next){
    res.json({
        ConfigType:[
            {
                name:'工单编号',
                attrName:'wordOrder',
            },
            {
                name:"测试机编号",
                attrName:'testOrder'
            },
            {
                name:'站名',
                attrName:'station',
            },
            {
                name:'测试程序',
                attrName:'testProgram'
            },
            {
                name:'治具编号',
                attrName:'fixtureOrder'
            },
            {
                name:'分选机编号',
                attrName:'fxOrder'
            },
            {
                name:'recipe',
                attrName:'recipe'
            },
        ],
        ConfigData:{
            data:[
                {
                    wordOrder:'wk001',
                    testOrder:'ts001',
                    station:'st001',
                    testProgram:'tp001',
                    fixtureOrder:'ft001',
                    fxOrder:'fx001',
                    recipe:'rc001',
                },
                {
                    wordOrder: 'wk002',
                    testOrder: 'ts002',
                    station: 'st002',
                    testProgram: 'tp002',
                    fixtureOrder: 'ft002',
                    fxOrder: 'fx002',
                    recipe: 'rc002',
                },
                {
                    wordOrder: 'wk003',
                    testOrder: 'ts003',
                    station: 'st003',
                    testProgram: 'tp003',
                    fixtureOrder: 'ft003',
                    fxOrder: 'fx003',
                    recipe: 'rc003',
                },
                {
                    wordOrder:'wk004',
                    testOrder:'ts004',
                    station:'st004',
                    testProgram:'tp004',
                    fixtureOrder:'ft004',
                    fxOrder:'fx004',
                    recipe:'rc004',
                }
            ]
        },
        staticData : {
            wordOrder: ['wk001', 'wk002', 'wk003', 'wk004', 'wk005', 'wk006', 'wk007', 'wk008', 'wk009', 'wk0010', 'wk0011', 'wk0012'],
            testOrder: ['wk001', 'wk002', 'wk003', 'wk004', 'wk005', 'wk006', 'wk007', 'wk008', 'wk009', 'wk0010', 'wk0011', 'wk0012'],
            station: ['st001', 'st002', 'st003', 'st004', 'st005', 'st006', 'st007', 'st008', 'st009', 'st010'],
            testProgram: ['st001', 'st002', 'st003', 'st004', 'st005', 'st006', 'st007', 'st008', 'st009', 'st010'],
            fixtureOrder: ['st001', 'st002', 'st003', 'st004', 'st005', 'st006', 'st007', 'st008', 'st009', 'st010'],
            fxOrder: ['st001', 'st002', 'st003', 'st004', 'st005', 'st006', 'st007', 'st008', 'st009', 'st010'],
            recipe: ['rc001', 'rc002', 'rc003', 'rc004', 'rc005', 'rc006', 'rc007', 'rc008', 'rc009'],
        }
    })
});

router.get('/arrange/batch/change',function(req,res,next){
    res.json({
        ConfigType:[
            {
                name:'工单编号',
                attrName:'wordOrder',
            },
            {
                name:"测试机编号",
                attrName:'testOrder'
            },
            {
                name:'站名',
                attrName:'station',
            },
            {
                name:'测试程序',
                attrName:'testProgram'
            },
            {
                name:'治具编号',
                attrName:'fixtureOrder'
            },
            {
                name:'分选机编号',
                attrName:'fxOrder'
            },
            {
                name:'recipe',
                attrName:'recipe'
            },

            {
                name:'候选级别',
                attrName:'level'
            },
        ],
        ConfigData:{
            data:[
                {
                    wordOrder:'wk001',
                    testOrder:'ts001',
                    station:'st001',
                    testProgram:'tp001',
                    fixtureOrder:'ft001',
                    fxOrder:'fx001',
                    recipe:'rc001',
                    level:'st001'
                },
                {
                    wordOrder: 'wk002',
                    testOrder: 'ts002',
                    station: 'st002',
                    testProgram: 'tp002',
                    fixtureOrder: 'ft002',
                    fxOrder: 'fx002',
                    recipe: 'rc002',
                    level: 'st002'
                },
                {
                    wordOrder: 'wk003',
                    testOrder: 'ts003',
                    station: 'st003',
                    testProgram: 'tp003',
                    fixtureOrder: 'ft003',
                    fxOrder: 'fx003',
                    recipe: 'rc003',
                    level: 'st003'
                },
                {
                    wordOrder:'wk004',
                    testOrder:'ts004',
                    station:'st004',
                    testProgram:'tp004',
                    fixtureOrder:'ft004',
                    fxOrder:'fx004',
                    recipe:'rc004',
                    level:'st004'
                }
            ]
        },
        staticData : {
            wordOrder: ['wk001', 'wk002', 'wk003', 'wk004', 'wk005', 'wk006', 'wk007', 'wk008', 'wk009', 'wk0010', 'wk0011', 'wk0012'],
            testOrder: ['wk001', 'wk002', 'wk003', 'wk004', 'wk005', 'wk006', 'wk007', 'wk008', 'wk009', 'wk0010', 'wk0011', 'wk0012'],
            station: ['st001', 'st002', 'st003', 'st004', 'st005', 'st006', 'st007', 'st008', 'st009', 'st010'],
            testProgram: ['st001', 'st002', 'st003', 'st004', 'st005', 'st006', 'st007', 'st008', 'st009', 'st010'],
            fixtureOrder: ['st001', 'st002', 'st003', 'st004', 'st005', 'st006', 'st007', 'st008', 'st009', 'st010'],
            fxOrder: ['st001', 'st002', 'st003', 'st004', 'st005', 'st006', 'st007', 'st008', 'st009', 'st010'],
            recipe: ['rc001', 'rc002', 'rc003', 'rc004', 'rc005', 'rc006', 'rc007', 'rc008', 'rc009'],
            level: ['st001', 'st002', 'st003','st004']
        }
    })
});

/*所有我传回的数据，都是修改好的数据，比较方便的做法是后端直接覆写，或者通过深比较修改变化的数据*/

router.get('/arrange/update/arrangedata',function(req,res,next){
  // 传回的数据在req.body中
});

router.get('/arrange/update/batch/arrange',function(req,res,next){

});

router.get('/arrange/update/batch/change',function(req,res,next){

});

module.exports = router;
