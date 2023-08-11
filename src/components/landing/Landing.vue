<template>
  <div id="landing">
    <div class="container align-items-start">
      <div class="row py-5">
        <div class="row row-cols-1 align-items-end mx-auto justify-content-start landing-container-row">
          <div class="text-start text-lg-start">
            <div class="col col-7 col-sm-5 col-lg-5 justify-content-center">
                <img src="/assets/images/Photo.jpg" id="portraitImage" class="rounded img-fluid"/>
            </div>
            <span class="display-1 landing-text text-white">{{ $t("landing.hello")}}
              <br />
              {{ $t("landing.myNameIs") }} 
              <span class="highlight-main">Patrick Dammers</span> 
            </span>
            <br />
            <span class="highlight-sub text-subtitle-1 text-white fs-5 pb-5 pt-3">{{ $t("landing.subtitle") }}</span>
          </div>
          <a href="#contact" class="contact-btn rounded shadow p-3 px-5 text-decoration-none text-white">{{ $t("landing.contact") }}</a>
        </div>
      </div>
    </div>
  </div>
  </template>
  
  <script>

  </script>
  
  <style lang="scss">

  #landing {
    background-image: url('/assets/images/landing-background.jpg');
    background-size: cover;
  }

  #contact {
    text-decoration: none !important;
  }

  .row {
    height:100%;
  }
  
  .highlight-main {
    color: transparent;
    white-space: nowrap;
    -webkit-text-fill-color: transparent; /* Will override color (regardless of order) */
    -webkit-text-stroke: 1px $purple-highlight;
  }
  
  .highlight-sub {
    display:inline-block;
    margin-left:5px;
    color: $grey-highlight;
  }

  .landing-container-row {
    height: fit-content;
  }

  .contact-btn {
      background-color: transparent;
      border: 2px solid $purple-highlight;
      margin:14px;
      font-size:1.4rem;
      font-weight:400;
      transition: background-color .5s;
      width:fit-content !important;
  }

  .contact-btn:hover {
      background-color: $purple-highlight;
  }

  .inline-block {
      display: inline-block;
  }
  
  </style>
  