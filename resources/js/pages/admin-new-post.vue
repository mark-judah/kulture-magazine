<template>
    <section class="bg-white dark:bg-gray-900">
        <div class="py-8 px-4 mx-auto max-w-2xl lg:py-16">
            <h2 class="mb-4 text-xl font-bold text-gray-900 dark:text-white">Add a new post</h2>
            <form ref="form" @submit.prevent="newpost">
                <div class="grid gap-4 sm:grid-cols-2 sm:gap-6">
                    <div class="sm:col-span-2">
                        <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Blog
                            Title</label>
                        <input type="text" name="blog_title" id="blog_title"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                            placeholder="Blog title" required="" v-model="formFields.post_title">
                    </div>

                    <div>
                        <label for="category"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category</label>
                        <select id="category" v-model="formFields.post_category"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                            <option selected="">Select category</option>
                            <option value="TV">TV/Monitors</option>
                            <option value="PC">PC</option>
                            <option value="GA">Gaming/Console</option>
                            <option value="PH">Phones</option>
                        </select>
                    </div>


                    <div>
                        <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Blog
                            Thumbnail</label>
                        <img v-bind:src="previewImage" class="uploading-image" />

                        <input
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                            id="blog_thumbnail" type="file" v-on:change="handlePhoto">


                    </div>

                    <div class="sm:col-span-2">
                        <label for="blog_post"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Content</label>
                        <textarea key="componentKey" id="blog_post" rows="8"
                            class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                            placeholder="........"></textarea>
                    </div>
                </div>
                <button type="submit"
                    class="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-yellow-400 bg-black rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800">
                    Publish Post
                </button>
            </form>
        </div>
    </section>
</template>

<script>
import 'suneditor/dist/css/suneditor.min.css'
import suneditor from 'suneditor'
import plugins from 'suneditor/src/plugins'
import SunEditor from 'suneditor/src/lib/core';
import axios from 'axios'

export default {
    data() {
        return {
            componentKey: 0,
            previewImage: null,

            editor: SunEditor,
            formFields: {
                post_title: '',
                post_category: '',
                post_thumbnail: {},
                post_content: null,

            }
        };
    },
    mounted() {
        this.loadSunEditor()
    },
    methods: {
        newpost() {
            this.formFields.post_content = this.editor.getContents();
            console.log(this.formFields.post_content)

           

            let data = new FormData();
            data.append('post_title',this.formFields.post_title)
            data.append('post_category',this.formFields.post_category)
            data.append('post_thumbnail',this.formFields.post_thumbnail)
            data.append('post_content',this.formFields.post_content)

            try {
                axios.post("api/new-post", data).then(result => {
                    console.log(result.data);
                })
            } catch (error) {
                console.error(error.response.data);
            }
        },

        handlePhoto(event) {
            console.log(event.target.files);
            this.formFields.post_thumbnail = event.target.files[0].name
            const reader = new FileReader();
            reader.readAsDataURL(event.target.files[0]);
            reader.onload = e => {
                this.previewImage = e.target.result;
                console.log(this.previewImage);
            };
        },

       
        forceRerender() {
            this.componentKey += 1;

        },

        loadSunEditor() {
            this.editor = suneditor.create('blog_post', {
                plugins: plugins,
                buttonList: [
                    ['undo', 'redo'],
                    ['font', 'fontSize', 'formatBlock'],
                    ['paragraphStyle', 'blockquote'],
                    ['bold', 'underline', 'italic', 'strike', 'subscript', 'superscript'],
                    ['fontColor', 'hiliteColor', 'textStyle'],
                    ['removeFormat'],
                    '/', // Line break
                    ['outdent', 'indent'],
                    ['align', 'horizontalRule', 'list', 'lineHeight'],
                    ['table', 'link', 'image', 'video', 'audio' /** ,'math' */], // You must add the 'katex' library at options to use the 'math' plugin.
                    /** ['imageGallery'] */ // You must add the "imageGalleryUrl".
                    ['fullScreen', 'showBlocks', 'codeView'],
                    ['preview', 'print'],
                    ['save', 'template'],
                    /** ['dir', 'dir_ltr', 'dir_rtl'] */ // "dir": Toggle text direction, "dir_ltr": Right to Left, "dir_rtl": Left to Right
                ],
                imageUploadUrl: "api/formImageUpload",
                
            })
        }
    }
}

</script>

<style></style>