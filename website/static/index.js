function deletNote(userId) {
    fetch(".delete-note", {
        method: "post",
        body: JSON.stringify({ noteId: noteId}),
    }).then((_res) => {
        window.location.href = "/"
    });
}