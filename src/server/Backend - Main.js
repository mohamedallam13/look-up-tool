
function doGet(e) {
  addToLog(e)
  var variables = {};
  variables.title = "ATHR Refunds Lookup"
  if(sitePagesManager.Route[e.parameters.v]){
    return sitePagesManager.render(e.parameters.v,variables);
  }else{
    return sitePagesManager.render('index',variables);
  }
}

function addToLog(e){
  const WEBAPPLOG_FILE_ID = '1v8htxbB6Rrz6Tc0sDoeyf6UP0bQ_EUvz';
  var logObj = Utils.getJSONData(WEBAPPLOG_FILE_ID);
  var email = Session.getActiveUser().getEmail();
  var date = new Date();
  logObj[date] = {}
  logObj[date].user = email;
  logObj[date].event = e;
  Utils.writeJSON(logObj,WEBAPPLOG_FILE_ID);
}


function getJSONDB(section){
  var LOGS_FILE_Id = "1vxayvvksCqhDu15HqkdJzO4xQV7kDuYM";
  var logObj = Utils.getJSONData(LOGS_FILE_Id);
  var date = Utilities.formatDate(new Date(), "GMT+2:00", "dd.MM.YYYY HH:mm:ss");
  logObj[date] = {}
  logObj[date].section = section;
  Logger.log(section);
  const CLAIM_CATEGORIES_INEXES_FILE_IDS_OBJ  = {
    normalClaims: "11_Ves6HziZ4S4uk2BIw97aUG__NgjXkg",
    thirdParty: "1xzndDuoJwQJGYTWKEZt5b6lK8OoGYrHA"
  } 
  const INDEX_FILE_ID = CLAIM_CATEGORIES_INEXES_FILE_IDS_OBJ[section];
  var allDataObjString = getJSONDataString(INDEX_FILE_ID);
  Utils.writeJSON(logObj,LOGS_FILE_Id);
  return allDataObjString;
}

function getJSONDataString(INDEX_FILE_ID){
  var indexesFile = Utils.getJSONData(INDEX_FILE_ID);
  var DBFilesIdArr = indexesFile.dbFileIds;
  var allDataObj = {};
  allDataObj.indexes = indexesFile.indexes;
  allDataObj.headerMap = indexesFile.headerMap;
  allDataObj.selectBy = indexesFile.selectBy;
  allDataObj.selectByinnerHTML = getSelectByInnerHTML(allDataObj.selectBy,allDataObj.headerMap);
  var dbObj = {};
  DBFilesIdArr.forEach(function(fileId){
    var DBFileObj = Utils.getJSONData(fileId);
    dbObj = mergeObjects(dbObj,DBFileObj);
  })
  allDataObj.dbObj = dbObj;
  var allDataObjString = JSON.stringify(allDataObj);
  return allDataObjString;
}

function getSelectByInnerHTML(selectByObj,headerMap){
  var selectByArr = Object.keys(selectByObj);
  var selectByString = '<option value="" disabled selected>Search By</option>';
  selectByArr.forEach(function(selectByEl){ 
    selectByString += "<option value=" + headerMap[selectByEl] + ">" + selectByEl + "</option>";
  })
  return selectByString;
}


function mergeObjects(obj_1,obj_2){
  var obj = {};
  var keys_1 = Object.keys(obj_1)
  var keys_2 = Object.keys(obj_2)
  keys_1.forEach(function(key){
    obj[key] = obj_1[key];
  })
  keys_2.forEach(function(key){
    obj[key] = obj_2[key];
  })
  return obj;
}