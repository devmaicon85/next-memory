import Image from "next/image";
import { GridItemType } from "../../types/GridItemType";
import * as C from "./styled";

import ItemDefault from "../../../public/assets/memory-card.png";
import items from "../../data/items";

type Props = {
    item: GridItemType;
    onClick: () => void;
};
export const GridItem = ({ item, onClick }: Props) => {
    return (
        <C.Container
            onClick={onClick}
            showBackground={item.permanentShown || item.shown}
        >
            <C.Flipper>
                {item.permanentShown === false && item.shown === false && (
                    <Image
                        src={ItemDefault}
                        alt="Clique para escolher essa opção"
                    />
                )}

                {(item.permanentShown || item.shown) && item.item !== null && (
                    <>{items[item.item].icon}</>
                )}
            </C.Flipper>
        </C.Container>
    );
};
