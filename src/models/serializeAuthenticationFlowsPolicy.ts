import { type AuthenticationFlowsPolicy } from './authenticationFlowsPolicy';
import { type SelfServiceSignUpAuthenticationFlowConfiguration } from './selfServiceSignUpAuthenticationFlowConfiguration';
import { serializeEntity } from './serializeEntity';
import { serializeSelfServiceSignUpAuthenticationFlowConfiguration } from './serializeSelfServiceSignUpAuthenticationFlowConfiguration';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeAuthenticationFlowsPolicy(writer: SerializationWriter, authenticationFlowsPolicy: AuthenticationFlowsPolicy | undefined = {} as AuthenticationFlowsPolicy) : void {
        serializeEntity(writer, authenticationFlowsPolicy)
        writer.writeStringValue("description", authenticationFlowsPolicy.description);
        writer.writeStringValue("displayName", authenticationFlowsPolicy.displayName);
        writer.writeObjectValue<SelfServiceSignUpAuthenticationFlowConfiguration>("selfServiceSignUp", authenticationFlowsPolicy.selfServiceSignUp, serializeSelfServiceSignUpAuthenticationFlowConfiguration);
}
