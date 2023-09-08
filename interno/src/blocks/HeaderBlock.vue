<template>
    <header :class="$style['header']">
        <div class="container">
            <div :class="$style['header__wrapper']">
                <a href="index.html" :class="$style['header__logo']">
                    <img
                        src="../assets/logo.svg"
                        alt="logo"
                        :class="$style['header__logo-img']"
                    />
                </a>
                <div :class="$style['header__menu']">
                    <a href="index.html" :class="$style['header__menu-link']"
                        >Home</a
                    >
                    <a href="#" :class="$style['header__menu-link']">Project</a>
                    <a href="blog.html" :class="$style['header__menu-link']"
                        >Blog</a
                    >
                </div>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    name: "HeaderBlock",
};
</script>

<style module lang="scss">
@import "../css/vars";
@import "../css/mixins.scss";
.header {
    max-width: 100%;

    &__wrapper {
        @include flex-centered_vertical();
        height: 140px;
        -webkit-box-pack: justify;
        -ms-flex-pack: justify;
        justify-content: space-between;
        column-gap: $spacer-base * 12;
    }

    &__logo {
        @include flex();

        &-img {
            width: 177px;
            height: auto;
        }
    }

    &__menu {
        @include flex-centered_horizontal();
        column-gap: $spacer-base * 12;

        &-link {
            @include text-nav();
        }
    }
}
</style>
