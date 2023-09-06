import { deserializeIntoStartHoldMusicPostRequestBody } from './deserializeIntoStartHoldMusicPostRequestBody';
import { type StartHoldMusicPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createStartHoldMusicPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoStartHoldMusicPostRequestBody;
}
