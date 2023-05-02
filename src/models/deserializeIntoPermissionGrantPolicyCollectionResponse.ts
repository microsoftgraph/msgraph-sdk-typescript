import {createPermissionGrantPolicyFromDiscriminatorValue} from './createPermissionGrantPolicyFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {PermissionGrantPolicy} from './permissionGrantPolicy';
import {PermissionGrantPolicyCollectionResponse} from './permissionGrantPolicyCollectionResponse';
import {serializePermissionGrantPolicy} from './serializePermissionGrantPolicy';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPermissionGrantPolicyCollectionResponse(permissionGrantPolicyCollectionResponse: PermissionGrantPolicyCollectionResponse | undefined = {} as PermissionGrantPolicyCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(permissionGrantPolicyCollectionResponse),
        "value": n => { permissionGrantPolicyCollectionResponse.value = n.getCollectionOfObjectValues<PermissionGrantPolicy>(createPermissionGrantPolicyFromDiscriminatorValue); },
    }
}
