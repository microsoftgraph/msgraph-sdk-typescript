import {AuthenticationFlowsPolicy} from './authenticationFlowsPolicy';
import {SelfServiceSignUpAuthenticationFlowConfiguration} from './selfServiceSignUpAuthenticationFlowConfiguration';
import {serializeEntity} from './serializeEntity';
import {serializeSelfServiceSignUpAuthenticationFlowConfiguration} from './serializeSelfServiceSignUpAuthenticationFlowConfiguration';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAuthenticationFlowsPolicy(writer: SerializationWriter, authenticationFlowsPolicy: AuthenticationFlowsPolicy | undefined = {} as AuthenticationFlowsPolicy) : void {
        serializeEntity(writer, authenticationFlowsPolicy)
        writer.writeStringValue("description", authenticationFlowsPolicy.description);
        writer.writeStringValue("displayName", authenticationFlowsPolicy.displayName);
        writer.writeObjectValue<SelfServiceSignUpAuthenticationFlowConfiguration>("selfServiceSignUp", authenticationFlowsPolicy.selfServiceSignUp, serializeSelfServiceSignUpAuthenticationFlowConfiguration);
}
