import {UnmuteParticipantOperationImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUnmuteParticipantOperationFromDiscriminatorValue(parseNode: ParseNode | undefined) : UnmuteParticipantOperationImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new UnmuteParticipantOperationImpl();
}
