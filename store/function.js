export function uppercase(mot) {
    return mot.charAt(0).toUpperCase() + mot.slice(1)
}

export function reveal() {
    const ratio = .1
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: ratio
        }

        const element = document.querySelectorAll('[class*="reveal-"]')

        const handleIntersect = function(entries, observer) {
            entries.forEach(entry => {
                if(entry.intersectionRatio > ratio) {
                    entry.target.classList.add('reveal-visible')
                    observer.unobserve(entry.target)
                } 
            });
        }

        const observer = new IntersectionObserver(handleIntersect, options);
        /* si on souhaite appliquer effet revealsur plusieurs element */
        element.forEach(function(r) {
            observer.observe(r)
        })
}
