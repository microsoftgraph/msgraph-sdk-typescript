import {MuteParticipantOperationImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMuteParticipantOperationFromDiscriminatorValue(parseNode: ParseNode | undefined) : MuteParticipantOperationImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new MuteParticipantOperationImpl();
}
