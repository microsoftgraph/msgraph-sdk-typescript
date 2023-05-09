import {deserializeIntoConditionalAccessSessionControl} from './deserializeIntoConditionalAccessSessionControl';
import {SignInFrequencyAuthenticationType} from './signInFrequencyAuthenticationType';
import {SignInFrequencyInterval} from './signInFrequencyInterval';
import {SignInFrequencySessionControl} from './signInFrequencySessionControl';
import {SigninFrequencyType} from './signinFrequencyType';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSignInFrequencySessionControl(signInFrequencySessionControl: SignInFrequencySessionControl | undefined = {} as SignInFrequencySessionControl) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoConditionalAccessSessionControl(signInFrequencySessionControl),
        "authenticationType": n => { signInFrequencySessionControl.authenticationType = n.getEnumValue<SignInFrequencyAuthenticationType>(SignInFrequencyAuthenticationType); },
        "frequencyInterval": n => { signInFrequencySessionControl.frequencyInterval = n.getEnumValue<SignInFrequencyInterval>(SignInFrequencyInterval); },
        "type": n => { signInFrequencySessionControl.type = n.getEnumValue<SigninFrequencyType>(SigninFrequencyType); },
        "value": n => { signInFrequencySessionControl.value = n.getNumberValue(); },
    }
}
