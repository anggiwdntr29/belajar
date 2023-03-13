import React, { Component } from "react";
import {
  Input,
  FormControl,
  Stack,
  Checkbox,
  Text,
  Button,
  Center,
  Icon,
  IconButton,
} from "native-base";
import { Ionicons } from "@expo/vector-icons";

class FormLogin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      showPassword: false,
    };
  }

  onLogin() {
    const { email, password } = this.state;

    console.log(`${email} + ${password}`);
    this.props.navigation.replace("Register");
  }

  onRegister() {
    this.props?.navigation.replace("Register");
  }

  toggleShowPassword() {
    this.setState((prevState) => ({ showPassword: !prevState.showPassword }));
  }

  render() {
    return (
      <Center w="100%">
        <FormControl>
          <Stack space={5}>
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
                placeholder={"Enter your password"}
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
          </Stack>
          <Button variant={"link"} justifyContent={"flex-end"}>
            <Text fontSize={"xs"} fontWeight={"light"} color={"#a4a4a4"}>
              Forgot Password?
            </Text>
          </Button>
        </FormControl>
        <Button
          my={5}
          variant={"solid"}
          borderRadius={10}
          w={"100%"}
          h={12}
          onPress={this.onLogin.bind(this)}
        >
          <Text color={"white"} fontSize={"md"}>
            Login
          </Text>
        </Button>
      </Center>
    );
  }
}

export default FormLogin;
