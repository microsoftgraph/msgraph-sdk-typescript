import {SelfServiceSignUpAuthenticationFlowConfigurationImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSelfServiceSignUpAuthenticationFlowConfigurationFromDiscriminatorValue(parseNode: ParseNode | undefined) : SelfServiceSignUpAuthenticationFlowConfigurationImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SelfServiceSignUpAuthenticationFlowConfigurationImpl();
}
