import {ResourceSpecificPermissionGrant} from './resourceSpecificPermissionGrant';
import {ResourceSpecificPermissionGrantCollectionResponse} from './resourceSpecificPermissionGrantCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeResourceSpecificPermissionGrant} from './serializeResourceSpecificPermissionGrant';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeResourceSpecificPermissionGrantCollectionResponse(writer: SerializationWriter, resourceSpecificPermissionGrantCollectionResponse: ResourceSpecificPermissionGrantCollectionResponse | undefined = {} as ResourceSpecificPermissionGrantCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, resourceSpecificPermissionGrantCollectionResponse)
        writer.writeCollectionOfObjectValues<ResourceSpecificPermissionGrant>("value", resourceSpecificPermissionGrantCollectionResponse.value, serializeResourceSpecificPermissionGrant);
}
