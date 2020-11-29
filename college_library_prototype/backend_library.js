console.log("Welcome to the virtual backend of Mohan's library")

var books_list=[]

class Book {
    constructor(name,ISBN,Author,genre){
        this.name=name
        this.isbn=ISBN,
        this.genre=genre,
        this.Author=Author
    }
    introduce_book() {
        return `name: ${this.name},author:${this.isbn}, genre=${this.genre}, author=${this.Author}`
    }
}


function add_book(){
    // debugger
    var name =document.getElementById("Bookname");
    var ISBN =document.getElementById("BookISBN")
    var Author =document.getElementById("BookAuthor")
    let Radio_selection=document.getElementsByName("genres");
    var Selected_radio='';
    for (genre=0;genre<Radio_selection.length;genre++){
        if(Radio_selection[genre].checked){
            Selected_radio+=Radio_selection[genre].id
            break
        }
    }
    book_add=new Book(name.value,ISBN.value,Author.value,Selected_radio)
    books_list.push(book_add)


    main_div=document.querySelector(".addedbooks");
    sub_div=document.createElement("div")
    sub_div.setAttribute("class","header")
    if(books_list.length%2!=0){
        sub_div.style.backgroundColor="aquamarine"
    } 
    name_html=add_css(name.value)
    ISBN_html=add_css(ISBN.value)
    Author_html=add_css(Author.value)
    Selected_radio_html=add_css(Selected_radio)
    sub_div.appendChild(name_html)
    sub_div.appendChild(Author_html)

    sub_div.appendChild(Selected_radio_html)
    sub_div.appendChild(ISBN_html)

    main_div.appendChild(sub_div)
    add_popup(name.value)

    // name.value="";
    // ISBN.value="";
    // Author.value="";

}         


function add_css(item){
    item_value=document.createElement("h4")
    item_value.innerText=item
    item_value.setAttribute("class","header_Element")
    return item_value
}

function add_popup(val){
    main_pop=document.getElementById("POPup");
    popUp=document.getElementById("popUpText");
    removeAllChildNodes(popUp)
    popUpText=document.createElement("h4")
    popUpText.innerText=`Congratulations, your book ${val} has been successfully added to the list`
    popUp.appendChild(popUpText)
    main_pop.style.display="flex"
}



function removePopUp(){
    popUp=document.getElementById("POPup");
    popUp.style.display="none"
}



function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
  }