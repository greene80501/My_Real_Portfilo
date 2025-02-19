// List of code snippets
const codeSnippets = [
    'console.log("Hello, World!");',
    'def hello_world():',
    'print("Hello, World!")',
    'int main() {',
    '#include <stdio.h>',
    'public class HelloWorld {',
    '<html>',
    '<body>',
    'echo "Hello, World!";',
    'console.log("Hello, JavaScript!");',
    'function greet() {',
    'let x = 10;',
    'if (x > 5) {',
    '// Comment line',
    '/* Multi-line comment */',
    '<div class="container">',
    'SELECT * FROM users;',
    'try {',
    'catch (Exception e) {',
    'for (int i = 0; i < n; i++) {',
    'while (true) {',
    'namespace MyApp {',
    'import numpy as np',
    'using System;',
    'class MyClass:',
    '#!/bin/bash',
    'const app = express();',
    'document.addEventListener("DOMContentLoaded", function() {',
    'CREATE TABLE users (',
    'FROM django.shortcuts import render',
    // Add more snippets as needed
];

// Function to create a code snippet element
function createCodeSnippet(text) {
    const snippet = document.createElement('div');
    snippet.classList.add('code-snippet');
    snippet.textContent = text;
    snippet.style.left = Math.random() * 100 + '%';
    snippet.style.animationDuration = 5 + Math.random() * 5 + 's';
    snippet.style.opacity = 0.5 + Math.random() * 0.5;
    snippet.style.fontSize = 15 + Math.random() * 12 + 'px';
    return snippet;
}

// Add code snippets to the hero section
function addCodeSnippets() {
    const codeFallContainer = document.querySelector('.code-fall');

    setInterval(() => {
        const snippetText = codeSnippets[Math.floor(Math.random() * codeSnippets.length)];
        const snippetElement = createCodeSnippet(snippetText);
        codeFallContainer.appendChild(snippetElement);

        // Remove the snippet after it falls
        snippetElement.addEventListener('animationend', () => {
            codeFallContainer.removeChild(snippetElement);
        });
    }, 300); // Interval for adding new snippets
}

// Initialize the code snippets falling effect
document.addEventListener('DOMContentLoaded', () => {
    addCodeSnippets();
});

const timelineWrapper = document.querySelector('.timeline-wrapper');
let isDragging = false;
let startX;
let scrollLeft;

// Enable dragging
timelineWrapper.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.pageX - timelineWrapper.offsetLeft;
    scrollLeft = timelineWrapper.scrollLeft;
    timelineWrapper.style.cursor = 'grabbing'; // Change cursor to grabbing
});

timelineWrapper.addEventListener('mouseleave', () => {
    isDragging = false;
    timelineWrapper.style.cursor = 'grab'; // Revert cursor to grab
});

timelineWrapper.addEventListener('mouseup', () => {
    isDragging = false;
    timelineWrapper.style.cursor = 'grab';
});

timelineWrapper.addEventListener('mousemove', (e) => {
    if (!isDragging) return; // If not dragging, skip
    e.preventDefault();
    const x = e.pageX - timelineWrapper.offsetLeft;
    const walk = (x - startX) * 3; // Scroll faster by multiplying the distance
    timelineWrapper.scrollLeft = scrollLeft - walk;
});

// Enable horizontal scrolling with mouse wheel
timelineWrapper.addEventListener('wheel', (e) => {
    e.preventDefault();
    timelineWrapper.scrollBy({
        left: e.deltaY * 2, // Scroll horizontally with the mouse wheel
        behavior: 'smooth'
    });
});
function toggleExpand(item) {
    item.classList.toggle('expanded'); // Toggle the 'expanded' class
}
window.addEventListener('scroll', function() {
    var aboutSection = document.querySelector('.about_me');
    var rect = aboutSection.getBoundingClientRect();

    if (rect.top < window.innerHeight - 100) {
        aboutSection.classList.add('scrolled-into-view');
    }
});
