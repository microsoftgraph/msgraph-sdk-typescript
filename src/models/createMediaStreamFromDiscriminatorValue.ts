import {deserializeIntoMediaStream} from './deserializeIntoMediaStream';
import {MediaStream} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMediaStreamFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoMediaStream;
}
