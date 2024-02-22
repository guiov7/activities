class CardNews extends HTMLElement { // Ordenação de Components
    // construtor operacional
    constructor() {
        super();

        const shadow = this.attachShadow({mode: "open"});
        shadow.appendChild(this.build()); // atrela o comprador
        shadow.appendChild(this.styles()); // atrela o estlilista
    }
    // engenheiro
    build() {
        // criar elementos
        const componentRoot = document.createElement("div");
        const cardLeft = document.createElement("div");
        const cardRight = document.createElement("div");
        const autor = document.createElement("span");
        const linkTitle = document.createElement("a");
        const newsContent = document.createElement("p");
        const newsImg = document.createElement("img");
        // setar classes necessárias
        componentRoot.setAttribute("class", "card");
        cardLeft.setAttribute("class", "card__left"); 
        cardRight.setAttribute("class", "card__right"); 
        // amarrar
        componentRoot.appendChild(cardLeft);
        componentRoot.appendChild(cardRight);
        cardLeft.appendChild(autor);
        cardLeft.appendChild(linkTitle);
        cardLeft.appendChild(newsContent);
        cardRight.appendChild(newsImg);

        // add conteúdos dinâmicos
        autor.textContent = "By "+(this.getAttribute("autor") || "Anonymous");
        linkTitle.textContent = this.getAttribute("title");
        newsContent.textContent = this.getAttribute("content");
        newsImg.src = this.getAttribute("photo") || "./assets/img/default-img.jpg";
        
        // call the component
        return componentRoot;
    }
    // arquiteto
    styles() {
        const style = document.createElement("style");
        style.textContent = `
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Segoe UI', sans-serif;
        }
        
        .card {
            width: 80%;
            display: flex;
            box-shadow: 9px 9px 27px 0px rgba(0,0,0,0.75);
            -webkit-box-shadow: 9px 9px 27px 0px rgba(0,0,0,0.75);
            -moz-box-shadow: 9px 9px 27px 0px rgba(0,0,0,0.75);
            margin: 10px;
            justify-content: space-between;
        }
        
        .card__left {
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding-left: 10px;
        }
        
        .card__left > span {
            font-size: 12px;
            font-weight: 500;
        }
        
        .card__left > a {
            margin-top: 10px;
            font-size: 25px;
            color: #000;
            text-decoration: none;
            font-weight: bold;
        }
        
        .card__left > p {
            color: gray;
        }
        
        .card__right img {
            width: 250px;
            padding: 7.5px;
            height: auto;
        }
    
        `
        return style;
    }
}

customElements.define("card-news", CardNews);