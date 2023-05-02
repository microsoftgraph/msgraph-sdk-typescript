import {deserializeIntoStartHoldMusicPostRequestBody} from './deserializeIntoStartHoldMusicPostRequestBody';
import {StartHoldMusicPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createStartHoldMusicPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoStartHoldMusicPostRequestBody;
}
