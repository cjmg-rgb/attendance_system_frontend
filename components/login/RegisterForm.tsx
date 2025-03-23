import { View, Text, TouchableWithoutFeedback, Keyboard, Platform } from 'react-native'
import { TextInput, Button } from 'react-native-paper'
import React, { useState } from 'react'
import DateTimePicker from "@react-native-community/datetimepicker";
import { useRegister } from 'hooks/auth/useRegister';

const RegisterForm = () => {

    const [username, setUsername] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [churchId, setChurchId] = useState<string>("");
    const [sabbath, setSabbath] = useState<Date>(new Date());

    const [openDate, setOpenDate] = useState(false);

    const { mutate: register } = useRegister();

    const onDateChange = (event: any, selectedDate?: Date) => {
        if(selectedDate) {
            setSabbath(selectedDate);
        }
    };
    const onRegister = () => {
        register({ username, email, password, churchId, sabbath });
    }

    const sabbathInput = `SABBATH: ${sabbath ? sabbath.toLocaleDateString() : ""}`

    return (
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss();
            setOpenDate(false);
        }}>
            <View className='p-4 flex-1 justify-center'>
                <View className='flex gap-4'>
                    <TextInput 
                        label="Username"
                        value={username}
                        onChangeText={val => setUsername(val)}
                        mode='outlined'
                    />
                    <TextInput 
                        label="Email"
                        value={email}
                        onChangeText={val => setEmail(val)}
                        mode='outlined'
                    />
                    <TextInput 
                        label="ChurchID"
                        value={churchId}
                        onChangeText={val => setChurchId(val)}
                        mode='outlined'
                    />
                    <View>
                        <Button style={{ 
                            borderRadius: 10, 
                            marginTop: 5, 
                        }} mode='outlined' onPress={() => setOpenDate(true)}>
                            <Text className='font-bold text-gray-500'>{ sabbathInput }</Text>
                        </Button>
                        { openDate && <DateTimePicker
                            value={sabbath}
                            mode="date"
                            display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                            onChange={onDateChange}
                        /> }
                    </View>
                    <TextInput 
                        label="Password"
                        value={password}
                        onChangeText={val => setPassword(val)}
                        mode='outlined'
                    />
                    <Button mode='contained' onPress={onRegister}>
                        <Text>Register</Text>
                    </Button>
                </View> 
            </View>
        </TouchableWithoutFeedback>
    )
}

export default RegisterForm