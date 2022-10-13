<template>
 <img class="logo" src="https://media.istockphoto.com/vectors/restaurant-food-drinks-logo-fork-knife-background-vector-image-vector-id981368726?k=20&m=981368726&s=612x612&w=0&h=Um4YOExWlUgOfpUs2spnN0NrrXs-M71OUuUMbStVFNQ="/>
 <h1 class="title">Sign Up</h1>
 <div class="register">
    <input type="text" placeholder="Enter Name"/>
    <input type="text" placeholder="Enter Email"/>
    <input type="password" placeholder="Enter Password"/>
    <button>Sign up</button>
 </div>
</template>
<script>
export default {
    name: 'SignUp',
}
</script>
<style scoped>
.logo{
    width: 100px;
    margin-left: 900px;
    margin-top: 10px;
}
.register input {
    width: 300px;
    height: 40px;
    padding-left: 20px;
    display: block;
    margin-bottom: 30px;
    margin-left: auto;
    margin-right: auto;
    border: 1px solid skyblue;
}
.title{
    margin-left: 900px;
    margin-bottom: 20px;
}
.register button{
    width: 300px;
    height: 40px;
    border: 1px solid skyblue;
    background: skyblue;
    color: white;
    cursor: pointer;
    display: block;
    margin-left: auto;
    margin-right: auto;
}

</style>