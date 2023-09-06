import { deserializeIntoParticipant } from './deserializeIntoParticipant';
import { type Participant } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createParticipantFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoParticipant;
}
