// FAQ toggle functionality
        document.querySelectorAll('.faq-item button').forEach(button => {
            button.addEventListener('click', () => {
                const faqItem = button.parentElement;
                const content = button.nextElementSibling;
                const icon = button.querySelector('i');
                
                // Toggle content visibility
                content.classList.toggle('hidden');
                
                // Rotate icon
                icon.classList.toggle('rotate-180');
                
                // Close other open FAQs
                document.querySelectorAll('.faq-item').forEach(item => {
                    if (item !== faqItem) {
                        item.querySelector('div').classList.add('hidden');
                        item.querySelector('i').classList.remove('rotate-180');
                    }
                });
            });
        });
        
        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });