webpackJsonp([3],{266:function(t,e,r){(function(t,e,r,a){location.hash.length<=1&&(alert("分享链接不正确"),window.close());var o=location.hash.substr(1);new t({el:"#app",data:{interface:{},query:[{name:"",must:0,remark:""}],header:[{name:"",value:"",remark:""}],body:[{name:"",type:0,must:0,remark:""}],param:[],bodyInfo:{type:0,rawType:0,rawTextRemark:"",rawFileRemark:"",rawText:"",rawJSON:[{name:"",must:1,type:0,remark:"",show:1,mock:"",drag:1}]},outInfo:{type:0,rawRemark:"",rawMock:"",jsonType:0},result:[],resultObject:[{name:"",must:0,type:0,remark:"",show:0,mock:"",drag:1}],resultArray:[{name:null,must:0,type:0,remark:"",show:0,mock:"",drag:1}],drawMix:[]},computed:{querySave:function(){return this.query.filter(function(t){return!!t.name})},headerSave:function(){return this.header.filter(function(t){return!!t.name})},bodySave:function(){return this.body.filter(function(t){return!!t.name})},queryCount:function(){return this.querySave.length},headerCount:function(){return this.headerSave.length},bodyCount:function(){return this.bodySave.length},paramCount:function(){return this.param.length},rawMock:function(){var t=!1,r={};if(1==this.bodyInfo.type&&2==this.bodyInfo.rawType&&this.bodyInfo.rawJSON){r=0==this.bodyInfo.rawJSONType?{}:[],t=!0;var a=e.resultSave(this.bodyInfo.rawJSON);e.convertToJSON(a,r)}var o=e.handleMockInfo(0,this.param,this.query,this.header,t?r:this.body,this);return e.mock(this.outInfo.rawMock,o)},rawJSON:function(){var t=0==this.bodyInfo.rawJSONType?{}:[],r=e.resultSave(this.bodyInfo.rawJSON);return e.convertToJSON(r,t),e.format(JSON.stringify(t),1,r,this.status).draw},paramTab:function(){return"Param ("+this.paramCount+")"},queryTab:function(){return"Query ("+this.queryCount+")"},headerTab:function(){return"Header ("+this.headerCount+")"},bodyTab:function(){return"Body ("+(0==this.bodyInfo.type?this.bodyCount:"Raw")+")"},editInfo:function(){return this.interface?this.interface.createdAt?(this.interface.owner?this.interface.owner.name:"")+"在"+this.interface.createdAt+"创建，最近修改被"+(this.interface.editor?this.interface.editor.name:"")+"在"+this.interface.updatedAt+"改动":"接口尚未保存":""}},methods:{showInfo:function(r){if(this.interface=r,this.interface.queryParam.length>0){var a=this.query[0];this.query=this.interface.queryParam,this.query.forEach(function(t){t.value&&"object"==typeof t.value&&t.value instanceof Array&&(t.value={type:0,status:"",data:t.value.map(function(t){return{value:t,remark:""}})})}),this.query.push(a)}else this.interface.queryParam=this.query;if(this.interface.bodyParam.length>0){var a=this.body[0];this.body=this.interface.bodyParam,this.body.forEach(function(t){t.value&&"object"==typeof t.value&&t.value instanceof Array&&(t.value={type:0,status:"",data:t.value.map(function(t){return{value:t,remark:""}})})}),this.body.push(a)}else this.interface.bodyParam=this.body;if(this.interface.header.length>0){var a=this.header[0];this.header=this.interface.header,this.header.push(a)}else this.interface.header=this.header;if(this.interface.outParam.length>0?(e.initResultShow(this.interface.outParam),this.result=this.interface.outParam):this.interface.outParam=this.result,this.interface.restParam.length>0?(this.param=this.interface.restParam,this.param.forEach(function(t){t.value&&"object"==typeof t.value&&t.value instanceof Array&&(t.value={type:0,status:"",data:t.value.map(function(t){return{value:t,remark:""}})})})):this.interface.restParam=this.param,this.interface.bodyInfo){this.bodyInfo=this.interface.bodyInfo,void 0===this.bodyInfo.rawText&&t.set(this.bodyInfo,"rawText",""),void 0===this.bodyInfo.rawTextRemark&&t.set(this.bodyInfo,"rawTextRemark",""),void 0===this.bodyInfo.rawFileRemark&&t.set(this.bodyInfo,"rawFileRemark",""),void 0==this.bodyInfo.rawJSON?t.set(this.bodyInfo,"rawJSON",[{name:"",must:1,type:0,remark:"",show:1,mock:"",drag:1}]):e.initResultShow(this.bodyInfo.rawJSON);for(var o=!1,i=0;i<this.header.length;i++){var a=this.header[i];if("content-type"==a.name.toLowerCase()&&"application/json"==a.value.toLowerCase()){o=!0;break}}if(o&&this.bodyInfo.rawText){var a;try{a=JSON.parse(this.bodyInfo.rawText)}catch(t){}if(a){var n=[];for(var s in a)e.handleResultData(s,a[s],n,null,1);this.bodyInfo.rawJSON=n,this.bodyInfo.rawText="",this.bodyInfo.rawType=2}}}else this.interface.bodyInfo=this.bodyInfo;this.interface.outInfo?(this.outInfo=this.interface.outInfo,void 0===this.outInfo.jsonType?t.set(this.outInfo,"jsonType",0):0==this.outInfo.jsonType?this.resultObject=this.result:this.resultArray=this.result):this.interface.outInfo=this.outInfo,this.interface.before?"string"==typeof this.interface.before&&(this.interface.before={mode:0,code:this.interface.before}):t.set(this.interface,"before",{mode:0,code:""}),this.interface.after?"string"==typeof this.interface.after&&(this.interface.after={mode:0,code:this.interface.after}):t.set(this.interface,"after",{mode:0,code:""});var a=1==this.outInfo.jsonType?[]:{},n=e.resultSave(this.result),h=!1,f={};if(1==this.bodyInfo.type&&2==this.bodyInfo.rawType&&this.bodyInfo.rawJSON){f=0==this.bodyInfo.rawJSONType?{}:[],h=!0;var u=e.resultSave(this.bodyInfo.rawJSON);e.convertToJSON(u,f)}var d=e.handleMockInfo(0,this.param,this.query,this.header,h?f:this.body);e.convertToJSON(n,a,d),this.drawMix=e.format(JSON.stringify(a),1,n,this.status).draw},methodColor:function(t){return e.methodColor(t)}},created:function(){var t=this;r.get("/interface/share",{id:o}).then(function(e){200==e.code?(a.stopLoading(),t.showInfo(e.data)):(alert("接口不存在!"),window.close())})}});a.ready(function(){a.startLoading()})}).call(e,r(3),r(9),r(4),r(0))}},[266]);