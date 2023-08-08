import {createResourceSpecificPermissionGrantFromDiscriminatorValue} from './createResourceSpecificPermissionGrantFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import type {ResourceSpecificPermissionGrant} from './resourceSpecificPermissionGrant';
import type {ResourceSpecificPermissionGrantCollectionResponse} from './resourceSpecificPermissionGrantCollectionResponse';
import {serializeResourceSpecificPermissionGrant} from './serializeResourceSpecificPermissionGrant';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoResourceSpecificPermissionGrantCollectionResponse(resourceSpecificPermissionGrantCollectionResponse: ResourceSpecificPermissionGrantCollectionResponse | undefined = {} as ResourceSpecificPermissionGrantCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(resourceSpecificPermissionGrantCollectionResponse),
        "value": n => { resourceSpecificPermissionGrantCollectionResponse.value = n.getCollectionOfObjectValues<ResourceSpecificPermissionGrant>(createResourceSpecificPermissionGrantFromDiscriminatorValue); },
    }
}
