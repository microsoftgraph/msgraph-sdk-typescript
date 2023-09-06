import { deserializeIntoSelfServiceSignUpAuthenticationFlowConfiguration } from './deserializeIntoSelfServiceSignUpAuthenticationFlowConfiguration';
import { type SelfServiceSignUpAuthenticationFlowConfiguration } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createSelfServiceSignUpAuthenticationFlowConfigurationFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSelfServiceSignUpAuthenticationFlowConfiguration;
}
