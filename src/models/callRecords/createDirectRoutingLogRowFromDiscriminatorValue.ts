import { deserializeIntoDirectRoutingLogRow } from './deserializeIntoDirectRoutingLogRow';
import { type DirectRoutingLogRow } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createDirectRoutingLogRowFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDirectRoutingLogRow;
}
