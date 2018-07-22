const Twitter = require('twitter')


const consumer_key = "input";
const consumer_secret = "input";
const access_token_key = "input";
const access_token_secret = "input";
const keyword = "取得したいキーワードを入力するんだ";

const client = new Twitter({
    consumer_key,
    consumer_secret,
    access_token_key,
    access_token_secret
})

getKeywordSearch();

function getKeywordSearch() {
    const params = { q: keyword, include_entities: false }//200件まで取得可能。デフォルトは20
    client.get('search/tweets', params, function (error, tweets, response) {
        if (!error) {
            for (let i = 0; i < tweets.statuses.length; i++) {
                // console.log(tweets.statuses[i].id_str);
                console.log(tweets.statuses[i].user.id);
                follow(tweets.statuses[i].user.id);
            }
        } else {
            console.log(error);
        }
    })
}

function follow(id) {
    console.log("register" + id)
    const params = { user_id: id }
    client.post('friendships/create', params);
    console.log("registerEnd");
}