function index(req, res){
  res.render('index', {
    goods:  [
      {
          "id": 1,
          "goods_name": "93题",
          "goods_description": "标准版",
          "infomation_id": 1,
          "sale": 89922,
          "cover": '<svg t="1723362771479" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="20063" width="36" height="36"><path d="M227.328 975.872H92.16c-12.288 0-23.552-10.24-23.552-23.552V109.568c0-11.264 9.216-21.504 21.504-21.504h137.216c12.288 0 23.552 10.24 23.552 23.552v841.728c0 12.288-10.24 22.528-23.552 22.528z" fill="#DD365E" p-id="20064"></path><path d="M230.4 975.872c10.24 3.072 20.48-9.216 20.48-20.48V108.544c0-11.264-9.216-20.48-20.48-20.48H90.112c-11.264 0-20.48 9.216-20.48 20.48l54.272 756.736s-5.12 74.752 106.496 110.592z" fill="#FC6B79" p-id="20065"></path><path d="M206.848 100.352c17.408 0 30.72 13.312 30.72 30.72v801.792c0 17.408-13.312 30.72-30.72 30.72H112.64c-17.408 0-30.72-13.312-30.72-30.72V131.072c0-17.408 13.312-30.72 30.72-30.72h94.208m0-30.72H112.64c-33.792 0-61.44 27.648-61.44 61.44v801.792c0 33.792 27.648 61.44 61.44 61.44h94.208c33.792 0 61.44-27.648 61.44-61.44V131.072c0-33.792-26.624-61.44-61.44-61.44z" fill="#330867" p-id="20066"></path><path d="M490.496 985.088H355.328c-12.288 0-23.552-10.24-23.552-23.552V118.784c0-11.264 9.216-21.504 21.504-21.504h137.216c12.288 0 23.552 10.24 23.552 23.552V962.56c-1.024 12.288-11.264 22.528-23.552 22.528z" fill="#F9B52B" p-id="20067"></path><path d="M492.544 985.088c10.24 3.072 20.48-9.216 20.48-20.48V117.76c0-11.264-9.216-20.48-20.48-20.48H352.256c-11.264 0-20.48 9.216-20.48 20.48l54.272 756.736s-4.096 74.752 106.496 110.592z" fill="#FFE08A" p-id="20068"></path><path d="M470.016 109.568c17.408 0 30.72 13.312 30.72 30.72V942.08c0 17.408-13.312 30.72-30.72 30.72h-94.208c-17.408 0-30.72-13.312-30.72-30.72V140.288c0-17.408 13.312-30.72 30.72-30.72h94.208m0-30.72h-94.208c-33.792 0-61.44 27.648-61.44 61.44V942.08c0 33.792 27.648 61.44 61.44 61.44h94.208c33.792 0 61.44-27.648 61.44-61.44V140.288c0-33.792-27.648-61.44-61.44-61.44z" fill="#330867" p-id="20069"></path><path d="M314.368 328.704h217.088v27.648H314.368z" fill="#330867" p-id="20070"></path><path d="M953.344 931.84l-130.048 36.864c-12.288 3.072-24.576-3.072-28.672-15.36L562.176 141.312c-3.072-11.264 3.072-22.528 14.336-25.6l132.096-37.888c12.288-3.072 24.576 4.096 28.672 15.36l232.448 808.96c3.072 13.312-4.096 25.6-16.384 29.696z" fill="#66C1FF" p-id="20071"></path><path d="M714.752 89.088c4.096 0 8.192 2.048 10.24 7.168l232.448 809.984c2.048 5.12-2.048 11.264-7.168 12.288l-130.048 36.864h-3.072c-4.096 0-8.192-2.048-10.24-7.168L574.464 140.288c-1.024-3.072 0-6.144 1.024-8.192 1.024-1.024 3.072-4.096 6.144-5.12l130.048-36.864c1.024 0 2.048-1.024 3.072-1.024m0-30.72c-4.096 0-7.168 1.024-11.264 2.048L573.44 97.28c-21.504 6.144-34.816 28.672-27.648 50.176L778.24 957.44c5.12 18.432 21.504 29.696 38.912 29.696 4.096 0 7.168-1.024 11.264-2.048l130.048-36.864c21.504-6.144 34.816-28.672 27.648-50.176L754.688 88.064c-5.12-17.408-21.504-29.696-39.936-29.696z" fill="#330867" p-id="20072"></path><path d="M603.5456 348.02688l208.6912-59.84256 7.6288 26.5728-208.6912 59.8528z" fill="#330867" p-id="20073"></path><path d="M591.872 103.424l93.184-26.624 35.84 124.928-51.2-25.6c-1.024-1.024-3.072-2.048-4.096-2.048-3.072 0-7.168 2.048-9.216 5.12l-29.696 48.128-34.816-123.904z" fill="#99CAFF" p-id="20074"></path><path d="M677.888 89.088l26.624 92.16-29.696-15.36c-3.072-1.024-6.144-2.048-9.216-2.048-7.168 0-13.312 3.072-17.408 10.24l-17.408 28.672-26.624-92.16 73.728-21.504m14.336-25.6L578.56 96.256 618.496 235.52c1.024 4.096 4.096 6.144 8.192 6.144 3.072 0 5.12-1.024 7.168-4.096L665.6 184.32l55.296 27.648c1.024 1.024 2.048 1.024 4.096 1.024 5.12 0 9.216-5.12 8.192-10.24l-40.96-139.264z" fill="#330867" p-id="20075"></path></svg>'
        },
      //   {
      //     "id": 5,
      //     "goods_name": "144题",
      //     "goods_description": "专业版",
      //     "infomation_id": 7,
      //     "sale": 21090,
      //     "cover": '<svg t="1723362724466" class="icon" viewBox="0 0 1093 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="18898" width="36" height="36"><path d="M129.00592 215.91372h227.210355v555.846846H129.00592z" fill="#DD365E" p-id="18899"></path><path d="M129.00592 238.893043h227.210355a22.979323 22.979323 0 0 1-22.979323-22.979323v555.846846a22.979323 22.979323 0 0 1 22.979323-22.979323H129.00592a22.979323 22.979323 0 0 1 22.979323 22.979323V215.91372a22.979323 22.979323 0 0 1-22.979323 22.979323z m0 555.846846h227.210355a22.979323 22.979323 0 0 0 22.979323-22.979323V215.91372a22.979323 22.979323 0 0 0-22.979323-22.979323H129.00592a22.979323 22.979323 0 0 0-22.979323 22.979323v555.846846a22.979323 22.979323 0 0 0 22.979323 22.979323z" fill="#6E6E96" p-id="18900"></path><path d="M356.216275 114.478392h227.210355v657.28677H356.216275z" fill="#FFDF80" p-id="18901"></path><path d="M356.216275 137.457715h227.210355a22.979323 22.979323 0 0 1-22.979323-22.979323v657.28677a22.979323 22.979323 0 0 1 22.979323-22.979323H356.216275a22.979323 22.979323 0 0 1 22.979323 22.979323V114.478392a22.979323 22.979323 0 0 1-22.979323 22.979323z m0 657.28677h227.210355c12.70297 0 22.979323-10.285545 22.979323-22.979323V114.478392c0-12.698374-10.276353-22.979323-22.979323-22.979323H356.216275a22.979323 22.979323 0 0 0-22.979323 22.979323v657.28677a22.979323 22.979323 0 0 0 22.979323 22.979323z" fill="#6E6E96" p-id="18902"></path><path d="M1047.820366 631.839468l-208.891238 89.440121-258.728795-604.287259 208.891239-89.435526z" fill="#96D3FF" p-id="18903"></path><path d="M589.27257 138.133307l208.877451-89.43093a22.974727 22.974727 0 0 1-30.16266-12.082528l258.715007 604.259685a22.965536 22.965536 0 0 1 12.082528-30.16266l-208.872855 89.435526a22.979323 22.979323 0 0 1 30.16266 12.082528l-258.715007-604.26428a22.988515 22.988515 0 0 1-12.087124 30.162659z m258.719603 604.259684l208.872855-89.435525a22.979323 22.979323 0 0 0 12.082528-30.167256L810.232549 18.52593a22.979323 22.979323 0 0 0-30.16266-12.082528l-208.872855 89.43093a22.970131 22.970131 0 0 0-12.087124 30.167255l258.719603 604.259684a22.947152 22.947152 0 0 0 30.16266 12.09172z" fill="#6E6E96" p-id="18904"></path><path d="M27.575188 775.823311h1038.665404v220.601501H27.575188z" fill="#F0F0FF" p-id="18905"></path><path d="M27.575188 798.802634h1038.665404a22.979323 22.979323 0 0 1-22.979323-22.979323v220.601501a22.979323 22.979323 0 0 1 22.979323-22.979323H27.575188a22.979323 22.979323 0 0 1 22.979323 22.979323v-220.601501a22.979323 22.979323 0 0 1-22.979323 22.979323z m0 220.601501h1038.665404a22.979323 22.979323 0 0 0 22.979323-22.979323v-220.601501a22.979323 22.979323 0 0 0-22.979323-22.979324H27.575188a22.979323 22.979323 0 0 0-22.979323 22.979324v220.601501a22.979323 22.979323 0 0 0 22.979323 22.979323z" fill="#6E6E96" p-id="18906"></path><path d="M48.256579 797.221656H1066.240592v45.958646H48.256579z" fill="#666666" opacity=".15" p-id="18907"></path><path d="M859.840312 708.677728L593.652429 107.543232l42.029182-18.613252 266.178691 601.129901z" fill="#666666" opacity=".15" p-id="18908"></path><path d="M517.03477 114.478392h45.958646v647.50677h-45.958646z" fill="#666666" opacity=".15" p-id="18909"></path><path d="M287.241539 215.91372h45.958646v550.667307h-45.958646z" fill="#666666" opacity=".15" p-id="18910"></path><path d="M50.554511 927.928046h992.706758v45.517443H50.554511z" fill="#FFFFFF" p-id="18911"></path></svg>'
      // },
      {
          "id": 6,
          "goods_name": "200题",
          "goods_description": "完整版",
          "infomation_id": 8,
          "sale": 92413,
          "cover": '<svg t="1723362787030" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="20226" width="36" height="36"><path d="M227.1 127.454H51.22c-19.82 0-35.892 16.07-35.892 35.89v798.172c0 19.828 16.07 35.898 35.89 35.898h175.884c19.828 0 35.898-16.07 35.898-35.9V163.346c0-19.82-16.07-35.89-35.9-35.89z m0 0" fill="#5EB3DD" p-id="20227"></path><path d="M99.156 997.4H51.21c-19.82 0-35.88-16.064-35.88-35.884V163.336c0-19.828 16.06-35.89 35.88-35.89h47.946c-19.828 0-35.906 16.06-35.906 35.89v798.18c0 19.82 16.08 35.882 35.906 35.882z m0 0" fill="#369AC1" p-id="20228"></path><path d="M783.188 215.626h-158.062c-17.814 0-32.26 14.436-32.26 32.256v717.274c0 17.812 14.446 32.258 32.26 32.258h158.06c17.814 0 32.252-14.446 32.252-32.258V247.882c0.008-17.82-14.438-32.258-32.25-32.258z m0 0" fill="#FFF5D7" p-id="20229"></path><path d="M678.172 997.406h-53.054c-17.798 0-32.244-14.446-32.244-32.242v-717.28c0-17.82 14.446-32.266 32.244-32.266h53.054c-17.82 0-32.266 14.444-32.266 32.264v717.282c0 17.796 14.446 32.242 32.266 32.242z m0 0" fill="#E0CFAF" p-id="20230"></path><path d="M975.876 66.532h-127.64c-18.11 0-32.8 14.686-32.8 32.796V964.62c0 18.108 14.688 32.796 32.8 32.796h127.64c18.108 0 32.796-14.688 32.796-32.796V99.328c0-18.11-14.688-32.796-32.798-32.796z m0 0" fill="#F9C84E" p-id="20231"></path><path d="M893.914 997.406h-45.672c-18.124 0-32.796-14.672-32.796-32.804V99.328c0-18.124 14.672-32.796 32.796-32.796h45.672c-18.1 0-32.796 14.672-32.796 32.796v865.274c0 18.132 14.694 32.804 32.796 32.804z m0 0" fill="#F7A34F" p-id="20232"></path><path d="M549.086 25.328H306.79c-24.188 0-43.79 19.6-43.79 43.79v884.506c0 24.18 19.6 43.79 43.79 43.79h242.288c24.188 0 43.79-19.61 43.79-43.788V69.116c0.008-24.188-19.602-43.79-43.782-43.79z m0 0" fill="#FC445F" p-id="20233"></path><path d="M354.368 997.414h-47.594c-24.18 0-43.774-19.594-43.774-43.79V69.12c0-24.18 19.594-43.774 43.774-43.774h47.594c-24.196 0-43.798 19.594-43.798 43.774v884.506c0 24.196 19.6 43.79 43.798 43.79z m0 0" fill="#DB0E35" p-id="20234"></path><path d="M263 166.492h329.868v61.258H263z m0 0M263 794.992h329.868v61.25H263z m0 0" fill="#3E4C56" p-id="20235"></path><path d="M975.876 51.204h-127.64c-26.532 0-48.126 21.586-48.126 48.124v104.094a47.17 47.17 0 0 0-16.922-3.126h-158.062c-5.962 0-11.666 1.11-16.922 3.126V69.118C608.204 36.524 581.68 10 549.086 10H306.79c-32.602 0-59.12 26.524-59.12 59.118v47.336a50.952 50.952 0 0 0-20.568-4.328H51.218C22.98 112.126 0 135.1 0 163.344v709.78a15.328 15.328 0 0 0 30.656 0V163.346c0-11.336 9.226-20.562 20.562-20.562h175.884c11.344 0 20.57 9.226 20.57 20.56v798.174c0 11.344-9.226 20.57-20.57 20.57H51.218c-11.336 0-20.56-9.226-20.56-20.57v-27.08a15.328 15.328 0 0 0-30.656 0v27.08c-0.002 28.24 22.974 51.22 51.216 51.22h175.884c15.148 0 28.774-6.61 38.156-17.096 10.68 10.564 25.36 17.094 41.532 17.094h242.288c15.64 0 29.868-6.11 40.454-16.054 8.718 9.836 21.444 16.054 35.594 16.054h158.06c12.518 0 23.916-4.866 32.416-12.796 8.586 7.936 20.054 12.796 32.632 12.796h127.64c26.54 0 48.126-21.586 48.126-48.116V99.328c0-26.532-21.586-48.124-48.126-48.124zM278.32 243.07h299.226v536.594H278.32z m0 567.25h299.226v30.594H278.32z m28.47-769.664h242.288c15.696 0 28.468 12.766 28.468 28.46v82.048h-51.336a15.328 15.328 0 0 0 0 30.656h51.336v30.6H278.32v-30.6h186.58a15.328 15.328 0 0 0 0-30.656h-186.58V69.118c0-15.696 12.774-28.46 28.47-28.46z m242.296 941.43H306.79c-15.696 0-28.47-12.766-28.47-28.46v-82.056h299.226v82.056c0 15.694-12.764 28.46-28.46 28.46z m251.024-16.93c0 9.336-7.594 16.93-16.922 16.93h-158.064c-9.328 0-16.92-7.594-16.92-16.93V247.882c0-9.336 7.592-16.928 16.92-16.928h158.064c9.328 0 16.92 7.592 16.92 16.928z m193.234-0.54c0 9.626-7.836 17.47-17.47 17.47h-127.64c-9.632 0-17.468-7.844-17.468-17.468V99.328c0-9.632 7.836-17.468 17.468-17.468h127.64c9.634 0 17.47 7.836 17.47 17.468z m0 0" p-id="20236"></path><path d="M73.914 297.242h130.492a15.328 15.328 0 0 0 0-30.656H73.914a15.328 15.328 0 0 0 0 30.656z m0 0M73.914 347.836h130.492a15.322 15.322 0 0 0 15.328-15.32 15.324 15.324 0 0 0-15.328-15.328H73.914a15.328 15.328 0 0 0-15.328 15.328c0 8.46 6.868 15.32 15.328 15.32z m0 0M73.914 398.438h130.492a15.328 15.328 0 0 0 0-30.656H73.914a15.328 15.328 0 0 0 0 30.656z m0 0M955.164 147.804h-86.22a15.328 15.328 0 0 0-15.326 15.32 15.328 15.328 0 0 0 15.328 15.33h86.218a15.324 15.324 0 0 0 15.328-15.33c0-8.46-6.86-15.32-15.328-15.32z m0 0M955.164 198.4h-86.22a15.328 15.328 0 0 0 0 30.656h86.22a15.328 15.328 0 0 0 0-30.656z m0 0M955.164 249h-86.22a15.334 15.334 0 0 0-15.326 15.328 15.334 15.334 0 0 0 15.328 15.328h86.218a15.328 15.328 0 0 0 0-30.656z m0 0M955.164 784.29h-86.22a15.334 15.334 0 0 0-15.326 15.328 15.334 15.334 0 0 0 15.328 15.328h86.218a15.328 15.328 0 0 0 0-30.656z m0 0M955.164 834.89h-86.22a15.328 15.328 0 0 0 0 30.656h86.22a15.328 15.328 0 0 0 0-30.656z m0 0M955.164 885.492h-86.22a15.328 15.328 0 0 0-15.326 15.32 15.328 15.328 0 0 0 15.328 15.328h86.218a15.324 15.324 0 0 0 15.328-15.328c0-8.46-6.86-15.32-15.328-15.32z m0 0M667.79 301.204a15.328 15.328 0 0 0-15.32 15.328v583.226a15.322 15.322 0 0 0 15.32 15.328 15.324 15.324 0 0 0 15.328-15.328V316.532c0-8.46-6.86-15.328-15.328-15.328z m0 0M729.61 474.312a15.328 15.328 0 0 0-15.328 15.328V899.76a15.328 15.328 0 0 0 30.656 0V489.64a15.324 15.324 0 0 0-15.328-15.328z m0 0" p-id="20237"></path></svg>'
      }
    ],
    currentGoodsId: 6,
  });

}
module.exports = index
