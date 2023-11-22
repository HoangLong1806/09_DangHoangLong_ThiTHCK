import { useEffect, useState } from 'react';
import { FlatList, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { connect } from 'react-redux';
import { addJob, deleteJob, editJob, icreJob } from './redux/actions';

const Screen1 = ({ todos, addJob, deleteJob, editJob }) => {
    const [data, setData] = useState([]);
    const [txtJob, setJob] = useState('');
    useEffect(() => {
        fetchApi();
    }, []);
    const fetchApi = () => {
        fetch(
            'https://655d4ae59f1e1093c5992cee.mockapi.io/thi/'
        ).then((response) => response.json())
            .then((json) => {
                setData(json);
            });
    }
    console.log("data" + data);

    const fnAddJob = () => {
        addJob(txtJob);
        setJob('');
    };
    const fnIncreJob = () => {
        icreJob(txtJob);
        setJob('');
    };


    console.log("todos" + todos);
    return (
        <View style={styles.container}>
            

            <TextInput style={{ width: 200, height: 50 }} onChangeText={setJob} />
            <Pressable
                onPress={fnAddJob}
                style={{ backgroundColor: 'White', width: 150, height: 50, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Cong</Text>
            </Pressable>
            {/* <Pressable
                onPress={fnIncreJob}
                style={{ backgroundColor: 'blue', width: 150, height: 50, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Tru</Text>
            </Pressable> */}
            <View>
                <FlatList
                    data={data.job}
                    renderItem={({ item }) => (
                        <View>
                            <Text>{item.name}</Text>
                        </View>
                    )}
                />
            </View>
            {todos.map((item) => {
                return (
                    <View style={{width:200, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }} key={item.id}>
                        <Text>{item.id}</Text>
                        <Text>{item.txtJob}</Text>
                        <Pressable
                            style={{backgroundColor:'red'}}
                            onPress={() => {
                                deleteJob(item.id)
                            }} >
                            <Text>Xoa</Text>
                        </Pressable>
                    </View>
                )
            })}
            {/* <Pressable onPress={()=>{
                editJob(1,'da update')
            }}>
                <Text>Update</Text>
            </Pressable> */}
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

const mapStateToProps = (state) => ({
    todos: state.todos,
});

const mapDispatchToProps = {
    addJob,
    deleteJob,
    editJob,
};

export default connect(mapStateToProps, mapDispatchToProps)(Screen1);