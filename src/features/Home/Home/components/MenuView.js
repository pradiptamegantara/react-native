import {FlatList} from "react-native";
import MenuItem from "./MenuItem";

const MenuView = () => {
    const menus = [
        {id: 1, menu: 'Menu 1',icon:'film'},
        {id: 2, menu: 'Menu 2',icon:'music'},
        {id: 3, menu: 'Menu 3',icon:'print'},
        {id: 4, menu: 'Menu 4',icon:'pencil'},
        {id: 5, menu: 'Menu 5',icon:'star'},
        {id: 6, menu: 'Menu 6',icon:'leaf'},
        {id: 7, menu: 'Menu 7',icon:'music'},
        {id: 8, menu: 'Menu 8',icon:'music'},
        {id: 9, menu: 'Menu 9',icon:'music'},
        {id: 10, menu: 'Menu 10',icon:'music'},
        
    ];
    const renderItem = ({item}) => {
        return <MenuItem product={item}/>
    }

    const renderMenuViews = () => {
        const menuViews = [];
        for (let i = 0; i < menus.length / 3; i++) {
            const startIndex = (i * 3);
            const endIndex = (i * 3) + 3;
            const dataMenu = menus.slice(startIndex, endIndex);
            let contentStyle = {flex: 1, justifyContent: 'space-between'};
            if (dataMenu.length % 3 !== 0) {
                contentStyle = {flex: 1}
            }
            const m = (<FlatList key={i}
                                 horizontal data={dataMenu}
                                 renderItem={renderItem} keyExtractor={item => item.id}
                                 contentContainerStyle={contentStyle}/>
            )
            menuViews.push(m)
        }
        return menuViews;
    }
    return (
        <>
            {renderMenuViews()}
        </>
    )
}

export default MenuView;