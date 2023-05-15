import {deserializeIntoVideo} from './deserializeIntoVideo';
import {Video} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createVideoFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoVideo;
}
