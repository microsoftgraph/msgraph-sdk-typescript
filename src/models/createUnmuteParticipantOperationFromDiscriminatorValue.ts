import {deserializeIntoUnmuteParticipantOperation} from './deserializeIntoUnmuteParticipantOperation';
import {UnmuteParticipantOperation} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUnmuteParticipantOperationFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoUnmuteParticipantOperation;
}
