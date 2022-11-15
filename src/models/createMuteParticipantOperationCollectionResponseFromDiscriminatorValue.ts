import {MuteParticipantOperationCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMuteParticipantOperationCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : MuteParticipantOperationCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new MuteParticipantOperationCollectionResponse();
}
