import React, { useState, useContext } from "react";
import { Input, Button } from "react-native-elements";
import Spacer from "./Spacer";
import { Context as LocationContext } from "../context/LocationContext";

const TrackForm = () => {
  const {
    state: { name, recording, locations },
    startRecording,
    stopRecording,
    changeName,
  } = useContext(LocationContext);

  console.log(locations.length);

  return (
    <>
      <Spacer>
        <Input
          value={name}
          placeholder="Enter track name"
          onChangeText={changeName}
        />
      </Spacer>
      <Spacer>
        {recording ? (
          <Button
            title="Stop"
            onPress={stopRecording}
            raised
            buttonStyle={{ backgroundColor: "#800000" }}
          />
        ) : (
          <Button title="Record" onPress={startRecording} />
        )}
      </Spacer>
    </>
  );
};

export default TrackForm;
