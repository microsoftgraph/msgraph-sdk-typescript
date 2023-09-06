import { type ApiAuthenticationConfigurationBase } from './apiAuthenticationConfigurationBase';
import { createApiAuthenticationConfigurationBaseFromDiscriminatorValue } from './createApiAuthenticationConfigurationBaseFromDiscriminatorValue';
import { deserializeIntoEntity } from './deserializeIntoEntity';
import { type IdentityApiConnector } from './identityApiConnector';
import { serializeApiAuthenticationConfigurationBase } from './serializeApiAuthenticationConfigurationBase';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoIdentityApiConnector(identityApiConnector: IdentityApiConnector | undefined = {} as IdentityApiConnector) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(identityApiConnector),
        "authenticationConfiguration": n => { identityApiConnector.authenticationConfiguration = n.getObjectValue<ApiAuthenticationConfigurationBase>(createApiAuthenticationConfigurationBaseFromDiscriminatorValue); },
        "displayName": n => { identityApiConnector.displayName = n.getStringValue(); },
        "targetUrl": n => { identityApiConnector.targetUrl = n.getStringValue(); },
    }
}
