import { deserializeIntoTimeOffItem } from './deserializeIntoTimeOffItem';
import { type TimeOffItem } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createTimeOffItemFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoTimeOffItem;
}
