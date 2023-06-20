import {Invitation} from './invitation';
import {InvitationCollectionResponse} from './invitationCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeInvitation} from './serializeInvitation';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeInvitationCollectionResponse(invitationCollectionResponse: InvitationCollectionResponse | undefined = {} as InvitationCollectionResponse, writer: SerializationWriter) : void {
        serializeBaseCollectionPaginationCountResponse(writer, invitationCollectionResponse)
        writer.writeCollectionOfObjectValues<Invitation>("value", invitationCollectionResponse.value, serializeInvitation);
}
