import { type OAuth2PermissionGrant } from './oAuth2PermissionGrant';
import { serializeEntity } from './serializeEntity';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeOAuth2PermissionGrant(writer: SerializationWriter, oAuth2PermissionGrant: OAuth2PermissionGrant | undefined = {} as OAuth2PermissionGrant) : void {
        serializeEntity(writer, oAuth2PermissionGrant)
        writer.writeStringValue("clientId", oAuth2PermissionGrant.clientId);
        writer.writeStringValue("consentType", oAuth2PermissionGrant.consentType);
        writer.writeStringValue("principalId", oAuth2PermissionGrant.principalId);
        writer.writeStringValue("resourceId", oAuth2PermissionGrant.resourceId);
        writer.writeStringValue("scope", oAuth2PermissionGrant.scope);
}
