import { createIdentityApiConnectorFromDiscriminatorValue } from './createIdentityApiConnectorFromDiscriminatorValue';
import { type IdentityApiConnector } from './identityApiConnector';
import { serializeIdentityApiConnector } from './serializeIdentityApiConnector';
import { type UserFlowApiConnectorConfiguration } from './userFlowApiConnectorConfiguration';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoUserFlowApiConnectorConfiguration(userFlowApiConnectorConfiguration: UserFlowApiConnectorConfiguration | undefined = {} as UserFlowApiConnectorConfiguration) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { userFlowApiConnectorConfiguration.odataType = n.getStringValue(); },
        "postAttributeCollection": n => { userFlowApiConnectorConfiguration.postAttributeCollection = n.getObjectValue<IdentityApiConnector>(createIdentityApiConnectorFromDiscriminatorValue); },
        "postFederationSignup": n => { userFlowApiConnectorConfiguration.postFederationSignup = n.getObjectValue<IdentityApiConnector>(createIdentityApiConnectorFromDiscriminatorValue); },
    }
}
