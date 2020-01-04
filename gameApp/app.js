var app = new Vue({
    el: '#app',
    data: {
        myHealth: 100,
        monsterHealth: 100,
        statusGame: false,
        logger: []
    },
    methods: {
        startGame: function() {
            this.myHealth = 100;
            this.monsterHealth = 100;
            this.statusGame = !this.statusGame;
            this.logger = [
                {
                    message: 'you started new game'
                }
            ];
        },
        attack: function () {
            const damageToPlayer = this.randomInteger(1, 10);
            const damageToMonster = this.randomInteger(1, 10);
            this.manageBattle(damageToPlayer, damageToMonster);
        },
        specialAttack: function () {
            const damageToPlayer = this.randomInteger(15, 30);
            const damageToMonster = this.randomInteger(15, 30);
            this.manageBattle(damageToPlayer, damageToMonster);
        },
        manageBattle: function(damageToPlayer, damageToMonster) {
            if (this.checkHealth(damageToPlayer, damageToMonster)) {
                if (this.checkWhoWin(damageToPlayer, damageToMonster)) {
                    this.hitOne('player', damageToMonster);
                    this.statusGame = !this.statusGame;
                    setTimeout(() => {
                        if (confirm('you win, new game?')) {
                            this.startGame();
                        }
                    }, 10);
                } else {
                    this.hitOne('monster', damageToPlayer);
                    this.statusGame = !this.statusGame;
                    setTimeout(() => {
                        if (confirm('you lose, new game?')) {
                            this.startGame();
                        }
                    }, 10);
                }
            } else {
                this.hit(damageToPlayer, damageToMonster);
            }
        },
        hit: function (damageToPlayer, damageToMonster) {
            this.myHealth -= damageToPlayer;
            this.monsterHealth -= damageToMonster;
            this.logger.unshift(
                {
                    message: `monster hits player for ${damageToPlayer}`
                },
                {
                    message: `player hits monster for ${damageToMonster}`
                },
            );
        },
        hitOne: function (who, damage) {
            if (who === 'player') {
                this.monsterHealth -= damage;
            } else {
                this.myHealth -= damage;
            }
        },
        checkHealth: function (damageToPlayer, damageToMonster) {
            return this.myHealth - damageToPlayer < 1 || this.monsterHealth - damageToMonster < 1;
        },
        checkWhoWin: function (damageToPlayer, damageToMonster) {
            return this.myHealth - damageToPlayer > this.monsterHealth - damageToMonster;
        },
        heal: function () {
            const healPlayer = this.randomInteger(10, 20);
            if (this.myHealth + healPlayer > 100) {
                this.myHealth = 100;
                this.logger.unshift(
                    {
                        message: `player heals for ${healPlayer}`
                    }
                )
            } else {
                this.myHealth += healPlayer;
                this.logger.unshift(
                    {
                        message: `player heals for ${healPlayer}`
                    }
                );
            }
        },
        giveUp: function () {
            this.statusGame = !this.statusGame;
        },
        randomInteger: function (min, max) {
            return Math.round(min - 0.5 + Math.random() * (max - min + 1));
        }
    }
});