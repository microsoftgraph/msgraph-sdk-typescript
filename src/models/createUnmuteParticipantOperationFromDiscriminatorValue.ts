import { deserializeIntoUnmuteParticipantOperation } from './deserializeIntoUnmuteParticipantOperation';
import { type UnmuteParticipantOperation } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createUnmuteParticipantOperationFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoUnmuteParticipantOperation;
}
