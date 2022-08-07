const config = require('./config');
const { Sequelize , DataTypes } = require('sequelize');
const sequelize = new Sequelize(config.database,config.username,config.password,{
    host:config.host,
    dialect:config.dialect,
});
(async function() {
    try{
       await sequelize.authenticate();
       console.log('connection has been established');
    }catch{
       console.log('error occured');
    }
})();


let UnreadChatCount = sequelize.define('unReadChatCount',{
    username:{
        type:DataTypes.STRING(30),
        allowNull:false
    },
    friend:{
        type:DataTypes.STRING(30),
        allowNull:false
    },
    chatCount:{
        type:DataTypes.INTEGER
    }
},{
   indexes:[
         {
           unique: true,
           fields: ['username','friend']
         }
   ],
   timestamps:false

});

UnreadChatCount.removeAttribute('id');



(async function() {
    let result = await UnreadChatCount.findOne({
        where:{
            username:'a',
            friend:'bsfds'
        }
    });
    
    console.log(result)
    
        
})()
