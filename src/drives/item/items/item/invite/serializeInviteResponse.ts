import {Permission} from '../../../../../models/permission';
import {serializeBaseCollectionPaginationCountResponse} from '../../../../../models/serializeBaseCollectionPaginationCountResponse';
import {serializePermission} from '../../../../../models/serializePermission';
import {InviteResponse} from './inviteResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeInviteResponse(inviteResponse: InviteResponse | undefined = {} as InviteResponse, writer: SerializationWriter) : void {
        serializeBaseCollectionPaginationCountResponse(writer, inviteResponse)
        writer.writeCollectionOfObjectValues<Permission>("value", inviteResponse.value, serializePermission);
}
