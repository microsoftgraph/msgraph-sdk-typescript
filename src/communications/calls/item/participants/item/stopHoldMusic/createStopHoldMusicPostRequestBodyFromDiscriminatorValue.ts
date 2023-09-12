import { deserializeIntoStopHoldMusicPostRequestBody } from './deserializeIntoStopHoldMusicPostRequestBody';
import { type StopHoldMusicPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createStopHoldMusicPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoStopHoldMusicPostRequestBody;
}
