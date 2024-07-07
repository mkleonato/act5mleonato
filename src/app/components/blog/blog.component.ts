import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Inoticia } from '../../interfaces/inoticia.interfaces';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {
  arrNoticias: Inoticia[]=[
    {title:"Mi segunda noticia",imageUrl:"https://placehold.co/600x400",content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",date:"02/02/2022"},
    {title:"Mi primera noticia",imageUrl:"https://placehold.co/600x400",content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",date:"01/01/2001"}
   
  ]

  newNoticia: Inoticia={title:"",imageUrl:"",content:"",date:""}

  guardarNoticia(){
    if (this.newNoticia.title!=="" && this.newNoticia.content!=="" && this.newNoticia.date!=="" && this.newNoticia.imageUrl!=="" ){
      this.arrNoticias.unshift(this.newNoticia);
    this.newNoticia={title:"",imageUrl:"",content:"",date:""};
    } else {
      alert ("los campos deben ir todos rellenos")
    }
    
  }


  cargarNoticia():string{
    let html:string =" ";
    this.arrNoticias.forEach((noticia:Inoticia)=>{html=html+`<h2 >${noticia.title}</h2>
    <p class="newsDate">${noticia.date}</p>
    <img
      class="newsImage"
      src="${noticia.imageUrl}"
      alt="Imagen de la Noticia"/>
      <p class="newsContent">${noticia.content}</p>
      <hr>
      `})
    return html
  }

}
