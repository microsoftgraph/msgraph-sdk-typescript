import {createParticipantFromDiscriminatorValue} from './createParticipantFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import type {Participant} from './participant';
import type {ParticipantCollectionResponse} from './participantCollectionResponse';
import {serializeParticipant} from './serializeParticipant';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoParticipantCollectionResponse(participantCollectionResponse: ParticipantCollectionResponse | undefined = {} as ParticipantCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(participantCollectionResponse),
        "value": n => { participantCollectionResponse.value = n.getCollectionOfObjectValues<Participant>(createParticipantFromDiscriminatorValue); },
    }
}
