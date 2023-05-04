import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useCallback, useMemo } from 'react'
import { useTheme } from '@react-navigation/native';
import { CUSTOM_FONT_FAMILY, IAppTheme } from '../../../../constants/theme';
import { doc } from 'firebase/firestore';
import { FIRESTORE_DB } from '../../../../firebase/config';
import { fontResponsive, wp } from '../../../../utils/responsive';
import { APP_IMAGES } from '../../../../assets/images';
import LinearGradient from 'react-native-linear-gradient';

interface Props {
    id: string;
    done: boolean;
    title: string;
    toggleTodoDone: (ref: any, done: boolean) => Promise<void>;
    deleteTodo: (ref: any) => Promise<void>;
}

const TodoItemListView = ({ title, id, done, toggleTodoDone, deleteTodo }: Props) => {
    
    const { colors }: IAppTheme = useTheme();

    const docRef = useMemo(() => doc(FIRESTORE_DB, `todos/${id}`), [id]);

    const toggleDone = useCallback(() => {
        toggleTodoDone(docRef, !done)
    }, [docRef, done])

    const onDeleteTodo = useCallback(() => {
        deleteTodo(docRef);
    }, [docRef]);

    const borderColor = useMemo(()=>{
        if(done){
            return (["#D23B8D", "#5C28DE"])
        }
        else {
            return (["#808080", "#808080"])               
        }
    },[done])

    return (
        <LinearGradient
            colors={borderColor}
            style={styles.gradient}
            start={{ x: 1, y: 0 }}
            end={{ x: 0, y: 1 }}
        >
            <View style={[styles.mainContainer, {backgroundColor: colors.background}]}>
                <TouchableOpacity onPress={toggleDone} style={styles.todo}>
                    {
                        done ? <Image source={APP_IMAGES.doneIcon} style={styles.doneContainer} /> :
                            <View style={[styles.pendingContainer]} />
                    }
                    <Text style={[styles.titleText, { color: colors.text , fontFamily: CUSTOM_FONT_FAMILY.Ginto?.Medium}]}>{title}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={onDeleteTodo}>
                    <Image source={APP_IMAGES.deleteIcon} style={styles.doneContainer} />
                </TouchableOpacity>
            </View>
        </LinearGradient>
    )
}

export default TodoItemListView

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        borderWidth: StyleSheet.hairlineWidth,
        padding: wp(12),
        borderColor: 'gray',
        borderRadius: wp(24),
        flexDirection: 'row',
    },
    titleText: {
        fontSize: fontResponsive(15),
        marginLeft: wp(12),
    },
    todo: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    doneContainer: {
        width: wp(25),
        height: wp(25),
        resizeMode: 'contain',
    },
    pendingContainer: {
        width: wp(25),
        height: wp(25),
        borderRadius: wp(25),
        borderWidth: wp(1.6),
        borderColor: 'gray',
    },
    gradient: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: wp(10),
        borderRadius: wp(24),
        padding: wp(4)
        
    }
})