import type {Invitation} from './invitation';
import type {InvitationCollectionResponse} from './invitationCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeInvitation} from './serializeInvitation';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeInvitationCollectionResponse(writer: SerializationWriter, invitationCollectionResponse: InvitationCollectionResponse | undefined = {} as InvitationCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, invitationCollectionResponse)
        writer.writeCollectionOfObjectValues<Invitation>("value", invitationCollectionResponse.value, serializeInvitation);
}
