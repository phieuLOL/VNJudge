var ntab = ["home", "thematic", "exercises", "algorithm", "event", "information", "help"];

function delete_back_image(nametab)
{
     for (var i = 0; i <= 6; ++i) {
          console.log(i);
          if (ntab[i] == nametab) {
               document.getElementById(ntab[i]).style =
               `border-bottom-left-radius: 5px;
               border-bottom-right-radius: 5px;
               background-image: linear-gradient(to bottom right, #ff55ff, #ff6600);`;
          }
          else {
               document.getElementById(ntab[i]).style =
               `border-radius: 0;
               background-image: none;`
          }
     }
}
function redraw(nametab)
{
     if (nametab == 'home') {
          location.reload();
     }
     else
     {
          var contentElement = document.querySelector('.table-content');
          delete_back_image(nametab);
          if (nametab == 'thematic') {
               contentElement.innerHTML =
                    `<h1> ex </h1>`;
          } else
          if (nametab == 'exercises') {
               contentElement.innerHTML =
                    `<h1> ex </h1>`;
          } else
               if (nametab == 'algorithm') {
                    contentElement.innerHTML =
                    `<h1> ex </h1>`;
          } else
          if (nametab == 'event') {
               contentElement.innerHTML =
               `<h1> ex </h1>`;
          } else
          if (nametab == 'information') {
               contentElement.innerHTML =
               `<h1> ex </h1>`;
          } else
          if (nametab == 'help') {
               contentElement.innerHTML =
               `<h1> ex </h1>`;
          }
     }
}
// function redraw(nametab)
// {
//      if (nametab == 'home') {
//           location.reload();
//      }
//      else
//      if (nametab == 'exercises') {
//           var contentElement = document.querySelector('.table-content');
//           delete_back_image(nametab);
//           contentElement.innerHTML =
//           `<div class="table-content-exercise">
//                <div class="list-exercise">
//                     <div class="title-content">
//                          <div class="item-content">
//                               <ion-icon name="bookmark"></ion-icon>
//                          </div>
//                          <div class="name-content">
//                               Danh s??ch b??i t???p
//                          </div>
//                     </div>

//                     <ul class="list-exer-at-exercise">
//                          <li class="exer">
//                               <div class="ID-exercise">ID</div>
//                               <div class="name-exercise">T??n b??i</div>
//                               <div class="level-exercise">????? kh??</div>
//                          </li>
//                          <li class="exer">
//                               <a href="" class="ID-exercise">ID</a>
//                               <a href="" class="name-exercise">T??n b??i</a>
//                               <div class="level-exercise">????? kh??</div>
//                          </li>
//                          <li class="exer">
//                               <a href="" class="ID-exercise">ID</a>
//                               <a href="" class="name-exercise">T??n b??i</a>
//                               <div class="level-exercise">????? kh??</div>
//                          </li>
//                     </ul>
//                </div>

//                <div class="types-exercise-2">
//                     <div class="title-content">
//                          <div class="item-content">
//                               <ion-icon name="pricetags"></ion-icon>
//                          </div>
//                          <div class="name-content">
//                               C??c lo???i b??i t???p
//                          </div>
//                     </div>
               
//                     <div class="list-types">
//                          <a href="" class="random-exercise">
//                               <div class="box-random">
//                                    1 b??i ng???u nhi??n
//                               </div>
//                          </a>
//                          <a href="#" class="type-of-list-types">hieu h???c gi???i dz</a>
//                          <a href="#" class="type-of-list-types">hieu</a>
//                          <a href="#" class="type-of-list-types">hieu h???c gi???i dz</a>
//                          <a href="#" class="type-of-list-types">hieu h???c gi???i dz</a>
//                          <a href="#" class="type-of-list-types">hieu h???c gi???i dz</a>
//                          <a href="#" class="type-of-list-types">hieu</a>
//                          <a href="#" class="type-of-list-types">hieu h???c gi???i dz</a>
//                          <a href="#" class="type-of-list-types">hieu h???c gi???i dz</a>
//                          <a href="#" class="type-of-list-types">hieu h???c gi???i dz</a>
//                          <a href="#" class="type-of-list-types">hieu</a>
//                          <a href="#" class="type-of-list-types">hieu h???c gi???i dz</a>
//                          <a href="#" class="type-of-list-types">hieu h???c gi???i dz</a>
//                          <a href="#" class="type-of-list-types">hieu h???c gi???i dz</a>
//                          <a href="#" class="type-of-list-types">hieu</a>
//                          <a href="#" class="type-of-list-types">hieu h???c gi???i dz</a>
//                          <a href="#" class="type-of-list-types">hieu h???c gi???i dz</a>
//                          <a href="#" class="type-of-list-types">hieu h???c gi???i dz</a>
//                          <a href="#" class="type-of-list-types">hieu</a>
//                          <a href="#" class="type-of-list-types">hieu h???c gi???i dz</a>
//                          <a href="#" class="type-of-list-types">hieu h???c gi???i dz</a>
//                          <a href="#" class="type-of-list-types">hieu h???c gi???i dz</a>
//                          <a href="#" class="type-of-list-types">hieu</a>
//                          <a href="#" class="type-of-list-types">hieu h???c gi???i dz</a>
//                          <a href="#" class="type-of-list-types">hieu h???c gi???i dz</a>
//                     </div>
//                </div>
//           </div>`;
//      }
//      else
//      if (nametab == 'event') {
//           var contentElement = document.querySelector('.table-content');
//           delete_back_image(nametab);
//           contentElement.innerHTML =
//           `<div class="events">
//                <div class="title-content">
//                     <div class="item-content">
//                          <ion-icon name="bookmarks"></ion-icon>
//                     </div>
//                     <div class="name-content">
//                          S??? ki???n
//                     </div>
//                </div>
//                <div class="content-event">
//                     <ul class="list-event">
//                          <li class="name-event">
//                               <a href="" class="text-name-event">web moi laasdfasdfadsfp</a>
//                          </li>
//                          <li class="name-event">
//                               <a href="" class="text-name-event">web moi lap</a>
//                          </li>
//                          <li class="name-event">
//                               <a href="" class="text-name-event">web moi lap</a>
//                          </li>
//                          <li class="name-event">
//                               <a href="" class="text-name-event">web moi lap</a>
//                          </li>
//                          <li class="name-event">
//                               <a href="" class="text-name-event">web moi lap</a>
//                          </li>
//                          <li class="name-event">
//                               <a href="" class="text-name-event">web moi lap</a>
//                          </li>
//                          <li class="name-event">
//                               <a href="" class="text-name-event">web moi lap</a>
//                          </li>
//                          <li class="name-event">
//                               <a href="" class="text-name-event">web moi lap</a>
//                          </li>
//                          <li class="name-event">
//                               <a href="" class="text-name-event">web moi lap</a>
//                          </li>
//                          <li class="name-event">
//                               <a href="" class="text-name-event">web moi lap</a>
//                          </li>
//                     </ul>

//                     <div class="more-information-about-event">
//                          <p>th??ng tin c??? th??? v??? s??? ki???n ??? ????y !</p>
//                     </div>
//                </div>
//           </div>`;
//      }
//      else
//      if (nametab == 'information') {
//           var contentElement = document.querySelector('.table-content');
//           delete_back_image(nametab);
//           contentElement.innerHTML =
//           `<div class="about-me-and-my-web">
//                <div class="title-content">
//                     <div class="item-content">
//                          <ion-icon name="newspaper"></ion-icon>
//                     </div>
//                     <div class="name-content">
//                          V??? M??nh v?? web c???a M??nh
//                     </div>
//                </div>

//                <div class="content">
//                     <div class="confide">
//                          <p class="title-paragraph">- ????i l???i 'M??nh' t??m s??? khi v?? sau khi t???o ra website n??y: </p>
//                          <ul class="paragraph">
//                               <li>
//                                    <p>M??nh t???o ra web n??y ????? luy???n t???p c??i k?? n??ng l??m web (code: html, css, js,...) t??? ???? d???n hi???n th???c h??a ?????c tr??? th??nh 1 d??n IT c???a m??nh ????.
//                                    </p>
//                               </li>
//                               <li>
//                                    <p>M??nh c??ng mu???n t???o ra web n??y ????? cho m???i ng?????i v?? l??m b??i t???p ????? n??ng cao k?? n??ng l???p tr??nh c???a b???n th??n (code: pascal, c++).
//                                    </p>
//                               </li>
//                               <li>
//                                    <p>tr??nh code web c???a M??nh c??n r???t non, n??n web c??n ?????u. ?? t?????ng c??n ch??a c?? nhi???u, n??n hay v??o m???y web kh??c l???y giao di???n v?? thi???t k??? l???i v??? web c???a m??nh. Mong c??c b???n th??ng c???m ????.
//                                    </p>
//                               </li>
//                               <li>
//                                    <p>M??nh t???o ra web n??y c??ng ch??? l?? t???m th???i th??i, v?? qu?? ??am m?? l???p tr??nh n??n M??nh m???i l??m ????.
//                                    </p>
//                               </li>
//                               <li>
//                                    <p> nh?? M??nh ???? n??i ??? tr??n M??nh ch??? l??m web t???m th???i th??i. C??n khi m??nh ????? tr??nh, ????? ??i???u ki???n M??nh s??? l??m 1 c??i web ho??nh tr??ng h??n (c??ng l?? web n??y, nh??ng m?? ?????p h??n, x???n h??n). N?? s??? c?? h??? th???ng sever ????? t????ng gi??c gi???a m???i ng?????i v???i nhau, h??? th???ng bxh,... C??n ??? web n??y th?? kh??ng c?? ????.
//                                    </p>
//                               </li>
//                          </ul>
//                     </div>

//                     <div class="about-my-web">
//                          <p class="title-paragraph">- M???t ch??t v??? c??i web b??i t???p d???m c???a m??nh: ????</p>

//                          <ul class="paragraph">
//                               <li>
//                                    <p>????y l?? 1 con web l??m b??i t???p d???m kh??ng c?? sever gi??p b???n ????ng nh???p t??i kho???n, t????ng t??c v???i ng?????i kh??c, hay h??? th???ng x???p h???ng g?? ????u. Nh??ng n?? v???n c?? l??m v?? ch???m b??i ????.</p>
//                               </li>
//                               <li>
//                                    <p>Web cho ph??p l??m-n???p v??o sau ???? s??? t??? ?????ng ch???m b??i theo test case ???n ????? ki???m tra t??nh ????ng ?????n, t???i ??u ??? code c???a b???n.</p>
//                               </li>
//                               <li>
//                                    <p>Web th?????ng xuy??n c?? c??c s??? ki???n hay ho, n??n b???n h??y th?????ng xuy??n theo d??i, b???t t??nh h??nh ??? ph???n s??? ki???n nh?? ????.</p>
//                               </li>
//                               <li>
//                                    <p>Web c?? "c??c b??i t???p c?? b???n" gi??p b???n l??m quen, c???i thi???n c??ch vi???t code, n??ng tr??nh ?????. "c??c b??i t???p theo d???ng" ????y c??ng ch??? l?? ph???n b??i t???p nh?? b??i t???p c?? b???n th??i nh??ng m?? n?? ???????c chia theo d???ng ????.</p>
//                               </li>
//                          </ul>
//                     </div>
//                </div>

//                <div class="last-update-time">
//                     <p>L???n c???p nh???t g???n ????y nh???t: &ensp; TH??? 6 &ensp; 4/3/2022 &ensp; 17:11</p>
//                </div>
//           </div>
          
//           <div class="thanks-to-my-companion">
//                <div class="title-content">
//                     <div class="item-content">????</div>
//                     <div class="name-content">
//                          L???i c???m ??n d??nh cho: "Quang Th???ng"
//                     </div>
//                </div>

//                <div class="content">
//                     <p class="text-content">Th???ng l?? m???t ng?????i b???n m?? m??nh coi tr???ng v?? y??u qu?? nh???t t??? tr?????c t???i gi???. N?? c??ng h???c l???p tr??nh v???i m??nh, th?????ng xuy??n gi??p ????? m??nh gi???i b??i t???p l???p tr??nh, gi??p m??nh code, l?? m???c ti??u ????? m??nh v?????t qua. ?????c bi???t m??nh n??u t??n n?? ??? ????y l?? v?? n?? gi??p m??nh kha kh?? trong vi???c l??m ra c??i web n??y.</p>

//                     <p class="text-content">C???m ??n "Th???ng" r???t nhi???u !! ????????</p>
//                </div>

//                <div class="last-update-time">
//                     <p>L???n c???p nh???t g???n ????y nh???t: &ensp; TH??? 6 &ensp; 4/3/2022 &ensp; 17:50</p>
//                </div>
//           </div>`;
//      }
//      else
//      if (nametab == 'help') {
//           var contentElement = document.querySelector('.table-content');
//           delete_back_image(nametab);
//           contentElement.innerHTML =
//           `<div class="help">
//                <div class="title-content">
//                     <div class="item-content">
//                          <ion-icon name="help-outline"></ion-icon>
//                     </div>
//                     <div class="name-content">
//                          Tr??? gi??p
//                     </div>
//                </div>

//                <div class="content">
//                     <p class="text-content">
//                          N???u g???p l???i, hay c???n tr??? gi??p g?? v??? web b???n c?? th??? b??o l???i, h???i m??nh qua ?????a gmail sau: &nbsp;
//                          <a href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSGMGStNGKKKzZGdBkwRPSVcnDrpQpMtRBPwJZBHNGHrfzGXwmKWNnWHVllZHlQBnZrcxQKl" target="_blank" class="links">phunghieuu25@gmail.com</a>
//                     </p>

//                     <div class="last-update-time">
//                          <p>L???n c???p nh???t g???n ????y nh???t: &ensp; TH??? 6 &ensp; 4/3/2022 &ensp; 19:18</p>
//                     </div>
//                </div>
//           </div>`;
//      }
// }