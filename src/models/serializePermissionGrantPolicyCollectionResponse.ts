import type {PermissionGrantPolicy} from './permissionGrantPolicy';
import type {PermissionGrantPolicyCollectionResponse} from './permissionGrantPolicyCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializePermissionGrantPolicy} from './serializePermissionGrantPolicy';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePermissionGrantPolicyCollectionResponse(writer: SerializationWriter, permissionGrantPolicyCollectionResponse: PermissionGrantPolicyCollectionResponse | undefined = {} as PermissionGrantPolicyCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, permissionGrantPolicyCollectionResponse)
        writer.writeCollectionOfObjectValues<PermissionGrantPolicy>("value", permissionGrantPolicyCollectionResponse.value, serializePermissionGrantPolicy);
}
