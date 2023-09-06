import { type SelfServiceSignUpAuthenticationFlowConfiguration } from './selfServiceSignUpAuthenticationFlowConfiguration';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoSelfServiceSignUpAuthenticationFlowConfiguration(selfServiceSignUpAuthenticationFlowConfiguration: SelfServiceSignUpAuthenticationFlowConfiguration | undefined = {} as SelfServiceSignUpAuthenticationFlowConfiguration) : Record<string, (node: ParseNode) => void> {
    return {
        "isEnabled": n => { selfServiceSignUpAuthenticationFlowConfiguration.isEnabled = n.getBooleanValue(); },
        "@odata.type": n => { selfServiceSignUpAuthenticationFlowConfiguration.odataType = n.getStringValue(); },
    }
}
