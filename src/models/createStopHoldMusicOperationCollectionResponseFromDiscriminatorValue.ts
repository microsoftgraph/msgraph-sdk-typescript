import {StopHoldMusicOperationCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createStopHoldMusicOperationCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : StopHoldMusicOperationCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new StopHoldMusicOperationCollectionResponse();
}
