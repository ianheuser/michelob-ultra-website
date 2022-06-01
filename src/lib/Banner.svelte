<script>
    export let bannerTitle, text, buttonUrl, image
 </script>
     
 <!--<h1>Below is your Builder Component Text</h1> -->
 <section style="background-image: url({image});">
    <div class="wrapper">
 
        <div class="context">
            <h1 class="title">{bannerTitle}</h1>
            <h4 class="text">{text}</h4>
            <a href="{buttonUrl}" class="button">LEARN MORE</a>
        </div>
     
</div>
</section>
 
 <style>
section {
       /*background: url({context}) no-repeat; */
        background-size: cover;
        height: calc(100vh - 80px);
        background-position-x: 50%;
        margin-top: -10px;
        display: grid;
        place-items: center;
        text-align: center;
    }


    .wrapper {
        width: 750px;
        margin-top: 150px;
    
    }
    .title {
        color: white;
        font-size: 56px;
        font-weight: 700;
       
        padding-bottom: 20px;
    }

    .text {
        font-size: 36px;
        font-weight: 500;
        color: white;
        margin-bottom: 40px;
    }

    a {
        text-decoration: none;
        color: #1D3097;
    }

    .button {
        background-color: white;
        padding: 15px;
        border-radius: 10px;
        
    }

    @media (max-width: 768px) {
        .wrapper {
          width: 380px;

        }
        .title {
            font-size: 38px;     
        }

        .text {
            font-size: 22px;
        }

    }
 </style>