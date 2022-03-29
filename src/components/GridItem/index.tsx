import Image from "next/image";
import { GridItemType } from "../../types/GridItemType";
import * as C from "./styled";

import ItemDefault from "../../../public/assets/svgs/b7.svg";
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
            {item.permanentShown === false && item.shown === false && (
                <Image
                    src={ItemDefault}
                    alt="Clique para escolher essa opção"
                />
            )}
            {(item.permanentShown || item.shown) && item.item !== null && (
                <Image
                    src={items[item.item].icon}
                    alt={items[item.item].name}
                />
            )}
        </C.Container>
    );
};
