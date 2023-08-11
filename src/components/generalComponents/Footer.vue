<template>
    <footer class="pb-2 pt-5">
        <div class="container-fluid">
            <ul id="menu-footer-bottom-menu" class="ml-auto dw-footer-menu-bottom">
                <li>
                    <a class="text-decoration-none text-white" href="">© {{ currentYear }}  Patrick Dammers</a>
                </li>
            </ul>
        </div>
    </footer>
</template>

<script>
export default {
  data() {
    return {
      currentYear: new Date().getFullYear(),
    };
  },
};
</script>
    
<style lang="scss" scoped>
    footer {
        background-color: #111;
    }

    #menu-footer-bottom-menu {
        list-style-type: none;
    }
</style>