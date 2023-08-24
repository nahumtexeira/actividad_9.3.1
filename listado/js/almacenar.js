
    document.addEventListener("DOMContentLoaded", function () {
      const itemInput = document.getElementById("item");
      const addButton = document.getElementById("agregar");
      const itemList = document.getElementById("contenedor");
      const clearButton = document.getElementById("limpiar");

      // Cargar datos almacenados al cargar la página
      const savedItems = JSON.parse(localStorage.getItem("items")) || [];
      savedItems.forEach(itemText => {
        const newItem = document.createElement("li");
        newItem.classList.add("list-group-item");
        newItem.textContent = itemText;
        itemList.appendChild(newItem);
      });

      addButton.addEventListener("click", function () {
        const newItemText = itemInput.value.trim();
        if (newItemText !== "") {
          const newItem = document.createElement("li");
          newItem.classList.add("list-group-item");
          newItem.textContent = newItemText;
          itemList.appendChild(newItem);

          // Guardar el nuevo elemento en el almacenamiento local
          savedItems.push(newItemText);
          localStorage.setItem("items", JSON.stringify(savedItems));

          itemInput.value = "";
        }
      });

      clearButton.addEventListener("click", function () {
        itemList.innerHTML = "";

        // Limpiar los datos almacenados en el almacenamiento local
        localStorage.removeItem("items");
      });
    });
 
