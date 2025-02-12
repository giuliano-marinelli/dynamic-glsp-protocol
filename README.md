# Dynamic GLSP - Protocol [![npm version](https://badge.fury.io/js/@dynamic-glsp%2Fprotocol.svg)](https://badge.fury.io/js/@dynamic-glsp%2Fprotocol)

_On this package we had the **protocol** code._

## Installation

```bash
$ npm install @eclipse-glsp/protocol @eclipse-glsp/server @dynamic-glsp/protocol
```

## Usage

This package is intended to be used by the server and client packages of Dynamic GLSP. It defines the common interfaces used by both packages. It can be extended to add new interfaces or to override existing ones.

## Overview

Dynamic GLSP is an instance of [Graphical Language Server Platform (GLSP)](https://github.com/eclipse-glsp/glsp). It allows defining the model language through a meta-meta-model (or M2 model). This approach enables the dynamic generation of model elements data and graphics based on the language definition.

To achieve this, an extended generative GModel was created for graphical notation. Additionally, a new schema called AModel, based on JSON Schema, was developed for the model elements data. This schema is used to validate the model elements data and to generate the model elements data editor.

### Dynamic GLSP Server

The server is responsible for dynamically generating GModel and AModel based on the M2 model. It takes the meta elements definitions: generative GModel, AModel, and default data, and generates the model elements data and graphics to be used by the GLSP client. The server also provides:

- **Actions and Operations**: Define interactions for loading/saving the model language and allow dynamic changes in the model elements data.
- **Authentication**: Actions and operations can send authentication data to the server: token, user-agent, and IP address are provided to validate user access.
- **External Services**: Configurable services for language and model persistence and retrieval from external sources. Authentication data is sent to these services too.
- **Tool Palette**: Automatically generates the tool palette based on the M2 model.
- **Validation**: Validates the model elements data based on the AModel schema.

### Dynamic GLSP Client

The client is responsible for rendering the model elements graphics and data editor. The client also provides:

- **Inspector**: Defines the mechanism for inspecting the model elements AModel and sending data change operations to the server. It relies on an external form generation method.
- **External Services**: Offer interfaces for accessing language management and actions and operations execution. Additionally, it provides methods for exporting model SVG.
- **Styles and Views**: Defines a set of styles and views for properly rendering the model based on M2 model diversity, correctly displaying the inspector, and more.

### Dynamic GLSP Protocol

The protocol is responsible for defining the communication between the server and the client. It defines the interfaces for model language, generative GModel, and AModel. Moreover, it defines the actions and operations interfaces for language management and data change.

## Stay in touch

- Author - [Giuliano Marinelli](https://www.linkedin.com/in/giuliano-marinelli/)
- Website - [https://github.com/giuliano-marinelli](https://github.com/giuliano-marinelli)

## License

This package is [MIT licensed](LICENSE).
