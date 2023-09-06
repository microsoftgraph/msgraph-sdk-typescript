import { type Permission } from '../../../../../models/permission';
import { serializeBaseCollectionPaginationCountResponse } from '../../../../../models/serializeBaseCollectionPaginationCountResponse';
import { serializePermission } from '../../../../../models/serializePermission';
import { type InviteResponse } from './inviteResponse';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeInviteResponse(writer: SerializationWriter, inviteResponse: InviteResponse | undefined = {} as InviteResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, inviteResponse)
        writer.writeCollectionOfObjectValues<Permission>("value", inviteResponse.value, serializePermission);
}
