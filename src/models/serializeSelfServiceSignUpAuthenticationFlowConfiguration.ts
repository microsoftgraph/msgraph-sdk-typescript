import { type SelfServiceSignUpAuthenticationFlowConfiguration } from './selfServiceSignUpAuthenticationFlowConfiguration';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeSelfServiceSignUpAuthenticationFlowConfiguration(writer: SerializationWriter, selfServiceSignUpAuthenticationFlowConfiguration: SelfServiceSignUpAuthenticationFlowConfiguration | undefined = {} as SelfServiceSignUpAuthenticationFlowConfiguration) : void {
        writer.writeBooleanValue("isEnabled", selfServiceSignUpAuthenticationFlowConfiguration.isEnabled);
        writer.writeStringValue("@odata.type", selfServiceSignUpAuthenticationFlowConfiguration.odataType);
        writer.writeAdditionalData(selfServiceSignUpAuthenticationFlowConfiguration.additionalData);
}
