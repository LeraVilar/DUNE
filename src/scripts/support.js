let nav = document.querySelectorAll('.support__item'),
    sub_nav_parent = document.querySelectorAll('.support__contents'),
    sub_nav = document.querySelectorAll('.support__card'),
    end_nav = document.querySelectorAll('.support__content');


nav.forEach(element => {
    element.onclick = function(){
        let data_nav = element.dataset.index;
        sub_nav.forEach(el => {
            el.classList.remove('active');

            deb();
            let data_sub = el.dataset.parent;
            if(data_nav == data_sub) {
                el.classList.add('active');
            }
        });
    }
});
sub_nav.forEach(sub => {
    sub.onclick = function(){  
        let data_child = sub.dataset.child;
        end_nav.forEach(e => {
            e.classList.remove('active');
            let data_end = e.dataset.children;
            if(data_child == data_end) {
                e.classList.add('active');
            }
        });
    }
});

function deb(){
    end_nav.forEach(act => {
        if(act.classList.contains('active')) {
            act.classList.remove('active');
        }
    });
}
// onLoad();

// function onLoad() {
//     sub_nav.forEach(on => {
//         if(on.dataset.parent == '1') {
//             on.classList.add('active');
//         }
//     });
// }