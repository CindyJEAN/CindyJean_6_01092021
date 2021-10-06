// class Main{
//   /**
//    * [constructor description]
//    *
//    * @param   {HTMLElement}  domTarget  [domTarget description]
//    * @param   {String}  className  className of the main tag : "index-main" or "photographer-main"
//    *
//    */
//   constructor(domTarget, className, profiles){
//     this.DOM = document.createElement("main");
//     domTarget.appendChild(this.DOM);
//     this.DOM.className = className;
//     this.profiles = profiles;
//     this.className = className; 
//     this.render();
//   }

//   render(){
//     if (this.className === "index-main") {
//     this.DOM.innerHTML = `<h1>Nos photographes</h1>`;
//     this.profiles.forEach(profileData => {
//       new Profile(this.DOM, profileData);
//     })}
//     else {
//       new Button(this.DOM, "Contactez-moi");
//       // new Profile(this.DOM, profiles);
//       new Dropdown(this.DOM);
//       new PhotographerInfo(this.DOM);
//       new Modal(this.DOM, "lightboxModal");
//       // new WorkPhoto(this.DOM);
//     } 
//   }
// }