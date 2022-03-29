import type { NextPage } from "next";
import Image from "next/image";
import * as C from "./styles";
import { InfoItem } from "../../components/InfoItem";
import { Button } from "../../components/Button";

import logoImage from "./../../../public/assets/logo.png";
import RestartIcon from "./../../../public/assets/svgs/restart.svg";

import items from "../../data/items";
import { useEffect, useState } from "react";
import { GridItemType } from "../../types/GridItemType";
import { GridItem } from "../../components/GridItem";
import { formatTimeElapsed } from "./../../helpers/formatTimeElapsed";

const Home: NextPage = () => {
    const [playing, setPlaying] = useState(false);
    const [timeElapse, setTimeElapsed] = useState<number>(0);
    const [moveCount, setMoveCount] = useState<number>(0);
    const [shownCount, setShownCount] = useState<number>(0);
    const [gridItems, setGridItems] = useState<GridItemType[]>([]);

    let indexShow1 = 0;
    let indexShow2 = 0;

    const handleResetAndCreateGrid = () => {
        // passo 1 - resetar o jogo
        setTimeElapsed(0);
        setMoveCount(0);
        setShownCount(0);

        // passo 2 - criar o grid
        let tmpGrid: GridItemType[] = [];
        for (let i = 0; i < items.length * 2; i++) {
            tmpGrid.push({
                item: null,
                shown: false,
                permanentShown: false,
            });
        }
        // passo 3 - preencher o grid
        for (let w = 0; w < 2; w++) {
            for (let i = 0; i < items.length; i++) {
                let pos = -1;

                while (tmpGrid[pos]?.item !== null) {
                    pos = Math.floor(Math.random() * (items.length * 2));
                }

                tmpGrid[pos].item = i;
            }
        }

        setGridItems(tmpGrid);

        // começar o jogo
        setPlaying(true);
    };

    useEffect(() => {
        const timer = setInterval(() => {
            if (playing) {
                setTimeElapsed(timeElapse + 1);
            }
        }, 1000);

        return () => clearInterval(timer);
    }, [playing, timeElapse]);

    useEffect(() => {
        handleResetAndCreateGrid();
    }, []);

    // verifica se os abertos são iguais

    useEffect(() => {
        const checkMove = () => {
            if (shownCount !== 2) return false;

            let opened = gridItems.filter((item) => item.shown);

            if (opened.length !== 2) return false;

            let tmpGrid = [...gridItems];

            // se forem iguais
            if (opened[0].item === opened[1].item) {
                for (let i in tmpGrid) {
                    if (tmpGrid[i].shown) {
                        tmpGrid[i].permanentShown = true;
                    }
                }
            }

            setMoveCount((moveCount) => moveCount + 1);

            setTimeout(() => {
                tmpGrid.map((item) => (item.shown = false));
                setGridItems(tmpGrid);
                setShownCount(0);

                let terminated = gridItems.filter(
                    (item) => item.permanentShown
                );

                if (terminated.length === gridItems.length) {
                    setPlaying(false);
                }
            }, 1000);
        };

        checkMove();
    }, [gridItems, shownCount]);

    const handleItemClick = (index: number) => {
        if (!playing) return false;
        if (index === null) return false;
        if (shownCount >= 2) return false;

        let tmpGrid = [...gridItems];

        if (tmpGrid[index].permanentShown) return false;
        if (tmpGrid[index].shown) return false;

        tmpGrid[index].shown = true;

        setShownCount(shownCount + 1);

        setGridItems(tmpGrid);
    };

    return (
        <C.Container>
            <C.Info>
                <C.LogoLink href="">
                    <Image src={logoImage} width={250} height={50} alt="" />
                </C.LogoLink>
                <C.InfoArea>
                    <InfoItem
                        label="Tempo"
                        value={formatTimeElapsed(timeElapse)}
                    />
                    <InfoItem label="Movimentos" value={moveCount.toString()} />
                </C.InfoArea>
                <Button
                    icon={RestartIcon}
                    label="Reiniciar"
                    onClick={handleResetAndCreateGrid}
                />
            </C.Info>
            <C.GridArea>
                <C.Grid>
                    {gridItems.map((item, index) => (
                        <GridItem
                            key={index}
                            item={item}
                            onClick={() => handleItemClick(index)}
                        />
                    ))}
                </C.Grid>
            </C.GridArea>
        </C.Container>
    );
};

export default Home;
