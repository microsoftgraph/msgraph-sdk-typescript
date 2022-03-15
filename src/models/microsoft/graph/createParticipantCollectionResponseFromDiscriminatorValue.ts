import {ParticipantCollectionResponse} from './participantCollectionResponse';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createParticipantCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ParticipantCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ParticipantCollectionResponse();
}
