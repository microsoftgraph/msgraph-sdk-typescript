import type {AuthenticationFlowsPolicy} from './authenticationFlowsPolicy';
import {createSelfServiceSignUpAuthenticationFlowConfigurationFromDiscriminatorValue} from './createSelfServiceSignUpAuthenticationFlowConfigurationFromDiscriminatorValue';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import type {SelfServiceSignUpAuthenticationFlowConfiguration} from './selfServiceSignUpAuthenticationFlowConfiguration';
import {serializeSelfServiceSignUpAuthenticationFlowConfiguration} from './serializeSelfServiceSignUpAuthenticationFlowConfiguration';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAuthenticationFlowsPolicy(authenticationFlowsPolicy: AuthenticationFlowsPolicy | undefined = {} as AuthenticationFlowsPolicy) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(authenticationFlowsPolicy),
        "description": n => { authenticationFlowsPolicy.description = n.getStringValue(); },
        "displayName": n => { authenticationFlowsPolicy.displayName = n.getStringValue(); },
        "selfServiceSignUp": n => { authenticationFlowsPolicy.selfServiceSignUp = n.getObjectValue<SelfServiceSignUpAuthenticationFlowConfiguration>(createSelfServiceSignUpAuthenticationFlowConfigurationFromDiscriminatorValue); },
    }
}
