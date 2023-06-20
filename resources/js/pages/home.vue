<template>
    <div class="bg-black">

        <div class="flex justify-center items-center">
            <div class="w-1/2">
                <p class="text-white text-3xl py-6 font-extrabold">Welcome to <span class="text-yellow-400">Kulture
                        Magazine</span></p>

                <p class="text-white">Kulture Magazine, where black excellence meets creativity. We are
                    your go-to
                    destination for periodicals,
                    design services, and articles that explore the rich and diverse world we live in.
                    Our team is passionate about capturing the essence of various cultures through captivating content that
                    reflects the unique perspectives and experiences of our community. Whether you're looking for
                    inspiration, education, or entertainment, Kulture Queen and the team have got you covered. Join us on a
                    journey of discovery and celebration of the cultural mosaic that makes our world so beautiful.</p>
            </div>

            <div class="p-4">
                <img class=" hidden sm:block w-70 h-80 p-2 text-center mx-auto" src="/assets/images/big-logo.png">
            </div>
        </div>

        <div class="p-4">
            <p class="text-yellow-400 text-3xl pt-6 pb-4 font-extrabold text-center">The Magazine</p>

            <div class="flex gap-3 justify-center items-center mx-4" >
                <div class="bg-yellow-400 p-2">
                    <img class=" hidden sm:block w-30 h-36 " src="/assets/images/mag1.png">
                </div>

                <div class="bg-yellow-400 p-2">
                    <img class=" hidden sm:block w-30 h-36 " src="/assets/images/mag2.png">
                </div>

                <div class="bg-yellow-400 p-2">
                    <img class=" hidden sm:block w-30 h-36 " src="/assets/images/mag3.png">
                </div>

                <div class="bg-yellow-400 p-2">
                    <img class=" hidden sm:block w-30 h-36 " src="/assets/images/mag4.png">
                </div>

                <div class="bg-yellow-400 p-2">
                    <img class=" hidden sm:block w-30 h-36 " src="/assets/images/mag5.png">
                </div>
            </div>
        </div>

        <div class="bg-yellow-400 m-4">
            <div>
                <p class="text-3xl pt-6 pl-2 font-extrabold text-center text-black">Kulture Magazine Merchandise</p>
            </div>
            <div class="flex justify-center items-center">

                <div class="p-4">
                    <img class=" hidden sm:block w-64 h-80 p-2 text-center" src="/assets/images/merch.png">
                </div>

                <div class="w-1/2">
                    <p class="text-black text-justify">
                        Welcome to the Kulture Merchandise Section! We're
                        excited to offer a wide range of merchandise that
                        promotes a sense of AfriKan pride and helps to
                        decolonize the mind. Our products include t-shirts,
                        hoodies, stickers, calendars, templates, and much more.
                        By wearing our African-themed clothes or using our
                        other merchandise, you'll not only look great but also
                        feel empowered and connected to a community of like-
                        minded individuals who share the same passion for
                        decolonization and African pride. So, have a browse
                        through our collection and find the perfect item that
                        speaks to your soul and helps you showcase your love
                        for the Afrikan culture!
                    </p>
                </div>
            </div>
        </div>

        <div class="bg-black m-4">
            <div>
                <p class="text-3xl pt-6 pl-2 font-extrabold text-center text-yellow-400">About Kulture Queen</p>
            </div>
            <div class="flex justify-center items-center">

                <div class="p-4">
                    <img class=" hidden sm:block w-64 h-64 p-2 text-center mx-auto" src="/assets/images/kq.png">
                </div>

                <div class="w-1/2">
                    <p class="text-yellow-400 p-8 text-justify">
                        <span class="text-yellow-400 text-3xl">Greetings!</span><br>
                        I am a versatile creative professional, proficient in writing, graphic design, and UI design. As a
                        young and enthusiastic individual, I embody a passion for Africa, embracing the role of a
                        twenty-something empress. My dedication lies in celebrating the rich heritage of the Afrikan
                        culture, with a particular focus on Kemet, while sharing my knowledge of Afrikan history. Through my
                        magazine, I aim to showcase the captivating beauty of AfriKan culture, highlighting the achievements
                        of black excellence and embracing the spirit of the Afrikan Renaissance.
                    </p>
                </div>
            </div>
        </div>

        <div class="flex justify-center">

            <div
                class="bg-gradient-to-r from-yellow-400 via-black to-yellow-400 rounded-2xl w-3/4 flex items-center justify-center">
                <div class="p-4 flex-row justify-center">

                    <div class="bg-black text-center w-fit p-3  mb-2">
                        <p class="text-yellow-400">JOIN THE MAILING CLUB</p>
                    </div>

                    <div>
                        <form id="subscribe" method="post" action="{{ url('/subscribe') }}">
                            <div class="relative text-white">
                                <input type="search" name="email"
                                    class="p-2 border-black text-3xl text-black bg-yellow-400 pl-10"
                                    placeholder="Your Email" size="25" required="">

                                <input type="submit" name="Subscribe" class="p-2 text-3xl text-yellow-400 bg-black"
                                    value="Subscribe">
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>

</script>

<style></style>