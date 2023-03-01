
/*......when need to expand folder...... */

var x = document.getElementById('rootFolder');
x.addEventListener('click', function () {
    expandFolder();
});

function expandFolder() {
    let value = document.getElementById('subRootId');
    if (value.style.display == 'none') {
        document.getElementById('subRootId').style.display = 'block';
    }
    else {
        document.getElementById('subRootId').style.display = 'none';
    }
}




/*......add new folder...... */
var button = document.getElementById('addButtonId');
button.addEventListener('click', function () {
    document.getElementById('rootId').style.display = 'none';
    document.getElementById('subRootId').style.display = 'none';
    document.getElementById('createSection').style.display = 'block';
});




/*......after add new folder......*/
var folder1 = document.getElementById('createButtonId');
folder1.addEventListener('click', function () {
    document.getElementById('rootId').style.display = 'block';
    document.getElementById('subRootId').style.display = 'none';
    document.getElementById('createSection').style.display = 'none';
    createFolder();
});

function createFolder() {
    let rootFolder = document.getElementById('newSubFolder');

    let row = document.createElement('div');
    row.className = 'row m-1';

    let col = document.createElement('div');
    col.className = 'col';

    row.appendChild(col);

    let createNewFolder = document.createElement('button');
    createNewFolder.className = 'btn';
    createNewFolder.innerHTML = 'Folder';
    createNewFolder.id = "subFolderId";
    col.appendChild(createNewFolder);


    let deleteFolder = document.createElement('button');
    deleteFolder.className = 'btn btn-outline-primary deleteButtonClass ms-2';
    deleteFolder.innerHTML = 'delete';
    deleteFolder.id='deleteButtonId';
    

    let buttonNewFolder = document.createElement('button');
    buttonNewFolder.className = 'btn btn-outline-primary addButton ms-2';
    buttonNewFolder.id = "addSubFolderId";
    buttonNewFolder.innerHTML = 'New Folder';

    col.appendChild(createNewFolder);
    col.appendChild(deleteFolder);
    col.appendChild(buttonNewFolder);

    rootFolder.appendChild(row);
}






/*......cancel new folder section......*/
var cancelButton = document.getElementById('cancelButtonId');
cancelButton.addEventListener('click', function () {
    hideCreateModal();
});

function hideCreateModal() {
    document.getElementById('rootId').style.display = 'block';
    document.getElementById('subRootId').style.display = 'none';
    document.getElementById('createSection').style.display = 'none';
}





// var newSubfolder = document.getElementById('addSubFolderId');
// newSubfolder.addEventListener('click', function () {
//     createNewSubFolder();
// });

// function createNewSubFolder() {
//     let x = document.getElementById('subFolderId');

//     let row = document.createElement('div');
//     row.className = 'row ms-2';

//     let col = document.createElement('div');
//     col.className = 'col';

//     row.appendChild(col);

//     let createNewFolder = document.createElement('button');
//     createNewFolder.className = 'newfolder';
//     createNewFolder.innerHTML = 'Folder';
//     createNewFolder.id = "subNewFolderId";
//     col.appendChild(createNewFolder);

//     let buttonNewFolder = document.createElement('button');
//     buttonNewFolder.className = 'addButton';
//     buttonNewFolder.id = "addNewSubFolderId";
//     buttonNewFolder.innerHTML = 'New Folder';

//     col.appendChild(createNewFolder);
//     col.appendChild(buttonNewFolder);

//     x.appendChild(row);
// }





var deleteFolder = document.querySelectorAll(button.deleteButtonClass);

for (let i = 0; i < deleteFolder.length; i++) {
    deleteFolder[i].addEventListener("click",function(){
        deleteSpecificFolder(i);
        console.log("Yes");      
    });
}
function deleteSpecificFolder(index){
    var p=document.getElementById('newSubFolder');
    p.removeChild(p.children[index]);
}




var deleteButton=document.getElementById('deleteButtonId');
deleteButton.addEventListener('click',function(){
    showDeleteFolder();
});




function showDeleteFolder(){
    console.log(deleteButton.innerHTML);

    document.getElementById('rootId').style.display = 'none';
    document.getElementById('subRootId').style.display = 'none';
    document.getElementById('deleteSection').style.display='block';
}







// var deleteFolder=document.getElementById('deleteButtonId');
// deleteFolder.addEventListener('click',function(){
//     document.getElementById('rootId').style.display = 'block';
//     document.getElementById('subRootId').style.display = 'none';
//     document.getElementById('deleteSection').style.display='none';
// });





