*{
  box-sizing: border-box;
  color: white;
  margin: 0;
  padding: 0;
  position: relative;
}
.App {
  width: 100%;
 min-height: 100%;
 position: relative;
 box-sizing: border-box;
}



/* Page 2 */

/* Woman */
.woman{
  width: 100%;
  color: black;
}
.woman-heading{
  color:#3E3E3E;
  font-weight: 500;
  font-size: 76px;
}

.woman-cards{
  width: 100%;
  display: flex;
  justify-content: space-evenly;
}
.woman-cards h1,.woman-cards p{
  color: #757575;
}
.card{
  position: relative;
}
.see-more-btn-container{
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  margin-left: 1.5rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
  background-color: #8B4513;
  padding: 0.5rem;
}
.see-more-btn{
  border: none;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  font-size: large;
  background-color: #ccbdbd00;
}
.rating{
  position: absolute;
  right: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #8B4513;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  border-radius: 1rem;
}
.rating p{
  color: white;
}

/* USP */
.usp{
  width: 100%;
  height: 75%;
  display: grid;
  box-sizing: border-box;
  grid-template-columns: repeat(4 25%);
  grid-template-rows: repeat(4 25%);
  gap: 1rem;
}
.usp h1,.usp p{
  color: #3E3E3E;
}
.satisfaction{
  grid-row: 1/3;
  background: #F2F2F2;
  padding: 5%;
}
.satisfaction-container{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 5%;
  background-color: #fff;
  height: 100%;
  padding: 5%;
}
.online{
  grid-column: 2/4;
  padding: 5%;
  background: #F2F2F2;
  
}
.online-container{
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5%;
  background-color: #fff;
  height: 100%;
  padding: 5%;
}
.payment{
  grid-column-start:4 ;
  grid-row: 1/3;
  padding: 5%;
  background: #F2F2F2;
}
.payment-container{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 5%;
  background-color: #fff;
  height: 100%;
  padding: 5%;
}
.fast-delivery{
  grid-column:2/4 ;
  padding: 5%;
  background: #F2F2F2;
}
.fast-delivery-container{
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5%;
  background-color: #fff;
  height: 100%;
  padding: 5%;
}

/* Video */
.video{
  width: 100%;
  height: 100%;
  position: relative;
}
.video-img{
  width: 100%;
  height: 100%;
}
.play-btn{
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%);
  z-index: 2;
}


/* Footer */

.footer{
  width: 100%;
  height: 100vh;
  box-sizing: border-box;
  position: relative;
}
.footer-top{
  box-sizing: border-box;
  width: 100%;
  height: 50%;
  background-color: #f2f2f2;
  margin: 1rem;
  z-index: 2;
  overflow: hidden;
  display: flex;
  align-items: center;
  gap: 3rem;
}
.testimonial-card{
  background-color: #fff;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.testimonial-card-header{
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.testimonial-card-header p{
  color: #3E3E3E;
}
.testimonial-card-header-left{
  display: flex;
  align-items: center;
  gap: 1rem;
}
.profile-pic{
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #8B4513;
}
.message{
  color: black;
  font-size: x-small;
}
.testimonial-ratings{
  display: flex;
  justify-content: center;
  align-items: center;
}
.footer-bottom{
  padding: 1rem;
  width: 100%;
  height: 75%;
  position: absolute;
  background-color: #8B4513;
  bottom: 0;
  display: flex;
  align-items: center;
}
.footer-bottom-container{
  margin-top: 5rem;
  display: flex;
  justify-content: space-between;
  gap: 6rem;
}
.footer-bottom p,.footer-bottom td{
  font-size: small;
  font-weight: 100;
}
.footer-container{
  display: flex;
  gap: 3rem;
}
.footer-modeva{
  letter-spacing: 0.5rem;
}
.menu,.get-help,.account{
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.footer-bottom-container tr{
  margin-top: 0.5rem;
}