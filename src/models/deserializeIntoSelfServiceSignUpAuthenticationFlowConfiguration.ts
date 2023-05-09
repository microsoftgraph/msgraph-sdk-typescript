import {SelfServiceSignUpAuthenticationFlowConfiguration} from './selfServiceSignUpAuthenticationFlowConfiguration';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSelfServiceSignUpAuthenticationFlowConfiguration(selfServiceSignUpAuthenticationFlowConfiguration: SelfServiceSignUpAuthenticationFlowConfiguration | undefined = {} as SelfServiceSignUpAuthenticationFlowConfiguration) : Record<string, (node: ParseNode) => void> {
    return {
        "isEnabled": n => { selfServiceSignUpAuthenticationFlowConfiguration.isEnabled = n.getBooleanValue(); },
        "@odata.type": n => { selfServiceSignUpAuthenticationFlowConfiguration.odataType = n.getStringValue(); },
    }
}
