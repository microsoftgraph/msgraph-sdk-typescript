import {Participant} from './participant';
import {ParticipantCollectionResponse} from './participantCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeParticipant} from './serializeParticipant';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeParticipantCollectionResponse(writer: SerializationWriter, participantCollectionResponse: ParticipantCollectionResponse | undefined = {} as ParticipantCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, participantCollectionResponse)
        writer.writeCollectionOfObjectValues<Participant>("value", participantCollectionResponse.value, serializeParticipant);
}
