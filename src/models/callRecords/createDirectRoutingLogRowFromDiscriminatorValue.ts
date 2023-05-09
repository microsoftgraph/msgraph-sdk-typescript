import {deserializeIntoDirectRoutingLogRow} from './deserializeIntoDirectRoutingLogRow';
import {DirectRoutingLogRow} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDirectRoutingLogRowFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDirectRoutingLogRow;
}
