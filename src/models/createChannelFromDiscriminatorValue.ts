import { deserializeIntoChannel } from './deserializeIntoChannel';
import { type Channel } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createChannelFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoChannel;
}
