import {createOAuth2PermissionGrantFromDiscriminatorValue} from './createOAuth2PermissionGrantFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {OAuth2PermissionGrant} from './oAuth2PermissionGrant';
import {OAuth2PermissionGrantCollectionResponse} from './oAuth2PermissionGrantCollectionResponse';
import {serializeOAuth2PermissionGrant} from './serializeOAuth2PermissionGrant';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoOAuth2PermissionGrantCollectionResponse(oAuth2PermissionGrantCollectionResponse: OAuth2PermissionGrantCollectionResponse | undefined = {} as OAuth2PermissionGrantCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(oAuth2PermissionGrantCollectionResponse),
        "value": n => { oAuth2PermissionGrantCollectionResponse.value = n.getCollectionOfObjectValues<OAuth2PermissionGrant>(createOAuth2PermissionGrantFromDiscriminatorValue); },
    }
}
