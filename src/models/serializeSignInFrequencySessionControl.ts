import {serializeConditionalAccessSessionControl} from './serializeConditionalAccessSessionControl';
import {SignInFrequencyAuthenticationType} from './signInFrequencyAuthenticationType';
import {SignInFrequencyInterval} from './signInFrequencyInterval';
import type {SignInFrequencySessionControl} from './signInFrequencySessionControl';
import {SigninFrequencyType} from './signinFrequencyType';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSignInFrequencySessionControl(writer: SerializationWriter, signInFrequencySessionControl: SignInFrequencySessionControl | undefined = {} as SignInFrequencySessionControl) : void {
        serializeConditionalAccessSessionControl(writer, signInFrequencySessionControl)
        writer.writeEnumValue<SignInFrequencyAuthenticationType>("authenticationType", signInFrequencySessionControl.authenticationType);
        writer.writeEnumValue<SignInFrequencyInterval>("frequencyInterval", signInFrequencySessionControl.frequencyInterval);
        writer.writeEnumValue<SigninFrequencyType>("type", signInFrequencySessionControl.type);
        writer.writeNumberValue("value", signInFrequencySessionControl.value);
}
