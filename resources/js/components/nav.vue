<template>
    <div class="bg-yellow-400">
        <div class="flex justify-between items-center">
            <div>
                <a>
                    <img class=" hidden sm:block w-40 h-25 p-3" src="/assets/images/logo.png">
                </a>
            </div>

            <div>
                <ul class="flex justify-between items-center">
                    <li class="p-3 font-bold"><router-link :to="{ name: 'Home' }">Home</router-link></li>
                    <li class="p-3 font-bold"><router-link :to="{ name: 'Magazines' }">Magazines</router-link></li>
                    <li class="p-3 font-bold"><router-link :to="{ name: 'Merchandise' }">Merch</router-link></li>
                    <li class="p-3 font-bold"><router-link :to="{ name: 'Blog' }">Blog</router-link></li>
                    <!-- <li class="p-3 font-bold"><router-link :to="{ name: 'Podcast' }">Podcast</router-link></li> -->
                    <li class="p-3 font-bold"><router-link :to="{ name: 'Contact' }">Contact</router-link></li>
                    <li class="p-3 font-bold"><router-link :to="{ name: 'Login' }">Login</router-link></li>

                </ul>
            </div>

            <div class="flex justify-between items-center">
                <div>
                    <a>
                        <img class=" hidden sm:block w-12 h-12 p-2" src="/assets/images/instagram.png">
                    </a>
                </div>

                <div>
                    <a>
                        <img class=" hidden sm:block w-12 h-12 p-2" src="/assets/images/facebook.png">
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

</script>

<style></style>