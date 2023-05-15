import {createPermissionGrantConditionSetFromDiscriminatorValue} from './createPermissionGrantConditionSetFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {PermissionGrantConditionSet} from './permissionGrantConditionSet';
import {PermissionGrantConditionSetCollectionResponse} from './permissionGrantConditionSetCollectionResponse';
import {serializePermissionGrantConditionSet} from './serializePermissionGrantConditionSet';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPermissionGrantConditionSetCollectionResponse(permissionGrantConditionSetCollectionResponse: PermissionGrantConditionSetCollectionResponse | undefined = {} as PermissionGrantConditionSetCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(permissionGrantConditionSetCollectionResponse),
        "value": n => { permissionGrantConditionSetCollectionResponse.value = n.getCollectionOfObjectValues<PermissionGrantConditionSet>(createPermissionGrantConditionSetFromDiscriminatorValue); },
    }
}
