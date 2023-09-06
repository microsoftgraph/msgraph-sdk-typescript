import { deserializeIntoParticipantCollectionResponse } from './deserializeIntoParticipantCollectionResponse';
import { type ParticipantCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createParticipantCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoParticipantCollectionResponse;
}
