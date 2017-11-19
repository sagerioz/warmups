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



let test = { Erica: 9999999999, Sage: 9799891111}
function undoRedo(object) {
  let arrBackups = [], arrRefs = [], redoObj = {};
  let backup = function(object) {
// The object that will keep track of what was in obj
// when it was passed in.
      var objBackup = {};
      for (let key in object) {
        objBackup[key] = object[key];
      }

// Add the backup to the array of backups.
      arrBackups.push(objBackup);

// Add a reference to obj to the array of references.
      arrRefs.push(object);

// Return a backup ID.
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

         // console.log("Deleted action!", object)
          return object;
    },
		undo: function() {
    // Reference the backup object.
    try {
            if(arrBackups.length === 0) throw "Nothing to undo!";
        }
        catch(err) {
          return err;
        }
        let backupID = arrBackups.length-1;
        var objBackup = arrBackups[backupID];
        let redoObj = object;
        object = objBackup;
        arrBackups = [];
        return object;
    },
		redo: function() {
    try {
            if(redoObj !== object) throw "Nothing to redo!";
          }
          catch(err) {
            return err;
          }

        object = redoObj;
        return redoObj;
    }
	}
};
let answer = undoRedo(test);
console.log("GET ERICA:", answer.get('Erica'));
console.log("SET Erica TO 9162923214:", answer.set('Erica', 9162923214));
console.log("GET ERICA:", answer.get('Erica'));
console.log("SET Erica TO 1234567890:", answer.set('Erica', 1234567890));
console.log("UNDO", answer.undo());
console.log("GET Erica's number:", answer.get('Erica'));
