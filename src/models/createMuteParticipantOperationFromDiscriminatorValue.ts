import { deserializeIntoMuteParticipantOperation } from './deserializeIntoMuteParticipantOperation';
import { type MuteParticipantOperation } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createMuteParticipantOperationFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoMuteParticipantOperation;
}
