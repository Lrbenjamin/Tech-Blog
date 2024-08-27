const newPostHandler = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#new-post-title').value.trim();
    const content = document.querySelector('#new-post-content').value.trim();

    if (title && content) {
        const response = await fetch('/api/posts', {
            method: 'POST',
            body: JSON.stringify({ title, content }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Failed to add post.');
        }
    }
};

const editPostHandler = async (event) => {
    event.preventDefault();

    const id = event.target.getAttribute('data-id');
    const title = prompt('Enter the new title:');
    const content = prompt('Enter the new content:');

    if (title && content) {
        const response = await fetch(`/api/posts/${id}`, {
            method: 'PUT',
            body: JSON.stringify({ title, content }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Failed to update post.');
        }
    }
};

const deletePostHandler = async (event) => {
    event.preventDefault();

    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/posts/${id}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert('Failed to delete post.');
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const newPostForm = document.querySelector('#new-post-form');

    if (newPostForm) {
        newPostForm.addEventListener('submit', newPostHandler);
    }

    document.querySelectorAll('.edit-btn').forEach(btn => {
        btn.addEventListener('click', editPostHandler);
    });

    document.querySelectorAll('.delete-btn').forEach(btn => {
        btn.addEventListener('click', deletePostHandler);
    });
});

