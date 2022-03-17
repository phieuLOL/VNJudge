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
//                               Danh sách bài tập
//                          </div>
//                     </div>

//                     <ul class="list-exer-at-exercise">
//                          <li class="exer">
//                               <div class="ID-exercise">ID</div>
//                               <div class="name-exercise">Tên bài</div>
//                               <div class="level-exercise">Độ khó</div>
//                          </li>
//                          <li class="exer">
//                               <a href="" class="ID-exercise">ID</a>
//                               <a href="" class="name-exercise">Tên bài</a>
//                               <div class="level-exercise">Độ khó</div>
//                          </li>
//                          <li class="exer">
//                               <a href="" class="ID-exercise">ID</a>
//                               <a href="" class="name-exercise">Tên bài</a>
//                               <div class="level-exercise">Độ khó</div>
//                          </li>
//                     </ul>
//                </div>

//                <div class="types-exercise-2">
//                     <div class="title-content">
//                          <div class="item-content">
//                               <ion-icon name="pricetags"></ion-icon>
//                          </div>
//                          <div class="name-content">
//                               Các loại bài tập
//                          </div>
//                     </div>
               
//                     <div class="list-types">
//                          <a href="" class="random-exercise">
//                               <div class="box-random">
//                                    1 bài ngẫu nhiên
//                               </div>
//                          </a>
//                          <a href="#" class="type-of-list-types">hieu học giỏi dz</a>
//                          <a href="#" class="type-of-list-types">hieu</a>
//                          <a href="#" class="type-of-list-types">hieu học giỏi dz</a>
//                          <a href="#" class="type-of-list-types">hieu học giỏi dz</a>
//                          <a href="#" class="type-of-list-types">hieu học giỏi dz</a>
//                          <a href="#" class="type-of-list-types">hieu</a>
//                          <a href="#" class="type-of-list-types">hieu học giỏi dz</a>
//                          <a href="#" class="type-of-list-types">hieu học giỏi dz</a>
//                          <a href="#" class="type-of-list-types">hieu học giỏi dz</a>
//                          <a href="#" class="type-of-list-types">hieu</a>
//                          <a href="#" class="type-of-list-types">hieu học giỏi dz</a>
//                          <a href="#" class="type-of-list-types">hieu học giỏi dz</a>
//                          <a href="#" class="type-of-list-types">hieu học giỏi dz</a>
//                          <a href="#" class="type-of-list-types">hieu</a>
//                          <a href="#" class="type-of-list-types">hieu học giỏi dz</a>
//                          <a href="#" class="type-of-list-types">hieu học giỏi dz</a>
//                          <a href="#" class="type-of-list-types">hieu học giỏi dz</a>
//                          <a href="#" class="type-of-list-types">hieu</a>
//                          <a href="#" class="type-of-list-types">hieu học giỏi dz</a>
//                          <a href="#" class="type-of-list-types">hieu học giỏi dz</a>
//                          <a href="#" class="type-of-list-types">hieu học giỏi dz</a>
//                          <a href="#" class="type-of-list-types">hieu</a>
//                          <a href="#" class="type-of-list-types">hieu học giỏi dz</a>
//                          <a href="#" class="type-of-list-types">hieu học giỏi dz</a>
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
//                          Sự kiện
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
//                          <p>thông tin cụ thể về sự kiện ở đây !</p>
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
//                          Về Mình và web của Mình
//                     </div>
//                </div>

//                <div class="content">
//                     <div class="confide">
//                          <p class="title-paragraph">- Đôi lời 'Mình' tâm sự khi và sau khi tạo ra website này: </p>
//                          <ul class="paragraph">
//                               <li>
//                                    <p>Mình tạo ra web này để luyện tập cái kĩ năng làm web (code: html, css, js,...) từ đó dần hiện thực hóa ước trở thành 1 dân IT của mình 😃.
//                                    </p>
//                               </li>
//                               <li>
//                                    <p>Mình cũng muốn tạo ra web này để cho mọi người vô làm bài tập để nâng cao kĩ năng lập trình của bản thân (code: pascal, c++).
//                                    </p>
//                               </li>
//                               <li>
//                                    <p>trình code web của Mình còn rất non, nên web còn đểu. Ý tưởng còn chưa có nhiều, nên hay vào mấy web khác lấy giao diện và thiết kế lại về web của mình. Mong các bạn thông cảm 🥺.
//                                    </p>
//                               </li>
//                               <li>
//                                    <p>Mình tạo ra web này cũng chỉ là tạm thời thôi, vì quá đam mê lập trình nên Mình mới làm 😁.
//                                    </p>
//                               </li>
//                               <li>
//                                    <p> như Mình đã nói ở trên Mình chỉ làm web tạm thời thôi. Còn khi mình đủ trình, đủ điều kiện Mình sẽ làm 1 cái web hoành tráng hơn (cũng là web này, nhưng mà đẹp hơn, xịn hơn). Nó sẽ có hệ thống sever để tương giác giữa mọi người với nhau, hệ thống bxh,... Còn ở web này thì không có 😛.
//                                    </p>
//                               </li>
//                          </ul>
//                     </div>

//                     <div class="about-my-web">
//                          <p class="title-paragraph">- Một chút về cái web bài tập dởm của mình: 😀</p>

//                          <ul class="paragraph">
//                               <li>
//                                    <p>Đây là 1 con web làm bài tập dởm không có sever giúp bạn đăng nhập tài khoản, tương tác với người khác, hay hệ thống xếp hạng gì đâu. Nhưng nó vẫn có làm và chấm bài 😁.</p>
//                               </li>
//                               <li>
//                                    <p>Web cho phép làm-nộp vào sau đó sẽ tự động chấm bài theo test case ẩn để kiếm tra tính đúng đắn, tối ưu ở code của bạn.</p>
//                               </li>
//                               <li>
//                                    <p>Web thường xuyên có các sự kiện hay ho, nên bạn hãy thường xuyên theo dõi, bắt tình hình ở phần sự kiện nhá 😘.</p>
//                               </li>
//                               <li>
//                                    <p>Web có "các bài tập cơ bản" giúp bạn làm quen, cải thiện cách viết code, nâng trình độ. "các bài tập theo dạng" đây cũng chỉ là phần bài tập như bài tập cơ bản thôi nhưng mà nó được chia theo dạng 🤣.</p>
//                               </li>
//                          </ul>
//                     </div>
//                </div>

//                <div class="last-update-time">
//                     <p>Lần cập nhật gần đây nhất: &ensp; THỨ 6 &ensp; 4/3/2022 &ensp; 17:11</p>
//                </div>
//           </div>
          
//           <div class="thanks-to-my-companion">
//                <div class="title-content">
//                     <div class="item-content">😘</div>
//                     <div class="name-content">
//                          Lời cảm ơn dành cho: "Quang Thắng"
//                     </div>
//                </div>

//                <div class="content">
//                     <p class="text-content">Thắng là một người bạn mà mình coi trọng và yêu quý nhất từ trước tới giờ. Nó cùng học lập trình với mình, thường xuyên giúp đỡ mình giải bài tập lập trình, giúp mình code, là mục tiêu để mình vượt qua. Đặc biệt mình nêu tên nó ở đây là vì nó giúp mình kha khá trong việc làm ra cái web này.</p>

//                     <p class="text-content">Cảm ơn "Thắng" rất nhiều !! 😘😘</p>
//                </div>

//                <div class="last-update-time">
//                     <p>Lần cập nhật gần đây nhất: &ensp; THỨ 6 &ensp; 4/3/2022 &ensp; 17:50</p>
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
//                          Trợ giúp
//                     </div>
//                </div>

//                <div class="content">
//                     <p class="text-content">
//                          Nếu gặp lỗi, hay cần trợ giúp gì về web bạn có thể báo lại, hỏi mình qua địa gmail sau: &nbsp;
//                          <a href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSGMGStNGKKKzZGdBkwRPSVcnDrpQpMtRBPwJZBHNGHrfzGXwmKWNnWHVllZHlQBnZrcxQKl" target="_blank" class="links">phunghieuu25@gmail.com</a>
//                     </p>

//                     <div class="last-update-time">
//                          <p>Lần cập nhật gần đây nhất: &ensp; THỨ 6 &ensp; 4/3/2022 &ensp; 19:18</p>
//                     </div>
//                </div>
//           </div>`;
//      }
// }