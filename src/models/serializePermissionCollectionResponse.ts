import type {Permission} from './permission';
import type {PermissionCollectionResponse} from './permissionCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializePermission} from './serializePermission';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePermissionCollectionResponse(writer: SerializationWriter, permissionCollectionResponse: PermissionCollectionResponse | undefined = {} as PermissionCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, permissionCollectionResponse)
        writer.writeCollectionOfObjectValues<Permission>("value", permissionCollectionResponse.value, serializePermission);
}
