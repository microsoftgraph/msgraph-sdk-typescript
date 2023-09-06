import { createPermissionFromDiscriminatorValue } from './createPermissionFromDiscriminatorValue';
import { deserializeIntoBaseCollectionPaginationCountResponse } from './deserializeIntoBaseCollectionPaginationCountResponse';
import { type Permission } from './permission';
import { type PermissionCollectionResponse } from './permissionCollectionResponse';
import { serializePermission } from './serializePermission';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoPermissionCollectionResponse(permissionCollectionResponse: PermissionCollectionResponse | undefined = {} as PermissionCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(permissionCollectionResponse),
        "value": n => { permissionCollectionResponse.value = n.getCollectionOfObjectValues<Permission>(createPermissionFromDiscriminatorValue); },
    }
}
