import React, { Component } from "react";
import {
  Input,
  FormControl,
  Stack,
  IconButton,
  Icon,
  Center,
  Button,
  Text,
} from "native-base";
import { Ionicons } from "@expo/vector-icons";

class FormRegister extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      name: "",
      password: "",
      confirmPassword: "",
      showPassword: false,
    };
  }
  onLogin() {
    this.props.navigation.replace("Login");
  }

  onRegister() {
    this.props.navigation.replace("OnBoarding");
  }
  toggleShowPassword() {
    this.setState((prevState) => ({ showPassword: !prevState.showPassword }));
  }
  toggleShowConfirmPassword() {
    this.setState((prevState) => ({
      showConfirmPassword: !prevState.showConfirmPassword,
    }));
  }
  render() {
    return (
      <Center w="100%">
        <FormControl>
          <Stack space={5}>
            <Stack space={2}>
              <FormControl.Label>Name</FormControl.Label>
              <Input
                variant={"outline"}
                p={3}
                value={this.state.name}
                onChangeText={(name) => this.setState({ name })}
                placeholder={"Enter your full name"}
              />
            </Stack>
            <Stack space={2}>
              <FormControl.Label>Email</FormControl.Label>
              <Input
                variant={"outline"}
                p={3}
                value={this.state.email}
                onChangeText={(email) => this.setState({ email })}
                placeholder={"Enter your email address"}
              />
            </Stack>
            <Stack space={2}>
              <FormControl.Label>Password</FormControl.Label>
              <Input
                variant={"outline"}
                p={3}
                value={this.state.password}
                onChangeText={(password) => this.setState({ password })}
                placeholder={"Enter the password you want to use"}
                secureTextEntry={!this.state.showPassword}
                InputRightElement={
                  <IconButton
                    onPress={() => this.toggleShowPassword()}
                    icon={
                      <Icon
                        as={Ionicons}
                        name={this.state.showPassword ? "eye" : "eye-off"}
                        size={5}
                      />
                    }
                    variant="unstyled"
                  />
                }
              />
            </Stack>
            <Stack space={2}>
              <FormControl.Label>Confirm Password</FormControl.Label>
              <Input
                variant={"outline"}
                p={3}
                value={this.state.confirmPassword}
                onChangeText={(confirmPassword) =>
                  this.setState({ confirmPassword })
                }
                placeholder={"Re-enter your chosen password"}
                secureTextEntry={!this.state.showConfirmPassword}
                InputRightElement={
                  <IconButton
                    onPress={() => this.toggleShowConfirmPassword()}
                    icon={
                      <Icon
                        as={Ionicons}
                        name={
                          this.state.showConfirmPassword ? "eye" : "eye-off"
                        }
                        size={5}
                      />
                    }
                    variant="unstyled"
                  />
                }
              />
            </Stack>
          </Stack>
        </FormControl>
        <Button
          my={5}
          variant={"solid"}
          borderRadius={10}
          w={"100%"}
          h={12}
          onPress={this.onRegister.bind(this)}
        >
          <Text color={"white"} fontSize={"md"}>
            Register
          </Text>
        </Button>
      </Center>
    );
  }
}

export default FormRegister;
