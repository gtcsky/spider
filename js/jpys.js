var rule = {
    title:'��Ƭ',
    host:'http://api2.rinhome.com',
    // homeUrl:'https://yjpapipxblwdohpakljwg.hxhzs.com/api/tag/hand?code=unknown601193cf375db73d&channel=wandoujia',//��վ����ҳ����,���ڷ����ȡ���Ƽ���ȡ
    homeUrl:'/api/tag/hand?code=unknown601193cf375db73d&channel=wandoujia',//��վ����ҳ����,���ڷ����ȡ���Ƽ���ȡ
    // url:'/api/crumb/list?area=0&category_id=fyclass&page=fypage&type=0&limit=24&fyfilter',
    url:'/api/crumb/list?area=0&page=fypage&type=0&limit=24&fyfilter',
    class_name:'ȫ��&��Ӱ&���Ӿ�&����&����',     // ɸѡ /api/term/ad_fenlei?limit=10&page=1
    class_url:'0&1&2&3&4',
    detailUrl:'/api/node/detail?channel=wandoujia&token=&id=fyid',//��������ƴ������(json��ʽ��)
    searchUrl:'/api/video/search?key=**&page=fypage',
    searchable:2,
    quickSearch:0,
    filterable:1,
    filter:{
        "0":[{"key":"year","name":"���","value":[{"n":"ȫ��","v":"0"},{"n":"2023","v":"153"},{"n":"2022","v":"101"},{"n":"2021","v":"118"},{"n":"2020","v":"16"},{"n":"2019","v":"7"},{"n":"2018","v":"2"},{"n":"2017","v":"3"},{"n":"2016","v":"22"}]},{"key":"sort","name":"����","value":[{"n":"����","v":"hot"},{"n":"����","v":"rating"},{"n":"����","v":"update"}]}],
        "1":[{"key":"cateId","name":"����","value":[{"n":"ȫ��","v":"1"},{"n":"����","v":"5"},{"n":"����","v":"6"},{"n":"ϲ��","v":"7"},{"n":"ս��","v":"8"},{"n":"�ֲ�","v":"9"},{"n":"����","v":"10"},{"n":"����","v":"11"},{"n":"�ƻ�","v":"12"},{"n":"����","v":"13"}]},{"key":"year","name":"���","value":[{"n":"ȫ��","v":"0"},{"n":"2023","v":"153"},{"n":"2022","v":"101"},{"n":"2021","v":"118"},{"n":"2020","v":"16"},{"n":"2019","v":"7"},{"n":"2018","v":"2"},{"n":"2017","v":"3"},{"n":"2016","v":"22"}]},{"key":"sort","name":"����","value":[{"n":"����","v":"hot"},{"n":"����","v":"rating"},{"n":"����","v":"update"}]}],
        "2":[{"key":"cateId","name":"����","value":[{"n":"ȫ��","v":"2"},{"n":"����","v":"14"},{"n":"����","v":"15"},{"n":"��̨","v":"16"},{"n":"�պ�","v":"17"},{"n":"����","v":"18"}]},{"key":"year","name":"���","value":[{"n":"ȫ��","v":"0"},{"n":"2023","v":"153"},{"n":"2022","v":"101"},{"n":"2021","v":"118"},{"n":"2020","v":"16"},{"n":"2019","v":"7"},{"n":"2018","v":"2"},{"n":"2017","v":"3"},{"n":"2016","v":"22"}]},{"key":"sort","name":"����","value":[{"n":"����","v":"hot"},{"n":"����","v":"rating"},{"n":"����","v":"update"}]}],
        "3":[{"key":"cateId","name":"����","value":[{"n":"ȫ��","v":"3"},{"n":"����","v":"19"},{"n":"����","v":"20"},{"n":"�ձ�","v":"21"},{"n":"����","v":"22"}]},{"key":"year","name":"���","value":[{"n":"ȫ��","v":"0"},{"n":"2023","v":"153"},{"n":"2022","v":"101"},{"n":"2021","v":"118"},{"n":"2020","v":"16"},{"n":"2019","v":"7"},{"n":"2018","v":"2"},{"n":"2017","v":"3"},{"n":"2016","v":"22"}]},{"key":"sort","name":"����","value":[{"n":"����","v":"hot"},{"n":"����","v":"rating"},{"n":"����","v":"update"}]}],
        "4":[{"key":"cateId","name":"����","value":[{"n":"ȫ��","v":"4"},{"n":"����","v":"23"},{"n":"����","v":"24"},{"n":"����","v":"25"},{"n":"��̨","v":"26"}]},{"key":"year","name":"���","value":[{"n":"ȫ��","v":"0"},{"n":"2023","v":"153"},{"n":"2022","v":"101"},{"n":"2021","v":"118"},{"n":"2020","v":"16"},{"n":"2019","v":"7"},{"n":"2018","v":"2"},{"n":"2017","v":"3"},{"n":"2016","v":"22"}]},{"key":"sort","name":"����","value":[{"n":"����","v":"hot"},{"n":"����","v":"rating"},{"n":"����","v":"update"}]}]
    },
    // filter_url:'sort={{fl.sort or "hot"}}&year={{fl.year or "0"}}',
    filter_url:'sort={{fl.sort or "update"}}&year={{fl.year or "0"}}&category_id={{fl.cateId}}',
	filter_def:{
		0:{cateId:'0'},
        1:{cateId:'1'},
		2:{cateId:'2'},
		3:{cateId:'3'},
		4:{cateId:'4'}
	},
    headers:{
        'User-Agent':'jianpian-android/350',
        'JPAUTH':'y261ow7kF2dtzlxh1GS9EB8nbTxNmaK/QQIAjctlKiEv'
    },
    timeout:5000,
    limit:8,
    play_parse:true,
    play_json:[{
        re:'*',
        json:{
            parse:0,
            jx:0
        }
    }],
    lazy:'',
    // double:true,
    ͼƬ��Դ:'@Referer=www.jianpianapp.com@User-Agent=jianpian-version353',
    // �Ƽ�:'json:data;room;*;cover;*;*',
    �Ƽ�:'json:.video;*;*;*;*',
    һ��:'json:data;title;path;playlist.title;id',
    ����:{
        // title:'data.title',
        title:'data.title;data.types[0].name',
        // desc:';data.description;data.id',
        desc:'data.score;data.year.title;data.area.title;data.actors[0].name;data.directors[0].name',
        img:'data.thumbnail',
        // content:'data.thumbnail',
        content:'data.description',
        is_json:1,
        tabs:`js:
            TABS = [];
            if (html.data.have_ftp_ur == 1) {
                TABS.push("���±߲������")
            }
            if (html.data.have_m3u8_ur == 1) {
                TABS.push("���ߵ㲥�����")
            }
        `,
        lists:`js:
            log(TABS);
            LISTS = [];
            TABS.forEach(function(tab) {
                if (/���±߲�/.test(tab)) {
                    let ftp = html.data.new_ftp_list;
                    let d = ftp.map(function(it) {
                        return it.title + "$" + (/m3u8/.test(it.url) ? play_url + it.url : "tvbox-xg:" + it.url)
                    });
                    LISTS.push(d)
                } else if (/���ߵ㲥/.test(tab)) {
                    let m3u = html.data.new_m3u8_list;
                    let d = m3u.map(function(it) {
                        return it.title + "$" + (/m3u8/.test(it.url) ? play_url + it.url : "tvbox-xg:" + it.url)
                    });
                    LISTS.push(d)
                }
            });
        `,
    },
    ����:'json:data;*;thumbnail;mask;*',
}