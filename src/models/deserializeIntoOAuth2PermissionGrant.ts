import {deserializeIntoEntity} from './deserializeIntoEntity';
import {OAuth2PermissionGrant} from './oAuth2PermissionGrant';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoOAuth2PermissionGrant(oAuth2PermissionGrant: OAuth2PermissionGrant | undefined = {} as OAuth2PermissionGrant) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(oAuth2PermissionGrant),
        "clientId": n => { oAuth2PermissionGrant.clientId = n.getStringValue(); },
        "consentType": n => { oAuth2PermissionGrant.consentType = n.getStringValue(); },
        "principalId": n => { oAuth2PermissionGrant.principalId = n.getStringValue(); },
        "resourceId": n => { oAuth2PermissionGrant.resourceId = n.getStringValue(); },
        "scope": n => { oAuth2PermissionGrant.scope = n.getStringValue(); },
    }
}
