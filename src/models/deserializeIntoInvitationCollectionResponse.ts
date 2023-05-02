import {createInvitationFromDiscriminatorValue} from './createInvitationFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {Invitation} from './invitation';
import {InvitationCollectionResponse} from './invitationCollectionResponse';
import {serializeInvitation} from './serializeInvitation';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoInvitationCollectionResponse(invitationCollectionResponse: InvitationCollectionResponse | undefined = {} as InvitationCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(invitationCollectionResponse),
        "value": n => { invitationCollectionResponse.value = n.getCollectionOfObjectValues<Invitation>(createInvitationFromDiscriminatorValue); },
    }
}
