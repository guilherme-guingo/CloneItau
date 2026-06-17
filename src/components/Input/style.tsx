import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
    width: '100%',
  },
  label: {
    fontSize: 18,
    color: '#FFFFFF',
    marginBottom: 20,
    textAlign: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 48,
  },
  inputContainerDefault: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#DDDDDD',
    borderRadius: 8,
    paddingHorizontal: 12,
  },
  inputContainerUnderline: {
    backgroundColor: 'transparent',
    borderBottomWidth: 1,
    borderBottomColor: '#FFFFFF',
    paddingHorizontal: 0,
    paddingBottom: 8,
  },
  inputError: {
    borderColor: '#C8102E',
  },
  input: {
    flex: 1,
    fontSize: 24,
    height: '100%',
  },
  inputDefault: {
    color: '#333333',
  },
  inputUnderline: {
    color: '#FFFFFF',
    marginLeft: 12,
    letterSpacing: 4,
  },
  errorText: {
    color: '#C8102E',
    fontSize: 12,
    marginTop: 4,
  },
  leftIcon: {
    marginRight: 8,
  }
});