<template>
    <header :class="$style['footer']">
        <div class="container">
            <div :class="$style['footer__wrapper']">
                <div :class="$style['footer__left-wrapper']">
                    <div :class="$style['footer__logo']">
                        <img
                            src="../assets/logo.svg"
                            alt="logo"
                            :class="$style['footer__logo-img']"
                        />
                    </div>
                    <div :class="$style['footer__descr']">
                        It is a long established fact that a reader will be
                        distracted lookings.
                    </div>
                    <div :class="$style['footer__social-links']">
                        <a href="#" :class="$style['footer__social-link']">
                            <svg
                                :class="$style['footer__social-link-icon']"
                                width="19"
                                height="16"
                                viewBox="0 0 19 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M16.6367 4.59375C16.6367 4.76953 16.6367 4.91016 16.6367 5.08594C16.6367 9.97266 12.9453 15.5625 6.16016 15.5625C4.05078 15.5625 2.11719 14.9648 0.5 13.9102C0.78125 13.9453 1.0625 13.9805 1.37891 13.9805C3.10156 13.9805 4.68359 13.3828 5.94922 12.3984C4.33203 12.3633 2.96094 11.3086 2.50391 9.83203C2.75 9.86719 2.96094 9.90234 3.20703 9.90234C3.52344 9.90234 3.875 9.83203 4.15625 9.76172C2.46875 9.41016 1.20312 7.93359 1.20312 6.14062V6.10547C1.69531 6.38672 2.29297 6.52734 2.89062 6.5625C1.87109 5.89453 1.23828 4.76953 1.23828 3.50391C1.23828 2.80078 1.41406 2.16797 1.73047 1.64062C3.55859 3.85547 6.30078 5.33203 9.35938 5.50781C9.28906 5.22656 9.25391 4.94531 9.25391 4.66406C9.25391 2.625 10.9062 0.972656 12.9453 0.972656C14 0.972656 14.9492 1.39453 15.6523 2.13281C16.4609 1.95703 17.2695 1.64062 17.9727 1.21875C17.6914 2.09766 17.1289 2.80078 16.3555 3.25781C17.0938 3.1875 17.832 2.97656 18.4648 2.69531C17.9727 3.43359 17.3398 4.06641 16.6367 4.59375Z"
                                    fill="#292F36"
                                />
                            </svg>
                        </a>
                        <a href="#" :class="$style['footer__social-link']">
                            <svg
                                :class="$style['footer__social-link-icon']"
                                width="17"
                                height="16"
                                viewBox="0 0 17 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M4.14062 16H0.871094V5.48828H4.14062V16ZM2.48828 4.08203C1.46875 4.08203 0.625 3.20312 0.625 2.14844C0.625 1.12891 1.46875 0.285156 2.48828 0.285156C3.54297 0.285156 4.38672 1.12891 4.38672 2.14844C4.38672 3.20312 3.54297 4.08203 2.48828 4.08203ZM16.3398 16H13.1055V10.9023C13.1055 9.67188 13.0703 8.125 11.3828 8.125C9.69531 8.125 9.44922 9.42578 9.44922 10.7969V16H6.17969V5.48828H9.30859V6.92969H9.34375C9.80078 6.12109 10.8555 5.24219 12.4375 5.24219C15.7422 5.24219 16.375 7.42188 16.375 10.2344V16H16.3398Z"
                                    fill="#292F36"
                                />
                            </svg>
                        </a>
                    </div>
                </div>
                <div :class="$style['footer__center-wrapper']">
                    <div :class="$style['footer__links-col']">
                        <div :class="$style['footer__links-title']">Pages</div>
                        <div :class="$style['footer__links']">
                            <a href="index.html" :class="$style['footer__link']"
                                >Home</a
                            >
                            <a href="#" :class="$style['footer__link']"
                                >Project</a
                            >
                            <a href="blog.html" :class="$style['footer__link']"
                                >Blog</a
                            >
                        </div>
                    </div>
                    <div :class="$style['footer__links-col']">
                        <div :class="$style['footer__links-title']"></div>
                        <div :class="$style['footer__links']">
                            <a href="#" :class="$style['footer__link']"></a>
                        </div>
                    </div>
                </div>
                <div :class="$style['footer__right-wrapper']">
                    <div :class="$style['footer__contacts-title']">Contact</div>
                    <div :class="$style['footer__contacts']">
                        <div :class="$style['footer__contact']">
                            55 East Birchwood Ave. Brooklyn, New York 11201
                        </div>
                        <div :class="$style['footer__contact']">
                            <a href="#">contact@interno.com</a>
                        </div>
                        <div :class="$style['footer__contact']">
                            <a href="#">(123) 456 - 7890</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    name: "FooterBlock",
};
</script>

<style module lang="scss">
@import "../css/vars";
@import "../css/mixins.scss";
.footer {
    max-width: 100%;

    &__wrapper {
        @include flex();
        justify-content: space-between;
        -ms-flex-pack: justify;
    }

    &__left-wrapper {
        @include flex();
        width: 100%;
        max-width: calc((100% - $spacer-base * 6 * 2) / 3);
        flex-direction: column;
        -ms-flex-direction: column;
    }

    &__logo {
        @include flex();

        &-img {
            width: 177px;
            height: auto;
        }
    }

    &__descr {
        @include text-l();
    }

    &__logo + &__descr {
        margin-top: $spacer-base * 6;
    }

    &__social-links {
        @include flex();
        column-gap: $spacer-base * 13;
        row-gap: $spacer-base * 4;
    }

    &__logo + &__social-links,
    &__descr + &__social-links {
        margin-top: $spacer-base * 8;
    }

    &__social-link {
        @include flex();

        &:hover {
            opacity: 0.7;
        }
    }

    &__center-wrapper {
        @include flex();
        justify-content: space-evenly;
        -ms-flex-pack: space-evenly;
        flex-grow: 1;
        -ms-flex-positive: 1;
    }

    &__links-col {
        @include flex();
        min-width: 120px;
        flex-direction: column;
        -ms-flex-direction: column;
        row-gap: $spacer-base * 6;
    }

    &__links-title {
        @include title-h3();
    }

    &__links {
        @include flex();
        flex-direction: column;
        -ms-flex-direction: column;
        row-gap: $spacer-base * 6;
    }

    &__link {
        @include text-l();

        &:hover {
            opacity: 0.7;
        }
    }

    &__right-wrapper {
        @include flex();
        max-width: 260px;
        flex-direction: column;
        -ms-flex-direction: column;
        row-gap: $spacer-base * 6;
    }

    &__contacts-title {
        @include title-h3();
    }

    &__contacts {
        @include flex();
        flex-direction: column;
        -ms-flex-direction: column;
        row-gap: $spacer-base * 6;
    }

    &__contact {
        @include text-l();

        a {
            color: inherit;
        }

        a:hover {
            opacity: 0.7;
        }
    }
}
</style>
