 
//book object
function Book(title, author, pages){
    this.title = title
    this.author = author
    this.pages = pages  
 }
// function to take user’s input and store it
const addBook = (ev) => {
        ev.preventDefault(); //to stop form submitting 
        const title=document.querySelector('#title').value
        const pages=document.querySelector('#pages').value
        const author=document.querySelector('#author').value
    
            let book = new Book(title,author,pages);
            localforage.setItem('book',book).then(data=>{
               //data needs to be array [], not this {} this does not have push method
                data.push(book);  //update database
                localforage.setItem('book',data).then(updated=>{
                    //we can repaint the DOM again, inside here
                    //becaue here we have the updated db.
                data.forEach((item,index)=>{
                const shelf = document.querySelector('.library');
            
                const card = document.createElement('div');
                card.className ='book';
                card.setAttribute("id", index);
            
                const img = document.createElement('img');/// add image
                card.appendChild(img);
                img.src = "img/img1.jpg";
            
                const title = document.createElement('h4');
                title.innerHTML = item.title;
            
                const author = document.createElement('p');
                author.innerHTML = ' By: ' + item.author;
            
                const pages = document.createElement('p');
                pages.innerHTML = item.pages + 'Pages';
            
                const labelRead = document.createElement('lable');
                labelRead.innerHTML = 'Read?'
                const read = document.createElement('input');
                read.setAttribute('type', 'checkbox');
                //another way to add element to html .. here i am adding remove button 
                // let html=`<button class="removebtn rmBtn" onclick="remove(${title.id})">Remove</button>`;
                // card.innerHTML=html;   
                const removeBtn = document.createElement('button');
                removeBtn.className ='removebtn';
                removeBtn.innerHTML = 'Remove';
                removeBtn.setAttribute("id", index);            
                removeBtn.addEventListener('click', removeBook);
            
                    
            
                shelf.appendChild(card);
                card.appendChild(title);
                card.appendChild(author);
                card.appendChild(pages);
                card.appendChild(labelRead);
                labelRead.appendChild(read);
                card.appendChild(removeBtn);
                    })
                }).catch(err)
                console.log(err)      
            }) //.catch(err)
            // console.log(err)
            document.querySelector('form').reset(); //to clear the form for another book
            

    };       
        
         function render(){
             //get library Books from the local storage 
        //    localforage.getItem('book').then(data=>{
        //         data.forEach((item,index)=>{
                

           
        //     if (render.caller !== removeBook) {
            console.log(err)
            
    }
            // render()

        // remove book
function removeBook(e) {
     let buttonId = e.target.getAttribute("id");
     let cardToRemove = document.getElementById(`${buttonId}`);
     cardToRemove.remove();
     localforage.removeItem(`book${id}`)
        };


          
//open or close (add book) form 
function openForm() {
    document.getElementById("myForm").style.display = "block";
};
        
function closeForm() {
     document.getElementById("myForm").style.display = "none";
}; 
document.addEventListener('DOMContentLoaded', () => {
            document.getElementById('add').addEventListener('click', addBook); 
        });     
