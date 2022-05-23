import {VideoImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createVideoFromDiscriminatorValue(parseNode: ParseNode | undefined) : VideoImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new VideoImpl();
}
