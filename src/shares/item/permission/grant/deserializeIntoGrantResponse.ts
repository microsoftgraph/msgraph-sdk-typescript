import { createPermissionFromDiscriminatorValue } from '../../../../models/createPermissionFromDiscriminatorValue';
import { deserializeIntoBaseCollectionPaginationCountResponse } from '../../../../models/deserializeIntoBaseCollectionPaginationCountResponse';
import { type Permission } from '../../../../models/permission';
import { serializePermission } from '../../../../models/serializePermission';
import { type GrantResponse } from './grantResponse';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoGrantResponse(grantResponse: GrantResponse | undefined = {} as GrantResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(grantResponse),
        "value": n => { grantResponse.value = n.getCollectionOfObjectValues<Permission>(createPermissionFromDiscriminatorValue); },
    }
}
