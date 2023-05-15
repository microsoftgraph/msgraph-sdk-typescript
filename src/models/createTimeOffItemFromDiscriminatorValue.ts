import {deserializeIntoTimeOffItem} from './deserializeIntoTimeOffItem';
import {TimeOffItem} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTimeOffItemFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoTimeOffItem;
}
