var React = require('react-native');

var {
	TouchableWithoutFeedback,
	Dimensions,
	StyleSheet,
	Image,
	View,
	Text
} = React;

var Icon = require('react-native-vector-icons/MaterialIcons');

var {height, width} = Dimensions.get('window');

module.exports = React.createClass({

	render: function(){
		return(
			<View style={styles.container}>
				<TouchableWithoutFeedback  onPress={ this.loadData }>
      			<View style={styles.reloadScene}>
      				<View style={styles.centerWeighted}>
      					<Icon name="wifi" size={100} color="#cccccc" style={styles.reloadArrow} />
      					<Text style={styles.errorMessageReload}>Oops! Something went wrong.</Text>
      					<Text>Tap to reload.</Text>
      				</View>
				</View>
				</TouchableWithoutFeedback>
			</View>
		);
	},
	loadData: function(){
		this.props.loadData();
	}
});

const styles = StyleSheet.create({
	container: {
		flex: 1,
		height: height-80
	},
	reloadScene:{
		flex: 1,
		backgroundColor: '#ffffff',
	},
	centerWeighted: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'		
	},
	reloadArrow: {
		alignSelf: 'center',
		margin: 10,
	},
	errorMessageReload: {
		alignSelf: 'center',
		fontSize: 15
	},	
})