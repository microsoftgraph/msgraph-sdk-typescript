import { type IdentityApiConnector } from './identityApiConnector';
import { serializeIdentityApiConnector } from './serializeIdentityApiConnector';
import { type UserFlowApiConnectorConfiguration } from './userFlowApiConnectorConfiguration';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeUserFlowApiConnectorConfiguration(writer: SerializationWriter, userFlowApiConnectorConfiguration: UserFlowApiConnectorConfiguration | undefined = {} as UserFlowApiConnectorConfiguration) : void {
        writer.writeStringValue("@odata.type", userFlowApiConnectorConfiguration.odataType);
        writer.writeObjectValue<IdentityApiConnector>("postAttributeCollection", userFlowApiConnectorConfiguration.postAttributeCollection, serializeIdentityApiConnector);
        writer.writeObjectValue<IdentityApiConnector>("postFederationSignup", userFlowApiConnectorConfiguration.postFederationSignup, serializeIdentityApiConnector);
        writer.writeAdditionalData(userFlowApiConnectorConfiguration.additionalData);
}
