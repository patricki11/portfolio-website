<template>
    <nav id="navigation" class="navbar navbar-expand-lg bg-body-tertiary sticky-top shadow">
        <div class="container-fluid">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span id="menuButton"><i class=" fs-1 bi bi-list"></i></span>
            </button>
            <div class="collapse navbar-collapse justify-content-center" id="navbarNav" ref="navbarNav">
            <ul class="navbar-nav">

                <li class="nav-item px-4">
                    <a class="nav-link fs-6" @click="setActiveMenuItem('home')" data-target="landing" :class="{active: activeMenuItem === 'home'}" href="#landing">
                       {{ $t("navigation.home") }}
                    </a>
                </li>

                <li class="nav-item px-4">
                    <a class="nav-link fs-6" href="#what-i-do" @click="setActiveMenuItem('what-i-do')" data-target="what-i-do" :class="{active: activeMenuItem === 'what-i-do'}">
                        {{ $t("navigation.about") }}
                    </a>
                </li>

                <li class="nav-item px-4">
                    <a class="nav-link fs-6" href="#exp-and-edu" @click="setActiveMenuItem('exp-and-edu')" data-target="exp-and-edu" :class="{active: activeMenuItem === 'exp-and-edu'}">
                        {{ $t("navigation.experience") }}
                    </a>
                </li>

                <li class="nav-item px-4">
                    <a class="nav-link fs-6" href="#projects" @click="setActiveMenuItem('projects')" data-target="projects" :class="{active: activeMenuItem === 'projects'}">
                        {{ $t("navigation.projects") }}
                    </a>
                </li>

                <li class="nav-item px-4">
                    <a class="nav-link fs-6" href="#contact" @click="setActiveMenuItem('contact')" data-target="contact" :class="{active: activeMenuItem === 'contact'}">
                        {{ $t("navigation.contact") }}
                    </a>
                </li>

                <li class="nav-item px-4 d-flex">
                    <LanguagePicker/>
                </li>

            </ul>
            </div>
        </div>
    </nav>
</template>

<script>
import LanguagePicker from '../language/LanguagePicker.vue';


export default {
    inject: ['i18n'],
    data() {
        return {
            activeMenuItem: 'home'
        };
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll);
    },
    methods: {
        setActiveMenuItem(menuItem) {
            this.activeMenuItem = menuItem;
            let navbarClasses = this.$refs.navbarNav.classList;
            if (navbarClasses.contains('show')) {
                navbarClasses.remove('show');
            }
        },
        handleScroll() {
            const maxHeight = 1000;

            const topOfScreen = window.scrollY;
            const scrollPosition = window.scrollY + (window.innerHeight / 2);
            const newBackgroundColor = `rgb(${Math.min(255, (topOfScreen / maxHeight) * 255)}, ${Math.min(255, (topOfScreen / maxHeight) * 255)}, ${Math.min(255, (topOfScreen / maxHeight) * 255)})`;
            const newTextColor = `rgb(${Math.max(0, 255 - (topOfScreen / maxHeight) * 255)}, ${Math.max(0, 255 - (topOfScreen / maxHeight) * 255)}, ${Math.max(0, 255 - (topOfScreen / maxHeight) * 255)})`;
            // Apply the new background color
            document.getElementById('menuButton').style.color = newTextColor;
            document.getElementById('languageDropdown').style.color = newTextColor;
            document.getElementById('navigation').style.backgroundColor = newBackgroundColor;
            const scrollLinks = document.querySelectorAll('.nav-link');
            // Loop through each anchor with the class "scroll-link"
            for (const link of scrollLinks) {
                link.style.color = newTextColor;
                const targetId = link.dataset.target;
                const targetElement = document.getElementById(targetId);
                // Calculate the offset of the target element from the top of the document
                const targetOffsetTop = targetElement.offsetTop;
                link.classList.remove('active');
                // Compare the scroll position with the offset to determine visibility
                if (scrollPosition >= targetOffsetTop && scrollPosition < targetOffsetTop + targetElement.clientHeight) {
                    // Add active class to the link if the target is visible in the viewport
                    link.classList.add('active');
                }
            }
        },
    },
    beforeDestroy() {
        window.removeEventListener('scroll', this.handleScroll);
    },
    components: { LanguagePicker }
}

</script>

<style lang="scss" scoped>

#menuButton {
    background-color: transparent;
    color: white;
}

.navbar {
    background-color: #000000;
}

.nav-link.active {
    color: $purple-highlight !important;
}

.nav-link {
    color: white;
}

.nav-link:hover {
    text-decoration: underline !important;
    color: purple;
}
</style>