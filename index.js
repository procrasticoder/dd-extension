function arrangeSelectionTab(){
    const tableHeader = [];
    for(i=0;i<3;i++){
        tableHeader.push(document.getElementsByClassName('col-header')[i].innerHTML)
    }

    for (i=0;i<3;i++) {
        document.getElementById(`drag${i+1}`).innerHTML = tableHeader[i];
    }
}



function allowDrop(ev) {
    ev.preventDefault();
  }
  
  function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}
  
  function drop(ev) {
    ev.preventDefault();
    var sourceId = ev.dataTransfer.getData("text");
    var destinationId = ev.target.id
    let sourceData = document.getElementById(sourceId).innerHTML;
    let destinationData = document.getElementById(destinationId).innerHTML;
    document.getElementById(sourceId).innerHTML = destinationData;
    document.getElementById(destinationId).innerHTML = sourceData;
    for(i=0;i<3;i++){
        let temp = document.getElementsByClassName(sourceId)[i].innerHTML;
        document.getElementsByClassName(sourceId)[i].innerHTML = document.getElementsByClassName(destinationId)[i].innerHTML;
        document.getElementsByClassName(destinationId)[i].innerHTML= temp
    }
    
    arrangeSelectionTab()
  }

arrangeSelectionTab()