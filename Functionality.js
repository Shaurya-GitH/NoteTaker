let counter = 0;

function add() {
    const addButton = document.getElementById("add");
    const division = document.getElementById("division");

    addButton.addEventListener("click", function () {
        counter++;

        // Disable button if 8 notes are created
        if (counter === 8) {
            addButton.disabled = true;
        }

        // Create note container
        const noteContainer = document.createElement("div");
        noteContainer.className = "container";

        // Create textarea
        const noteTextarea = document.createElement("textarea");
        noteTextarea.className = "text";
        noteTextarea.placeholder = "Enter note";

        // Create delete button
        const deleteButton = document.createElement("button");
        deleteButton.className = "cross";
        deleteButton.innerHTML = "X";
        deleteButton.title="deletes the note"

        // Append elements
        noteContainer.appendChild(noteTextarea);
        noteContainer.appendChild(deleteButton);
        division.appendChild(noteContainer);

        // Delete button event
        deleteButton.addEventListener("click", function () {
            noteContainer.remove(); // Remove the correct note
            counter--;

            // Re-enable add button if a note is deleted
            if (counter < 8) {
                addButton.disabled = false;
            }
        });
    });
}

// Ensure function runs after DOM loads
document.addEventListener("DOMContentLoaded", add);
