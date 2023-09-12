import { deserializeIntoMediaStream } from './deserializeIntoMediaStream';
import { type MediaStream } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createMediaStreamFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoMediaStream;
}
