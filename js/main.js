document.querySelector('#addItem').addEventListener('click', addToTheList)
document.querySelector('#clearCompleted').addEventListener('click', clearAllCompleted)
document.querySelector('#clearAll').addEventListener('click', clearAllItems)

function addToTheList(){
    //If statement was added to ensure that no empty items are added to the list.
    if(document.getElementById('entryText').value !== ''){
        const node = document.createElement("li");
        node.addEventListener('click', completed);
        node.setAttribute("class", "notCompleted");
        const entryText = document.getElementById('entryText').value;
        const textnode = document.createTextNode(entryText);
        
        node.appendChild(textnode);
        document.getElementById("orderedList").appendChild(node);
    
        document.getElementById('entryText').value = ''
    }else
    alert('Please add an item.')
}

function completed(){

    let check = this.getAttribute("class")
    if(check !== "completed"){
    this.setAttribute("class", "completed")
    }else
    this.setAttribute("class", "notCompleted")
}

function clearAllCompleted(){
    //collection that contains all elements with the class "completed"
    const collection = document.getElementsByClassName("completed");

    //as long as there are elements in collection, collection.length > 0, the first element of the collection will be removed
    while(collection.length > 0){
        collection[0].parentNode.removeChild(collection[0]);
    }
}

function clearAllItems(){

    const list = document.getElementById("orderedList");

    while (list.hasChildNodes()) {
    list.removeChild(list.firstChild);
    }
}