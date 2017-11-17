// CODEWARS
//The purpose of this kata is to implement the undoRedo function.
//
// This function takes an object and returns an object that has these actions to be performed on the object passed as a parameter:
//
// set(key, value) Assigns the value to the key. If the key does not exist, creates it.
//
// get(key) Returns the value associated to the key.
//
// del(key) removes the key from the object.
//
// undo() Undo the last operation (set or del) on the object. Throws an exception if there is no operation to undo.
//
// redo() Redo the last undo operation (redo is only possible after an undo). Throws an exception if there is no operation to redo.
//
// After set() or del() are called, there is nothing to redo.
//
// All actions must affect to the object passed to undoRedo(object) function. So you can not work with a copy of the object.
//
// Any set/del after an undo should disallow new undos.



let test = {'Erica': 9709334521, 'Sage': 9799891111}
function undoRedo(object) {
  let arrBackups = [], arrRefs = [], redoObj = {};
  let backup = function(object) {
          // The object that will keep track of what was in obj when it was passed
          // in.
          var objBackup = {};
            for(var key in object) {
                try{ objBackup[key] = object[key];
                      // console.log("BACKUP", objBackup);
                   }catch(e){
                       return "Whoops";
                       }
           }
           // Add the backup to the array of backups.
          arrBackups.push(objBackup);
          console.log(arrBackups)
 
          // Add a reference to obj to the array of references.
          arrRefs.push(object);
 
          // Return a backup ID.
          console.log("#", arrBackups.length - 1)
          return arrBackups.length - 1;
           }


	return {
		set: function(key, value) {
         backup(object);
         return object[key]=value
    },
		get: function(key) {
    return object[key];
    },
		del: function(key) {
    backup(object);
    delete object[key];
          console.log("Deleted action!", object)
          return object;
    },
		undo: function() {
    console.log("We are trying to undo")
    let backupID = arrBackups.length-1;
    if(arrBackups.length === 0) {
      throw new Error("Nothing to undo!");
    }
    // Reference the backup object.
    try { var objBackup = arrBackups[backupID];
    console.log("UNDID IT", objBackup);
    let redoObj = object;
    object = objBackup;}catch(e){return 'whoops'}
    return object;

    },
		redo: function() {
    if(redoObj !== object){
      throw new Error("Nothing to redo!");    }
    object = redoObj;
    return redoObj;
    }
	}
};
let answer = undoRedo(test);
console.log("SET Erica TO 9162923214", answer.set('Erica', 9162923214));
console.log(answer.get('Erica'));
console.log("DEL X ", answer.del('Erica'))
console.log("UNDO", answer.undo());
console.log("GET Erica's number", answer.get('Erica'));
