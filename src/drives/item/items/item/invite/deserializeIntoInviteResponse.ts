import {createPermissionFromDiscriminatorValue} from '../../../../../models/createPermissionFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from '../../../../../models/deserializeIntoBaseCollectionPaginationCountResponse';
import type {Permission} from '../../../../../models/permission';
import {serializePermission} from '../../../../../models/serializePermission';
import type {InviteResponse} from './inviteResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoInviteResponse(inviteResponse: InviteResponse | undefined = {} as InviteResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(inviteResponse),
        "value": n => { inviteResponse.value = n.getCollectionOfObjectValues<Permission>(createPermissionFromDiscriminatorValue); },
    }
}
