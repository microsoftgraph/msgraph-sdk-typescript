import { createPermissionGrantPolicyFromDiscriminatorValue } from './createPermissionGrantPolicyFromDiscriminatorValue';
import { deserializeIntoBaseCollectionPaginationCountResponse } from './deserializeIntoBaseCollectionPaginationCountResponse';
import { type PermissionGrantPolicy } from './permissionGrantPolicy';
import { type PermissionGrantPolicyCollectionResponse } from './permissionGrantPolicyCollectionResponse';
import { serializePermissionGrantPolicy } from './serializePermissionGrantPolicy';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoPermissionGrantPolicyCollectionResponse(permissionGrantPolicyCollectionResponse: PermissionGrantPolicyCollectionResponse | undefined = {} as PermissionGrantPolicyCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(permissionGrantPolicyCollectionResponse),
        "value": n => { permissionGrantPolicyCollectionResponse.value = n.getCollectionOfObjectValues<PermissionGrantPolicy>(createPermissionGrantPolicyFromDiscriminatorValue); },
    }
}
