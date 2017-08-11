var managers;
(function (managers) {
    var Collision = (function () {
        function Collision() {
            this.timer = 3;
            this.start();
        }
        Collision.prototype.start = function () {
        };
        Collision.prototype.update = function () {
            if (this.timer > 0) {
                this.timer -= 0.1;
            }
        };
        Collision.prototype.checkPlayer = function (player, other) {
            //check to see if object is colliding
            if ((objects.Vector2.distance(player.position, other.position) < (player.halfHeight + other.halfHeight)) && this.timer <= 0) {
                if (!other.isColliding) {
                    other.isColliding = true;
                    // if player collides with asteroid
                    if (other.name === "asteroid0") {
                        if (core.SECheck == true) {
                            createjs.Sound.play("hit");
                        }
                        core.lives -= 1;
                    }
                    if (other.name === "asteroid1") {
                        if (core.SECheck == true) {
                            createjs.Sound.play("hit");
                        }
                        core.lives -= 1;
                    }
                    if (other.name === "asteroid2") {
                        if (core.SECheck == true) {
                            createjs.Sound.play("hit");
                        }
                        core.lives -= 1;
                    }
                    if (other.name === "asteroid3") {
                        if (core.SECheck == true) {
                            createjs.Sound.play("hit");
                        }
                        core.lives -= 1;
                    }
                    //if player collides with newAsteroid
                    if (other.name === "newAsteroid0") {
                        if (core.SECheck == true) {
                            createjs.Sound.play("hit");
                        }
                        core.lives -= 1;
                    }
                    if (other.name === "newAsteroid1") {
                        if (core.SECheck == true) {
                            createjs.Sound.play("hit");
                        }
                        core.lives -= 1;
                    }
                    // if player collides with enemyShip
                    if (other.name === "enemyShip") {
                        if (core.SECheck == true) {
                            createjs.Sound.play("hit");
                        }
                        core.lives -= 1;
                    }
                    //if enemyBullet is colliding with player
                    if (other.name === "enemyBullet") {
                        if (core.SECheck == true) {
                            createjs.Sound.play("hit");
                        }
                        core.lives -= 5;
                    }
                }
                //collistion with portal in play
                if (other.name === "portal") {
                    if (core.SECheck == true) {
                        createjs.Sound.play("hit");
                    }
                    core.scene = config.Scene.PATH;
                    core.changeScene();
                }
                if (other.name === "portalPath") {
                    if (core.SECheck == true) {
                        createjs.Sound.play("hit");
                    }
                    core.scene = config.Scene.GAMEWON;
                    core.changeScene();
                    core.lives = 100;
                    core.Time = 120;
                    core.score = 0;
                }
                if (other.name === "portaltut") {
                    if (core.SECheck == true) {
                        createjs.Sound.play("hit");
                    }
                    core.scene = config.Scene.PLAY;
                    core.changeScene();
                    core.lives = 100;
                    core.score = 0;
                }
            }
            else {
                other.isColliding = false;
            }
        };
        Collision.prototype.checkEnemy = function (bullet, other) {
            //check to see if object is colliding
            if ((objects.Vector2.distance(bullet.position, other.position) < (bullet.halfHeight + other.halfHeight)) && this.timer <= 0) {
                if (!other.isColliding) {
                    other.isColliding = true;
                    // if bullet collides with asteroid
                    if (other.name === "asteroid0") {
                        if (core.SECheck == true) {
                            createjs.Sound.play("objHit");
                        }
                        core.score += 100;
                        core.AstHit0 = true;
                    }
                    else {
                        core.AstHit0 = false;
                    }
                    if (other.name === "asteroid1") {
                        if (core.SECheck == true) {
                            createjs.Sound.play("objHit");
                        }
                        core.score += 100;
                        core.AstHit1 = true;
                    }
                    else {
                        core.AstHit1 = false;
                    }
                    if (other.name === "asteroid2") {
                        if (core.SECheck == true) {
                            createjs.Sound.play("objHit");
                        }
                        core.score += 100;
                        core.AstHit2 = true;
                    }
                    else {
                        core.AstHit2 = false;
                    }
                    if (other.name === "asteroid3") {
                        if (core.SECheck == true) {
                            createjs.Sound.play("objHit");
                        }
                        core.score += 100;
                        core.AstHit3 = true;
                    }
                    else {
                        core.AstHit3 = false;
                    }
                    //if bullet collides with newAsteroids
                    if (other.name === "newAsteroid0") {
                        if (core.SECheck == true) {
                            createjs.Sound.play("objHit");
                        }
                        core.score += 100;
                        core.newAstHit0 = true;
                    }
                    else {
                        core.newAstHit0 = false;
                    }
                    if (other.name === "newAsteroid1") {
                        if (core.SECheck == true) {
                            createjs.Sound.play("objHit");
                        }
                        core.score += 100;
                        core.newAstHit1 = true;
                    }
                    else {
                        core.newAstHit1 = false;
                    }
                    //if bullet collides with enemyShip
                    if (other.name === "enemyShip") {
                        if (core.SECheck == true) {
                            createjs.Sound.play("objHit");
                        }
                        core.EnemyHit = true;
                        core.score += 150;
                    }
                    else {
                        core.EnemyHit = false;
                    }
                }
            }
            else {
                other.isColliding = false;
            }
        };
        return Collision;
    }());
    managers.Collision = Collision;
})(managers || (managers = {}));
//# sourceMappingURL=collision.js.map