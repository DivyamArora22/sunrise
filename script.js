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

        // Contact form: functional without backend (opens email client)
        // If you want backend submission later, see README in the zip.
        const form = document.getElementById('contactForm');
        const statusEl = document.getElementById('formStatus');

        function setStatus(msg) {
            if (statusEl) statusEl.textContent = msg || '';
        }

        if (form) {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                const name = document.getElementById('name')?.value?.trim() || '';
                const email = document.getElementById('email')?.value?.trim() || '';
                const phone = document.getElementById('phone')?.value?.trim() || '';
                const company = document.getElementById('company')?.value?.trim() || '';
                const message = document.getElementById('message')?.value?.trim() || '';

                if (!name || !email || !phone || !message) {
                    setStatus('Please fill all required fields.');
                    return;
                }

                const to = 'divyamarora2213@gmail.com';
                const subject = encodeURIComponent(`Inquiry — ${company || 'B2B Customer'} (${name})`);
                const body = encodeURIComponent(
                    `Hello Sunrise Polymold,

` +
                    `Name: ${name}
` +
                    `Company: ${company}
` +
                    `Email: ${email}
` +
                    `Phone/WhatsApp: ${phone}

` +
                    `Message:
${message}

` +
                    `Thanks,
${name}`
                );

                // Opens user's email app (works everywhere on static hosting)
                window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
                setStatus('Opening your email app… If it does not open, please email us directly.');
            });
        }