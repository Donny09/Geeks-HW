const input = document.getElementById('input')
const createButton = document.querySelector('#create_button')
const todoList = document.querySelector('#todo_list')

const createTodo = () => {
    if(input.value.trim() === '') {
        input.value = ''
        return false
    } else {
        const div = document.createElement('div')
        const text = document.createElement('h3')
        const divButton = document.createElement('div')
        const editButton = document.createElement('button')
        const deleteButton = document.createElement('button')
    
        div.setAttribute('class', 'block_text')
        divButton.setAttribute('class', 'divButton')
        editButton.setAttribute('class', 'edit_button')
        deleteButton.setAttribute('class', 'delete_button')
        editButton.innerHTML = 'EDIT'
        deleteButton.innerHTML = 'DELETE'
        text.innerHTML = input.value
    
        div.append(text)
        div.append(divButton)
        divButton.append(editButton)
        divButton.append(deleteButton)
        todoList.append(div)
        input.value = ''

        deleteButton.addEventListener('click', () => {
            div.remove()
        })
        editButton.onclick = () => {
            let editedText = prompt(`Edit: ${text.textContent}`).trim()
            text.innerHTML = editedText
        }
    }
}

createButton.addEventListener('click', createTodo)