;(function(w) {
    w.Twister = function(params) {
        var twisterInterval,
            roundTime = params && params.roundTime || 3000,
            isGameRunning = false,
            actions = ['left hand', 'right hand', 'left leg', 'right leg'],
            colors = ['red', 'blue', 'yellow', 'green'],
            getRandomAction = function() {
                return {
                    action: actions[Math.floor(Math.random() * actions.length)],
                    color: colors[Math.floor(Math.random() * colors.length)]
                }
            };

        return TwisterGame = {
            run: function() {
                if (!isGameRunning) {
                    console.info('Game started!');
                    isGameRunning = true;
                    twisterInterval = setInterval(function() {
                        var action = getRandomAction();
                        console.log('Action: ' + action.action);
                        console.log('Color: ' + action.color);
                    }, roundTime);
                } else {
                    console.info('Game is already running!');
                }
            },
            stop: function() {
                clearInterval(twisterInterval);
                isGameRunning = false;
                console.info('Game stopped!');
            }
        }
    }
})(window);