import {SelfServiceSignUpAuthenticationFlowConfiguration} from './selfServiceSignUpAuthenticationFlowConfiguration';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSelfServiceSignUpAuthenticationFlowConfiguration(writer: SerializationWriter, selfServiceSignUpAuthenticationFlowConfiguration: SelfServiceSignUpAuthenticationFlowConfiguration | undefined = {} as SelfServiceSignUpAuthenticationFlowConfiguration) : void {
        writer.writeBooleanValue("isEnabled", selfServiceSignUpAuthenticationFlowConfiguration.isEnabled);
        writer.writeStringValue("@odata.type", selfServiceSignUpAuthenticationFlowConfiguration.odataType);
        writer.writeAdditionalData(selfServiceSignUpAuthenticationFlowConfiguration.additionalData);
}
