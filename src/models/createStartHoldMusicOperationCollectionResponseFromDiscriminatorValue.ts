import {StartHoldMusicOperationCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createStartHoldMusicOperationCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : StartHoldMusicOperationCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new StartHoldMusicOperationCollectionResponse();
}
