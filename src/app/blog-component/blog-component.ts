import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-blog-component',
  imports: [FormsModule],
  templateUrl: './blog-component.html',
  styleUrl: './blog-component.css'
})
export class BlogComponent {
  posts = [
    {
      titulo: 'Primeiro Post',
      autor: 'Luan',
      data: '29/11/2017',
      conteudo: 'Gremio maior do Sul🔵⚪⚫',
      curtidas: 0,
      comentarios: [] as string[]
    },
    {
      titulo: 'Segundo Post',
      autor: 'Marcos',
      data: '02/11/2012',
      conteudo: 'Palmeiras não tem mundial 🌴🚫🌍',
      curtidas: 0,
      comentarios: [] as string[]
    },
    {
      titulo: 'Terceiro Post',
      autor: 'Rogério',
      data: '18/12/2005',
      conteudo: 'Tri mundial e nunca caiu 🔴⚪⚫',
      curtidas: 0,
      comentarios: [] as string[]
    }
  ];

  //Essas variáveis guardam o que a pessoa digita no input de comentário de cada post.
  novoComentario0 = '';
  novoComentario1 = '';
  novoComentario2 = '';
  //Recebe o número do post (index).
  curtir(index: number) {
    this.posts[index].curtidas++;
  }

  adicionarComentario(index: number, texto: string) {
    const t = (texto || '').trim();
    if (!t) return;
    this.posts[index].comentarios.push(t);

    if (index === 0) this.novoComentario0 = '';
    if (index === 1) this.novoComentario1 = '';
    if (index === 2) this.novoComentario2 = '';
  }
}
