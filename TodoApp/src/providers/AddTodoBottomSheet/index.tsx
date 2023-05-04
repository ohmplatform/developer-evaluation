import { BottomSheetModal } from "@gorhom/bottom-sheet";
import React, { useRef } from "react";
import useBottomSheetActions from "../../hooks/useBottomSheetActions";
import BottomSheet from "../../components/BottomSheet";
import AddTodoView from "./views/AddTodo";
import AddTodoSuccess from "./views/AddTodoSuccess";

type AddTodoProviderContextType = {
    openBottomSheet: () => void,
    closeBottomSheet: () => void,
}

export type AddTodoBottomSheetViews = 'AddTodo' | 'TodoAddedSuccess'

const views: { [key in AddTodoBottomSheetViews]: any } = {
    "AddTodo": AddTodoView,
    "TodoAddedSuccess": AddTodoSuccess,
}

export const AddTodoBottomSheetContext = React.createContext<AddTodoProviderContextType>({} as AddTodoProviderContextType);

const AddTodoBottomSheetProvider = ({ children }: React.PropsWithChildren) => {

    const sheetRef = useRef<BottomSheetModal>();

    const { openBottomSheet, closeBottomSheet } = useBottomSheetActions(sheetRef);


    return (
        <AddTodoBottomSheetContext.Provider value={{ openBottomSheet, closeBottomSheet }} >
            {children}
            <BottomSheet
                sheetRef={sheetRef}
                views={views}
                initial={"AddTodo"}
            />
        </AddTodoBottomSheetContext.Provider>
    )
}

export default AddTodoBottomSheetProvider