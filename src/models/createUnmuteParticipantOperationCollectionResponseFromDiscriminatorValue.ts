import {UnmuteParticipantOperationCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUnmuteParticipantOperationCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : UnmuteParticipantOperationCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new UnmuteParticipantOperationCollectionResponse();
}
