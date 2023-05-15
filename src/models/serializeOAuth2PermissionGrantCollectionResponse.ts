import {OAuth2PermissionGrant} from './oAuth2PermissionGrant';
import {OAuth2PermissionGrantCollectionResponse} from './oAuth2PermissionGrantCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeOAuth2PermissionGrant} from './serializeOAuth2PermissionGrant';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeOAuth2PermissionGrantCollectionResponse(writer: SerializationWriter, oAuth2PermissionGrantCollectionResponse: OAuth2PermissionGrantCollectionResponse | undefined = {} as OAuth2PermissionGrantCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, oAuth2PermissionGrantCollectionResponse)
        writer.writeCollectionOfObjectValues<OAuth2PermissionGrant>("value", oAuth2PermissionGrantCollectionResponse.value, serializeOAuth2PermissionGrant);
}
