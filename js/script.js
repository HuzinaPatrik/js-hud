const componentDetails = {
    ['hp']: ["hp"],
    ['armor']: ["armor"],
    ['food']: ["food"],
    ['water']: ["water"],
    ['stamina']: ["stamina"],
}

window.addEventListener('load',
    (event) => {
        for (componentName in componentDetails) {
            fullfillComponent(componentName);
        }

        console.log('HUD, Created by: Huzina Patrik (https://github.com/HuzinaPatrik)')
    }
);

let oldVal = [];

function animateHudComponent(componentName = 'Unknown', value = 0) {
    if (componentDetails[componentName]) {
        if (!oldVal[componentName])
            oldVal[componentName] = 0;


        if (oldVal[componentName] != value) {
            const leftDivName = componentDetails[componentName][0] + 'BGLeftFullfill'
            const bottomDivName = componentDetails[componentName][0] + 'BGBottomFullfill'
            const rightDivName = componentDetails[componentName][0] + 'BGRightFullfill'
            const topDivName = componentDetails[componentName][0] + 'BGTopFullfill'

            if (oldVal[componentName] > value) { //Csökkenés 
                if (value < 25) {
                    if (oldVal[componentName] <= 25) {
                        const percentage = (value / 25)
                
                        document.getElementById(leftDivName).style.height = (32 * percentage) + 'px'
                    } else if (oldVal[componentName] <= 50) {
                        document.getElementById(bottomDivName).style.width = '0px'

                        setTimeout(
                            function(leftDivName) {
                                const percentage = (value / 25)
    
                                document.getElementById(leftDivName).style.height = (32 * percentage) + 'px'
                            }, 450, leftDivName
                        )
                    } else if (oldVal[componentName] <= 75) {
                        document.getElementById(rightDivName).style.top = '33px'
                        document.getElementById(rightDivName).style.height = '0px'

                        setTimeout(
                            function(bottomDivName, leftDivName) {
                                document.getElementById(bottomDivName).style.width = '0px'

                                setTimeout(
                                    function(leftDivName) {
                                        const percentage = (value / 25)
            
                                        document.getElementById(leftDivName).style.height = (32 * percentage) + 'px'
                                    }, 450, leftDivName
                                )
                            }, 450, bottomDivName, leftDivName
                        )
                    } else if (oldVal[componentName] <= 100) {
                        document.getElementById(topDivName).style.left = '33px'
                        document.getElementById(topDivName).style.width = '0px'

                        setTimeout(
                            function(rightDivName, bottomDivName, leftDivName) {
                                document.getElementById(rightDivName).style.top = '33px'
                                document.getElementById(rightDivName).style.height = '0px'

                                setTimeout(
                                    function(bottomDivName, leftDivName) {
                                        document.getElementById(bottomDivName).style.width = '0px'

                                        setTimeout(
                                            function(leftDivName) {
                                                const percentage = (value / 25)
                    
                                                document.getElementById(leftDivName).style.height = (32 * percentage) + 'px'
                                            }, 450, leftDivName
                                        )
                                    }, 450, bottomDivName, leftDivName
                                )
                            }, 450, rightDivName, bottomDivName, leftDivName
                        )
                    }
                } else if (value < 50) {
                    if (oldVal[componentName] <= 50) {
                        const percentage = ((value - 25) / 25)
        
                        document.getElementById(bottomDivName).style.width = (29 * percentage) + 'px'
                    } else if (oldVal[componentName] <= 75) {
                        document.getElementById(rightDivName).style.top = '33px'
                        document.getElementById(rightDivName).style.height = '0px'

                        setTimeout(
                            function(bottomDivName) {
                                const percentage = ((value - 25) / 25)
    
                                document.getElementById(bottomDivName).style.width = (29 * percentage) + 'px'
                            }, 450, bottomDivName
                        )
                    } else if (oldVal[componentName] <= 100) {
                        document.getElementById(topDivName).style.left = '33px'
                        document.getElementById(topDivName).style.width = '0px'

                        setTimeout(
                            function(rightDivName, bottomDivName) {
                                document.getElementById(rightDivName).style.top = '33px'
                                document.getElementById(rightDivName).style.height = '0px'

                                setTimeout(
                                    function(bottomDivName) {
                                        const percentage = ((value - 25) / 25)
            
                                        document.getElementById(bottomDivName).style.width = (29 * percentage) + 'px'
                                    }, 450, bottomDivName
                                )
                            }, 450, rightDivName, bottomDivName
                        )
                    }
                } else if (value < 75) {
                    if (oldVal[componentName] <= 75) {
                        const percentage = ((value - 50) / 25)

                        document.getElementById(rightDivName).style.top = (4 + (29 * (1 - percentage))) + 'px'
                        document.getElementById(rightDivName).style.height = (29 * percentage) + 'px'
                    } else if (oldVal[componentName] <= 100) {
                        document.getElementById(topDivName).style.left = '33px'
                        document.getElementById(topDivName).style.width = '0px'

                        setTimeout(
                            function(rightDivName) {
                                const percentage = ((value - 50) / 25)

                                document.getElementById(rightDivName).style.top = (4 + (29 * (1 - percentage))) + 'px'
                                document.getElementById(rightDivName).style.height = (29 * percentage) + 'px'
                            }, 450, rightDivName
                        )
                    }
                } else if (value <= 100) {
                    const percentage = ((value - 75) / 25)

                    document.getElementById(topDivName).style.left = (7 + (26 * (1 - percentage))) + 'px'
                    document.getElementById(topDivName).style.width = (26 * percentage) + 'px'
                }
            } else if (oldVal[componentName] < value) { //Növekvés
                if (value < 25) {
                    const percentage = (value / 25)
                
                    document.getElementById(leftDivName).style.height = (32 * percentage) + 'px';
                } else if (value < 50) {
                    if (oldVal[componentName] < 25) {
                        document.getElementById(leftDivName).style.height = '32px';

                        setTimeout(
                            function(bottomDivName) {
                                const percentage = ((value - 25) / 25)

                                document.getElementById(bottomDivName).style.width = (29 * percentage) + 'px'
                            }, 450, bottomDivName
                        )
                    } else if (oldVal[componentName] < 50) {
                        const percentage = ((value - 25) / 25)

                        document.getElementById(bottomDivName).style.width = (29 * percentage) + 'px'
                    }
                } else if (value < 75) {
                    if (oldVal[componentName] < 25) {
                        document.getElementById(leftDivName).style.height = '32px';

                        setTimeout(
                            function(bottomDivName, rightDivName) {
                                document.getElementById(bottomDivName).style.width = '29px'

                                setTimeout(
                                    function(rightDivName) {
                                        const percentage = ((value - 50) / 25)
        
                                        document.getElementById(rightDivName).style.top = (4 + (29 * (1 - percentage))) + 'px'
                                        document.getElementById(rightDivName).style.height = (29 * percentage) + 'px'
                                    }, 450, rightDivName
                                )
                            }, 450, bottomDivName, rightDivName
                        )
                    } else if (oldVal[componentName] < 50) {
                        document.getElementById(bottomDivName).style.width = '29px';

                        setTimeout(
                            function(rightDivName) {
                                const percentage = ((value - 50) / 25)

                                document.getElementById(rightDivName).style.top = (4 + (29 * (1 - percentage))) + 'px'
                                document.getElementById(rightDivName).style.height = (29 * percentage) + 'px'
                            }, 450, rightDivName
                        )
                    } else if (oldVal[componentName] < 75) {
                        const percentage = ((value - 50) / 25)

                        document.getElementById(rightDivName).style.top = (4 + (29 * (1 - percentage))) + 'px'
                        document.getElementById(rightDivName).style.height = (29 * percentage) + 'px'
                    }
                } else if (value <= 100) {
                    if (oldVal[componentName] < 25) {
                        document.getElementById(leftDivName).style.height = '32px';

                        setTimeout(
                            function(bottomDivName, rightDivName, topDivName) {
                                document.getElementById(bottomDivName).style.width = '29px'

                                setTimeout(
                                    function(rightDivName, topDivName) {
                                        document.getElementById(rightDivName).style.top = '4px'
                                        document.getElementById(rightDivName).style.height = '29px'

                                        setTimeout(
                                            function(topDivName) {
                                                const percentage = ((value - 75) / 25)

                                                document.getElementById(topDivName).style.left = (7 + (26 * (1 - percentage))) + 'px'
                                                document.getElementById(topDivName).style.width = (26 * percentage) + 'px'
                                            }, 450, topDivName
                                        )
                                    }, 450, rightDivName, topDivName
                                )
                            }, 450, bottomDivName, rightDivName, topDivName
                        )
                    } else if (oldVal[componentName] < 50) {
                        document.getElementById(bottomDivName).style.width = '29px'

                        setTimeout(
                            function(rightDivName, topDivName) {
                                document.getElementById(rightDivName).style.top = '4px'
                                document.getElementById(rightDivName).style.height = '29px'

                                setTimeout(
                                    function(topDivName) {
                                        const percentage = ((value - 75) / 25)

                                        document.getElementById(topDivName).style.left = (7 + (26 * (1 - percentage))) + 'px'
                                        document.getElementById(topDivName).style.width = (26 * percentage) + 'px'
                                    }, 450, topDivName
                                )
                            }, 450, rightDivName, topDivName
                        )
                    } else if (oldVal[componentName] < 75) {
                        document.getElementById(rightDivName).style.top = '4px'
                        document.getElementById(rightDivName).style.height = '29px'

                        setTimeout(
                            function(topDivName) {
                                const percentage = ((value - 75) / 25)

                                document.getElementById(topDivName).style.left = (7 + (26 * (1 - percentage))) + 'px'
                                document.getElementById(topDivName).style.width = (26 * percentage) + 'px'
                            }, 450, topDivName
                        )
                    } else if (oldVal[componentName] <= 100) { 
                        const percentage = ((value - 75) / 25)

                        document.getElementById(topDivName).style.left = (7 + (26 * (1 - percentage))) + 'px'
                        document.getElementById(topDivName).style.width = (26 * percentage) + 'px'
                    }
                }
            }

            oldVal[componentName] = value; 

            return true;
        }
    }

    return false;
}

function fullfillComponent(componentName) {
    if (componentDetails[componentName]) {
        if (!oldVal[componentName])
            oldVal[componentName] = 0;

        const leftDivName = componentDetails[componentName][0] + 'BGLeftFullfill'
        const bottomDivName = componentDetails[componentName][0] + 'BGBottomFullfill'
        const rightDivName = componentDetails[componentName][0] + 'BGRightFullfill'
        const topDivName = componentDetails[componentName][0] + 'BGTopFullfill'
        
        document.getElementById(leftDivName).style.height = '32px';

        setTimeout(
            function(bottomDivName, rightDivName, topDivName) {
                document.getElementById(bottomDivName).style.width = '29px'

                setTimeout(
                    function(rightDivName, topDivName) {
                        document.getElementById(rightDivName).style.top = '4px'
                        document.getElementById(rightDivName).style.height = '29px'

                        setTimeout(
                            function(topDivName) {
                                document.getElementById(topDivName).style.left = '7px'
                                document.getElementById(topDivName).style.width = '26px'
                            }, 450, topDivName
                        )
                    }, 450, rightDivName, topDivName
                )
            }, 450, bottomDivName, rightDivName, topDivName
        )

        oldVal[componentName] = 100;
    }
}