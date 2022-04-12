<template>
    <div id="contacts">
            <div>
                <a aria-label="email link" class="item" href="mailto:wittmann.aron@gmail.com">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-mail"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                    <div> wittmann.aron@gmail.com </div>
                </a>
                <a aria-label="linkedin link" class="item" href="https://www.linkedin.com/in/%C3%A1ron-wittmann-5631aa234/">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                    <div> linkedin.com </div>
                </a>
                <a aria-label="github link" class="item" href="https://www.github.com/RawEnchilada/">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                    <div> github.com </div>
                </a>
                <svg id="contactArrow" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-up"><line x1="12" y1="19" x2="12" y2="5"></line><polyline points="5 12 12 5 19 12"></polyline></svg>
            </div>
        </div>
</template>

<script>
export default{
    name:"Contancts"
}
</script>

<style scoped>

#contacts {
    top: 0;
    position: fixed;
    width: var(--contacts-width);
    height: 100%;
    z-index: 10000;
}
#contacts>div{
    padding: 20px 0px 20px 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
}
.item{
    margin-bottom: 1em;
}
.item>svg{
    vertical-align: middle;
    color:inherit;
}
.item>div{
    display: inline-block;
    margin-left: 5px;
}
@media (max-width: 1350px) {
    .item>div{
        display:none;
    }
}
</style>

<style>
#contactArrow{
    color:var(--highlight-color);
}
:root {
    --contacts-width: 256px;
}
@media (max-width: 1350px) {
    :root{
        --contacts-width:66px;
    }
}
</style>