var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
function setName() {
    return 'Dota';
}
var Player = /** @class */ (function () {
    function Player(login) {
        this.login = login;
    }
    Object.defineProperty(Player.prototype, "password", {
        get: function () {
            return this._password;
        },
        set: function (newPass) {
            // какая-то валидация
            this._password = newPass;
        },
        enumerable: false,
        configurable: true
    });
    Player.getGameName = function () {
        return Player.game;
    };
    // можно через стрелочную функцию привязывать контекст к экземпляру
    // logIn = () => {
    //     return `Player ${this.login} online`
    // }
    Player.prototype.logIn = function () {
        return "Player ".concat(this.login, " online");
    };
    Player.prototype.connect = function () {
        // do smth
        return this;
    };
    //type guard
    Player.prototype.isPro = function () {
        return this instanceof CompetitivePlayer;
    };
    Player.game = 'Dota'; //свойство для всего класса без создания экземпляра класса
    (function () {
        Player.game = setName();
    })();
    return Player;
}());
// const testNew = player.logIn.bind(player) //првязываем контекст к объекту
// testNew()
var CompetitivePlayer = /** @class */ (function (_super) {
    __extends(CompetitivePlayer, _super);
    function CompetitivePlayer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CompetitivePlayer.prototype.checkLogin = function () {
        return _super.prototype.logIn.call(this); // при наследовании со стрелочной функцией поменять на this.
    };
    CompetitivePlayer.prototype.isConsented = function () {
        this.consent ? 'Yes' : 'No';
    };
    return CompetitivePlayer;
}(Player));
var player = new Player('test');
console.log(player.connect().logIn()); //chaining
var player2 = new CompetitivePlayer('Test2');
console.log(player2.checkLogin());
var somePlayer = new CompetitivePlayer('Test3');
somePlayer.isPro() ? console.log(somePlayer) : console.log(somePlayer);
