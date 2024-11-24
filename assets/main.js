document.addEventListener("DOMC
    const getSignalButton = document.getElementById("getSignalButton");
    const plusButton = document.querySelector('.plus-button');
    const minusButton = document.querySelector('.minus-button');
    
    const totalTiles = 25; // Всего плиток
    let tilesToOpen = 0; // Колич
        tile.classL
        Array.from(tileGrid.children).forEach(tile => {
            tile.classList.remove("fade-out");
        });

        Array.from(starsContainer.children).forEach(star => {
            star.style.opacity = 0;
            star.classList.remove("show-star");
        });
    }

    // Функция для блокировки кнопок
    function toggleButtonState(isDisabled) {
        getSignalButton.disabled = isDisabled;
        plusButton.disabled = isDisabled;
        minusButton.disabled = isDisabled;
    }

            case 5:
                return 4;
            case 7:
                return 3;
            default:
                return 0;
        }
    }


        }

        const openedTilesThisRound = Array.from(openedTiles);
        console.log("Открытые плитки:", openedTilesThisRound);

        openedTilesThisRound.forEach((tileIndex, i) => {
            setTimeout(() => {
                const tile = tileGrid.children[tileIndex];
                tile.classList.add("fade-out");

                const star = starsContainer.children[tileIndex];
                star.style.opacity = 1;
                star.classList.add("show-star");


    });

    // Обработка нажатия на кнопку plus
    plusButton.addEventListener("click", () => {
        const trapNumber = document.querySelector('.trap-number');
        let currentValue = parseInt(trapNumber.textContent);

        if (currentValue === 1) {
            trapNumber.textContent = 3;
            numberOfTraps = 3;
        } else if (currentValue === 3) {
            trapNumber.textContent = 5;
            numberOfTraps = 5;
        } else if (currentValue === 5) {
            trapNumber.textContent = 7;
            numberOfTraps = 7;
        }
    });

