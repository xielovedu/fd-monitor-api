/*
     SQL语句封裝
*/

//web_error
const webError = {
    insert: 'INSERT INTO web_error set ?',
    update: 'UPDATE web_error SET ? WHERE id=?',
    delete: 'DELETE FROM web_error WHERE id=?',
    queryOnPage: 'SELECT COUNT(*) AS count FROM web_error; SELECT * FROM web_error ORDER BY createTime desc LIMIT ?,?',
    queryAll: 'SELECT * FROM web_error',
}

//web_user
const webUser = {
    insert: 'INSERT INTO web_user set ?',
    queryById: 'SELECT * FROM web_user WHERE id=?',
    queryAll: 'SELECT * FROM web_user',
    queryByToken: 'SELECT * FROM web_user WHERE token=?',
    queryLogin: 'SELECT * FROM web_user where userName=? and passWord=?',
}

//web_pages
const webPages = {
    queryAll: 'SELECT * FROM web_pages',
}

//web_system
const webSystem = {
    insert: 'INSERT INTO web_system set ?',
    queryOnPage: 'SELECT COUNT(*) AS count FROM web_system; SELECT * FROM web_system LIMIT ?,?',
}

module.exports = {
    webError,
    webUser,
    webPages,
    webSystem,
}