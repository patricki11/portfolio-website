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
              <div class="highlight-main" ref="nameField">{{ name }}</div>
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
export default {
  data() {
    return {
      name: "Patrick Dammers"
    };
  },
  mounted() {
    this.animateName();
  },
  methods: {
    animateName() {
      const textElement = this.$refs.nameField;
      if (!textElement) return;

      const letters = this.name.split("");
      textElement.textContent = "";

      letters.forEach((letter, index) => {
        const span = document.createElement("div");
        span.textContent = letter;
        span.style.display = "inline-block";
        span.style.minWidth = "15px";
        span.style.animation = `revealName 2s ${index * 0.15}s forwards`;
        textElement.appendChild(span);
      });
    }
  }
};
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
    -webkit-text-fill-color: transparent;
    -webkit-text-stroke: 1px $purple-highlight; /* Replace with your $purple-highlight variable */
    display: inline-block;
    overflow: show; /* Hide overflowing content */
    visibility: hidden; /* Hide the text initially */
    vertical-align: middle;

  }
  
  @keyframes revealName {
    from {
      opacity: 0;
      visibility: hidden;
      transform: translateY(20px); /* Adjust the initial translateY value */
    }
    20% {
      opacity: 1;
      transform: translateY(-50px);
    }
    50% {
      opacity: 1;
    }
    to {
      opacity: 1;
      visibility: visible;
      transform: translateY(-10px);
    }
  }

  @keyframes popIn {
    0% {
      transform: scale(0.5);
      opacity: 0;
    }
    75% {
      transform: scale(1.25);
      opacity: 1;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }
  
  .highlight-sub {
    display:inline-block;
    margin-left:5px;
    color: $grey-highlight;
    opacity: 0;
    animation: popIn 2s 3.5s forwards;
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
      animation: shaking 2s 5s infinite;
  }

  .contact-btn:hover {
      background-color: $purple-highlight;
  }

  @keyframes shaking {
    0% {
      transform: rotate(0deg);
    }
    5% {
      transform: rotate(5deg);
    }
    10% {
      transform: rotate(0eg);
    }
    15% {
      transform: rotate(-5deg);
    }
    20% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }

  .inline-block {
      display: inline-block;
  }
  
  </style>
  