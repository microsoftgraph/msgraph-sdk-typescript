import {createIdentityApiConnectorFromDiscriminatorValue} from './createIdentityApiConnectorFromDiscriminatorValue';
import {IdentityApiConnector} from './identityApiConnector';
import {serializeIdentityApiConnector} from './serializeIdentityApiConnector';
import {UserFlowApiConnectorConfiguration} from './userFlowApiConnectorConfiguration';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoUserFlowApiConnectorConfiguration(userFlowApiConnectorConfiguration: UserFlowApiConnectorConfiguration | undefined = {} as UserFlowApiConnectorConfiguration) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { userFlowApiConnectorConfiguration.odataType = n.getStringValue(); },
        "postAttributeCollection": n => { userFlowApiConnectorConfiguration.postAttributeCollection = n.getObjectValue<IdentityApiConnector>(createIdentityApiConnectorFromDiscriminatorValue); },
        "postFederationSignup": n => { userFlowApiConnectorConfiguration.postFederationSignup = n.getObjectValue<IdentityApiConnector>(createIdentityApiConnectorFromDiscriminatorValue); },
    }
}
