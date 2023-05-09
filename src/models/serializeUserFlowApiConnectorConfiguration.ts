import {IdentityApiConnector} from './identityApiConnector';
import {serializeIdentityApiConnector} from './serializeIdentityApiConnector';
import {UserFlowApiConnectorConfiguration} from './userFlowApiConnectorConfiguration';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeUserFlowApiConnectorConfiguration(writer: SerializationWriter, userFlowApiConnectorConfiguration: UserFlowApiConnectorConfiguration | undefined = {} as UserFlowApiConnectorConfiguration) : void {
        writer.writeStringValue("@odata.type", userFlowApiConnectorConfiguration.odataType);
        writer.writeObjectValue<IdentityApiConnector>("postAttributeCollection", userFlowApiConnectorConfiguration.postAttributeCollection, serializeIdentityApiConnector);
        writer.writeObjectValue<IdentityApiConnector>("postFederationSignup", userFlowApiConnectorConfiguration.postFederationSignup, serializeIdentityApiConnector);
        writer.writeAdditionalData(userFlowApiConnectorConfiguration.additionalData);
}
