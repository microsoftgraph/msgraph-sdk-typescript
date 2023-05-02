import {deserializeIntoParticipantCollectionResponse} from './deserializeIntoParticipantCollectionResponse';
import {ParticipantCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createParticipantCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoParticipantCollectionResponse;
}
