import {ApiAuthenticationConfigurationBase} from './apiAuthenticationConfigurationBase';
import {createApiAuthenticationConfigurationBaseFromDiscriminatorValue} from './createApiAuthenticationConfigurationBaseFromDiscriminatorValue';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {IdentityApiConnector} from './identityApiConnector';
import {serializeApiAuthenticationConfigurationBase} from './serializeApiAuthenticationConfigurationBase';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoIdentityApiConnector(identityApiConnector: IdentityApiConnector | undefined = {} as IdentityApiConnector) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(identityApiConnector),
        "authenticationConfiguration": n => { identityApiConnector.authenticationConfiguration = n.getObjectValue<ApiAuthenticationConfigurationBase>(createApiAuthenticationConfigurationBaseFromDiscriminatorValue); },
        "displayName": n => { identityApiConnector.displayName = n.getStringValue(); },
        "targetUrl": n => { identityApiConnector.targetUrl = n.getStringValue(); },
    }
}
