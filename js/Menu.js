class Menu {
    constructor(id, className, items){
        this.id = id;
        this.className = className;
        this.items = items;
    }
    render(){
        let result = `<ul class="${this.className}" id="${this.id}">`;
        for (let item of this.items){
            if (item instanceof MenuItem) {
                result += item.render();
            } else if(item instanceof SubMenu) {
				result += item.render();
			}
        }
        result += `</ul>`;
        return result;
    }
    remove(){
		let ul = document.getElementById(`${this.id}`);
		ul.parentNode.removeChild(ul);
    }
}