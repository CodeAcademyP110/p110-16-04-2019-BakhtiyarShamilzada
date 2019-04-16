"use strict";

// Letter

// const alfabes = document.querySelectorAll('.inner');
// const dropareas = document.querySelectorAll('.dropArea');
// let id;
// let elem;
// let dataMin;
// let dataMax;

// [...alfabes].forEach(alfabe => 
//     {
//         alfabe.ondragstart = function(e)
//         {
//             id = e.target.id;
//         }
//     });

// [...dropareas].forEach(droparea => 
//     {
//         droparea.ondragover = function(e)
//         {
//             elem = document.getElementById(id);
//             dataMin = e.target.getAttribute('data-min');
//             dataMax = e.target.getAttribute('data-max');
//             e.preventDefault();
//             if(id < dataMin || id > dataMax)
//             {
//                 e.target.classList.add('bg-danger');
//             }
//         }
//         droparea.ondragleave = function(e)
//         {
//             e.target.classList.remove('bg-danger');
//         }
//         droparea.ondrop = function(e)
//         {
//             if(id >= dataMin && id <= dataMax)
//             {
//                 e.target.appendChild(elem);
//             }
//             else
//             {
//                 e.target.classList.remove('bg-danger');
//             }
//         }

//     })

const contextMenu = document.querySelector('.context-menu');
const newFolder = document.querySelector('.new-folder');
const cancel = document.querySelector('.cancel');
const create = document.querySelector('.create');
const close = document.querySelector('.fa-times');
const trash = document.querySelector('.fa-trash');
const folderBox = document.querySelector('.folder-box');
document.body.oncontextmenu = function(e)
{
    e.preventDefault();
    const left = event.pageX;
    const top = event.pageY;
    contextMenu.style.left = left + 'px';
    contextMenu.style.top = top + 'px';
    contextMenu.classList.remove('d-none');
    const folderPlus = document.querySelector('.folder-plus');
    folderPlus.onclick = function()
    {
        document.body.style.backgroundColor = 'rgb(200, 200, 200)';
        newFolder.classList.remove('d-none');
        cancel.onclick = function()
        {
            newFolder.classList.add('d-none');
            document.body.style.backgroundColor = 'white';
        }
        
        form.onsubmit = function(e)
        {
            e.preventDefault();
            const input = document.querySelector('input');
            const inputValue = input.value.trim();
            if(input.value.trim())
            {
                const folder = document.createElement('div');
                folder.className = 'folder border border-secondary p-2 text-secondary rounded m-2';
                folder.innerHTML = '<i class="fas fa-folder mr-2"></i>' + inputValue;
                folderBox.appendChild(folder);
                input.value = 'Untitled folder';
                newFolder.classList.add('d-none');
                document.body.style.backgroundColor = 'white';
                folder.onclick = function()
                {
                    folder.classList.toggle('select');
                    if(folder.classList.contains('select'))
                    {
                        trash.classList.remove('d-none');
                    } 
                    if(!document.querySelector('.select'))
                    {
                        trash.classList.add('d-none');
                    }
                }
                trash.onclick = function()
                {
                    [...document.querySelectorAll('.select')].forEach(elem => elem.remove());
                    trash.classList.add('d-none');
                }
                
            }
        }
        close.onclick = function()
        {
            newFolder.classList.add('d-none');
            document.body.style.backgroundColor = 'white';
        }
    }
}

document.body.onclick = function(e)
{
    contextMenu.classList.add('d-none');
    
}




