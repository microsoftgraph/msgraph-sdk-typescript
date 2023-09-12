import { deserializeIntoVideo } from './deserializeIntoVideo';
import { type Video } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createVideoFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoVideo;
}
