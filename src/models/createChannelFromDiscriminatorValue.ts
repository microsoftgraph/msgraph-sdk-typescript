import {deserializeIntoChannel} from './deserializeIntoChannel';
import {Channel} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createChannelFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoChannel;
}
