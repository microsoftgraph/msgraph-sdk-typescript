import type {ResourceSpecificPermissionGrant} from './resourceSpecificPermissionGrant';
import type {ResourceSpecificPermissionGrantCollectionResponse} from './resourceSpecificPermissionGrantCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeResourceSpecificPermissionGrant} from './serializeResourceSpecificPermissionGrant';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeResourceSpecificPermissionGrantCollectionResponse(writer: SerializationWriter, resourceSpecificPermissionGrantCollectionResponse: ResourceSpecificPermissionGrantCollectionResponse | undefined = {} as ResourceSpecificPermissionGrantCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, resourceSpecificPermissionGrantCollectionResponse)
        writer.writeCollectionOfObjectValues<ResourceSpecificPermissionGrant>("value", resourceSpecificPermissionGrantCollectionResponse.value, serializeResourceSpecificPermissionGrant);
}
