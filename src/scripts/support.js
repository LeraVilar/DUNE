let nav = document.querySelectorAll('.support__item'),
    sub_nav_parent = document.querySelectorAll('.support__contents'),
    sub_nav = document.querySelectorAll('.support__card'),
    end_nav = document.querySelectorAll('.support__content');

function deb(){
    end_nav.forEach(act => {
        if(act.classList.contains('active')) {
            act.classList.remove('active');
        }
    });
}

nav.forEach(element => {
    element.addEventListener('click', function(){
        let data_nav = element.dataset.index;
        sub_nav.forEach(el => {
            el.classList.remove('active');
            deb();
            let data_sub = el.dataset.parent;
            if(data_nav == data_sub) {
                el.classList.add('active');
            }
            el.addEventListener('click', function(){
                let data_child = el.dataset.child;
                end_nav.forEach(e => {
                    e.classList.remove('active');
                    let data_end = e.dataset.children;
                    if(data_child == data_end) {
                        e.classList.add('active');
                    }
                });
            })
        });
    })
});
