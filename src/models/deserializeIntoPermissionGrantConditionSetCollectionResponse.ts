import { createPermissionGrantConditionSetFromDiscriminatorValue } from './createPermissionGrantConditionSetFromDiscriminatorValue';
import { deserializeIntoBaseCollectionPaginationCountResponse } from './deserializeIntoBaseCollectionPaginationCountResponse';
import { type PermissionGrantConditionSet } from './permissionGrantConditionSet';
import { type PermissionGrantConditionSetCollectionResponse } from './permissionGrantConditionSetCollectionResponse';
import { serializePermissionGrantConditionSet } from './serializePermissionGrantConditionSet';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoPermissionGrantConditionSetCollectionResponse(permissionGrantConditionSetCollectionResponse: PermissionGrantConditionSetCollectionResponse | undefined = {} as PermissionGrantConditionSetCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(permissionGrantConditionSetCollectionResponse),
        "value": n => { permissionGrantConditionSetCollectionResponse.value = n.getCollectionOfObjectValues<PermissionGrantConditionSet>(createPermissionGrantConditionSetFromDiscriminatorValue); },
    }
}
