<template>
  <div class="his-main">
    <svg
      style="transform: translateY(5px)"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 320"
    >
      <path
        fill="#ffffff"
        fill-opacity="1"
        d="M0,224L40,229.3C80,235,160,245,240,245.3C320,245,400,235,480,202.7C560,171,640,117,720,117.3C800,117,880,171,960,186.7C1040,203,1120,181,1200,144C1280,107,1360,53,1400,26.7L1440,0L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
      ></path>
    </svg>
    <div id="historia" class="his-content">
      <vs-row align="center">
        <vs-col offset="1" w="6">
          <div>
            <h1>O mnie</h1>
            <div class="line"></div>
            <p>
              Vector files are images created using a series of “points” or
              nodes that are connected by lines, circles, curves and polygons to
              create shapes. These shapes are “editable” meaning that when used
              in a vector “drawing” application like Illustrator, or Corel Draw,
              the shape's attributes such as colors and lines be changed.
            </p>
          </div>
        </vs-col>
        <vs-col w="4">
          <vs-avatar size="400" circle>
            <img src="../assets/avatar.jpg" alt="" />
          </vs-avatar>
        </vs-col>
      </vs-row>
    </div>
    <svg id="technologie" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path
        fill="#ffffff"
        fill-opacity="1"
        d="M0,224L40,224C80,224,160,224,240,186.7C320,149,400,75,480,80C560,85,640,171,720,197.3C800,224,880,192,960,165.3C1040,139,1120,117,1200,112C1280,107,1360,117,1400,122.7L1440,128L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
      ></path>
    </svg>
  </div>
</template>

<script>
export default {
  name: "His",
};
</script>

<style lang="scss">
.his-main {
  .his-content {
    display: flex;
    align-items: center;
    height: 60vh;
    background-color: #ffffff;
    .vs-avatar {
      border: #ffffff 1vh solid;
    }
    .vs-avatar:after {
      display: block;
      border-radius: 9999px;
      content: "";
      width: 108%;
      height: 108%;
      position: absolute;
      z-index: -1;
      left: -4%;
      top: -4%;
      background-image: linear-gradient(
        162deg,
        rgba(44, 96, 253, 0.6) 0%,
        rgba(5, 173, 215, 1) 100%
      );
      animation: spin 1.3s linear infinite;
    }
    h1 {
      text-align: center;
      font-size: 5rem;
      letter-spacing: 0.1rem;
    }
    .line {
      width: 10%;
      height: 10px;
      background: linear-gradient(
        162deg,
        rgba(44, 96, 253, 1) 0%,
        rgba(5, 173, 215, 1) 100%
      );
      margin: 1vh auto;
      border-radius: 25px;
    }
    p {
      word-spacing: 0.15rem;
      text-align: justify;
      font-size: 2rem;
      margin: 4vh auto;
      width: 35vw;
    }

    @keyframes spin {
      100% {
        transform: rotate(360deg);
      }
    }
  }
}
</style>

