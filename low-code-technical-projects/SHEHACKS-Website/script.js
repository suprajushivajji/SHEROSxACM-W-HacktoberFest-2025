// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// FAQ Accordion functionality
document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        const faqItem = question.parentElement;
        const isActive = faqItem.classList.contains('active');
        
        // Close all other FAQ items
        document.querySelectorAll('.faq-item').forEach(item => {
            item.classList.remove('active');
        });

        // Toggle current FAQ item
        if (!isActive) {
            faqItem.classList.add('active');
        }
    });
});

// Add scroll-based animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, {
    threshold: 0.1
});

// Observe all cards and sections
document.querySelectorAll('.card, .ide-card, .ai-card, .resource-card, .faq-item').forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'all 0.6s ease-out';
    observer.observe(element);
});

// Add hover effect to cards
document.querySelectorAll('.card, .ide-card, .resource-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px)';
        card.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.15)';
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
        card.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    });
});

// Add hover effect to resource links
document.querySelectorAll('.resource-card a').forEach(link => {
    link.addEventListener('mouseenter', () => {
        const card = link.closest('.resource-card');
        card.style.transform = 'translateY(-5px)';
        card.style.boxShadow = '0 8px 15px rgba(0, 0, 0, 0.15)';
    });

    link.addEventListener('mouseleave', () => {
        const card = link.closest('.resource-card');
        card.style.transform = 'translateY(0)';
        card.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    });
});

// Add active state to navigation links based on scroll position
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.pageYOffset >= sectionTop - 60) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === current) {
            link.classList.add('active');
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    // Animate sections on scroll
    const sections = document.querySelectorAll('.category-section');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });

    // Resource card hover effects
    const cards = document.querySelectorAll('.resource-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-5px)';
            card.style.boxShadow = '0 8px 15px rgba(0, 0, 0, 0.15)';
            card.style.borderColor = getComputedStyle(document.documentElement)
                .getPropertyValue('--primary-light').trim();
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
            card.style.boxShadow = getComputedStyle(document.documentElement)
                .getPropertyValue('--shadow').trim();
            card.style.borderColor = 'rgba(0, 0, 0, 0.05)';
        });
    });

    // Handle prompt details
    document.querySelectorAll('.prompt-details').forEach(details => {
        details.addEventListener('toggle', () => {
            if (details.open) {
                // Close other details when one is opened
                document.querySelectorAll('.prompt-details').forEach(other => {
                    if (other !== details) {
                        other.open = false;
                    }
                });

                // Add copy button if it doesn't exist
                if (!details.querySelector('.copy-button')) {
                    const promptText = details.querySelector('.prompt-text');
                    const copyButton = document.createElement('button');
                    copyButton.className = 'copy-button';
                    copyButton.innerHTML = '<i class="fas fa-copy"></i> Copy';
                    copyButton.style.cssText = `
                        background: var(--primary);
                        color: var(--text-light);
                        border: none;
                        border-radius: 4px;
                        padding: 0.5rem 1rem;
                        margin-top: 0.5rem;
                        cursor: pointer;
                        font-size: 0.9rem;
                        display: flex;
                        align-items: center;
                        gap: 0.5rem;
                        transition: background-color 0.3s ease;
                    `;
                    
                    copyButton.addEventListener('mouseenter', () => {
                        copyButton.style.backgroundColor = 'var(--primary-dark)';
                    });
                    
                    copyButton.addEventListener('mouseleave', () => {
                        copyButton.style.backgroundColor = 'var(--primary)';
                    });

                    copyButton.addEventListener('click', () => {
                        navigator.clipboard.writeText(promptText.textContent.trim())
                            .then(() => {
                                copyButton.innerHTML = '<i class="fas fa-check"></i> Copied!';
                                setTimeout(() => {
                                    copyButton.innerHTML = '<i class="fas fa-copy"></i> Copy';
                                }, 2000);
                            })
                            .catch(err => {
                                console.error('Failed to copy text:', err);
                                copyButton.innerHTML = '<i class="fas fa-times"></i> Error';
                            });
                    });

                    promptText.insertAdjacentElement('afterend', copyButton);
                }
            }
        });
    });
}); 