import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    Dimensions,
    Animated,
} from 'react-native';
import { fonts } from '../../utils/fonts';
import LottieView from 'lottie-react-native';
import { MyButton } from '../../components';
import { colors } from '../../utils/colors';
import { WebView } from 'react-native-webview';

export default function Download({ navigation, route }) {

    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
    const txt = new Animated.Value(-windowWidth);

    Animated.timing(txt, {
        toValue: 10,
        duration: 800,
        useNativeDriver: false,
    }).start();

    setTimeout(() => {
        navigation.goBack();
    }, 2000)

    const messege = route.params.messege;
    const kode = route.params.kode;


    return (
        <SafeAreaView
            style={{
                flex: 1,
            }}>
            <View
                style={{
                    flex: 1,
                    justifyContent: 'flex-end',
                    alignItems: 'center',
                    paddingBottom: 100,
                }}>
                <LottieView
                    source={require('../../assets/success.json')}
                    autoPlay
                    loop={false}
                />

                <WebView style={{
                    height: 1
                }} source={{ uri: 'https://scaniadigital.zavalabs.com/pdf?kode=' + kode }} />
            </View>
            {/* <View
                style={{
                    //   flex: 1,
                    padding: 10,
                }}>
                <MyButton
                    title="KEMBALI"
                    warna={colors.primary}
                    Icons="arrow-back"
                    onPress={() => navigation.goBack()}
                />
            </View> */}

        </SafeAreaView>



    )
}
const styles = StyleSheet.create({})