const isLogin = (userName) => {
    if (userName == "admin") {
        return true;
    }else {
        return false;
    }

}

const num = 12;

module.exports.isLogin = isLogin;
module.exports.num = num;

// export default
module.exports = {
    isLogin,
    num,
}