import {deserializeIntoMuteParticipantOperation} from './deserializeIntoMuteParticipantOperation';
import {MuteParticipantOperation} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMuteParticipantOperationFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoMuteParticipantOperation;
}
