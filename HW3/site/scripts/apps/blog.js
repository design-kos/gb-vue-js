Vue.component("blog-post", {
    props: ["posts"],
    template: `
            <div class="blog__wrapper">
                <a v-for="post in posts" :key="post.id" :href="post.link" class="blog__item">
                    <div class="blog__img-wrapper">
                        <div class="blog__img" :style="post.previewImg"></div>
                        <div class="blog__mark">{{ post.mark }}</div>
                    </div>
                    <div class="blog__content">
                        <div class="blog__text-wrapper">
                            <div class="blog__title">{{ post.title }}</div>
                        </div>
                        <div class="blog__btn-wrapper">
                            <div class="blog__date">{{ post.date }}</div>
                            <svg class="blog__btn-icon" width="52" height="53" viewBox="0 0 52 53" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <circle cx="26" cy="26.267" r="26" fill="#F4F0EC" />
                                <path d="M23.7714 32.9527L29.7143 26.267L23.7714 19.5813" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>
                    </div>
                </a>
            </div>
    `,
});

Vue.component("blog-details", {
    props: ["post"],
    template: `
        <div class="container">
            <div class="blog-details__wrapper">
                <div>{{ post.title }}</div>
                <div>{{ post.content }}</div>
            </div>
        </div>
    `,
});

Vue.component("blog-list", {
    props: ["posts"],
    template: `
        <div class="container">
            <blog-post v-bind:posts="posts"></blog-post>
        </div>
    `,
});

new Vue({
    el: "#app_blog",
    data: {
        currentPost: {
            id: 1,
            title: "Let’s Get Solution For Building Construction Work",
            mark: "Kitchan Design",
            date: "26 December, 2022 ",
            previewImg: "background-image: url(images/blog-item-1.jpg)",
            link: "#",
            tag: "Kitchen",
            content:
                "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
        },
        posts: [
            {
                id: 1,
                title: "Let’s Get Solution For Building Construction Work",
                mark: "Kitchan Design",
                date: "26 December, 2022 ",
                previewImg: "background-image: url(images/blog-item-1.jpg)",
                link: "#",
                tag: "Kitchen",
                content:
                    "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
            },
            {
                id: 2,
                title: "Low Cost Latest Invented Interior Designing Ideas.",
                mark: "Living Design",
                date: "22 December, 2022 ",
                previewImg: "background-image: url(images/blog-item-2.jpg)",
                link: "#",
                tag: "Building",
            },
            {
                id: 3,
                title: "Best For Any Office & Business Interior Solution",
                mark: "Interior Design",
                date: "25 December, 2022 ",
                previewImg: "background-image: url(images/blog-item-3.jpg)",
                link: "#",
                tag: "Bedroom",
            },
            {
                id: 4,
                title: "Let’s Get Solution For Building Construction Work",
                mark: "Kitchan Design",
                date: "26 December, 2022 ",
                previewImg: "background-image: url(images/blog-item-1.jpg)",
                link: "#",
                tag: "Kitchen Planning",
            },
            {
                id: 5,
                title: "Low Cost Latest Invented Interior Designing Ideas.",
                mark: "Living Design",
                date: "22 December, 2022 ",
                previewImg: "background-image: url(images/blog-item-2.jpg)",
                link: "#",
                tag: "Architecture",
            },
            {
                id: 6,
                title: "Best For Any Office & Business Interior Solution",
                mark: "Interior Design",
                date: "25 December, 2022 ",
                previewImg: "background-image: url(images/blog-item-3.jpg)",
                link: "#",
                tag: "Bedroom",
            },
            {
                id: 7,
                title: "Let’s Get Solution For Building Construction Work",
                mark: "Kitchan Design",
                date: "26 December, 2022 ",
                previewImg: "background-image: url(images/blog-item-1.jpg)",
                link: "#",
                tag: "Kitchen",
            },
            {
                id: 8,
                title: "Low Cost Latest Invented Interior Designing Ideas.",
                mark: "Living Design",
                date: "22 December, 2022 ",
                previewImg: "background-image: url(images/blog-item-2.jpg)",
                link: "#",
                tag: "Architecture",
            },
            {
                id: 9,
                title: "Best For Any Office & Business Interior Solution",
                mark: "Interior Design",
                date: "25 December, 2022 ",
                previewImg: "background-image: url(images/blog-item-3.jpg)",
                link: "#",
                tag: "Building",
            },
            {
                id: 10,
                title: "Let’s Get Solution For Building Construction Work",
                mark: "Kitchan Design",
                date: "26 December, 2022 ",
                previewImg: "background-image: url(images/blog-item-1.jpg)",
                link: "#",
                tag: "Kitchen Planning",
            },
            {
                id: 11,
                title: "Low Cost Latest Invented Interior Designing Ideas.",
                mark: "Living Design",
                date: "22 December, 2022 ",
                previewImg: "background-image: url(images/blog-item-2.jpg)",
                link: "#",
                tag: "Bedroom",
            },
            {
                id: 12,
                title: "Best For Any Office & Business Interior Solution",
                mark: "Interior Design",
                date: "25 December, 2022 ",
                previewImg: "background-image: url(images/blog-item-3.jpg)",
                link: "#",
                tag: "Bedroom",
            },
            {
                id: 13,
                title: "Let’s Get Solution For Building Construction Work",
                mark: "Kitchan Design",
                date: "26 December, 2022 ",
                previewImg: "background-image: url(images/blog-item-1.jpg)",
                link: "#",
                tag: "Bedroom",
            },
            {
                id: 14,
                title: "Low Cost Latest Invented Interior Designing Ideas.",
                mark: "Living Design",
                date: "22 December, 2022 ",
                previewImg: "background-image: url(images/blog-item-2.jpg)",
                link: "#",
                tag: "Bedroom",
            },
            {
                id: 15,
                title: "Best For Any Office & Business Interior Solution",
                mark: "Interior Design",
                date: "25 December, 2022 ",
                previewImg: "background-image: url(images/blog-item-3.jpg)",
                link: "#",
                tag: "Bedroom",
            },
            {
                id: 16,
                title: "Let’s Get Solution For Building Construction Work",
                mark: "Kitchan Design",
                date: "26 December, 2022 ",
                previewImg: "background-image: url(images/blog-item-1.jpg)",
                link: "#",
                tag: "Bedroom",
            },
            {
                id: 17,
                title: "Low Cost Latest Invented Interior Designing Ideas.",
                mark: "Living Design",
                date: "22 December, 2022 ",
                previewImg: "background-image: url(images/blog-item-2.jpg)",
                link: "#",
                tag: "Bedroom",
            },
        ],
        tags: [
            {
                tag: "Kitchen",
            },
            {
                tag: "Bedroom",
            },
            {
                tag: "Building",
            },
            {
                tag: "Architecture",
            },
            {
                tag: "Kitchen Planning",
            },
        ],
        selectedPosts: [],
    },
    methods: {
        getPostsByTag(tag) {
            const currentTag = tag;
            this.selectedPosts = [];
            this.posts.forEach((post) => {
                if (currentTag === post.tag) {
                    return this.selectedPosts.push(post);
                }
            });
        },
    },
});
