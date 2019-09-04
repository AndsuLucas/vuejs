Vue.component('todo-item', {
	props: ['todo'],
	template: "<td>{{todo.title}}</td>"


})

const app =  new Vue({
	el: "#app",	
	data: {
		todolist:[]
	},
	created (){
		fetch("https://jsonplaceholder.typicode.com/posts")
			.then(response => response.json())
			.then(json => {  this.todolist = json })
	}
	
})