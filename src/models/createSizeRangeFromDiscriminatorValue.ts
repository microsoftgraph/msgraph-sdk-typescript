import { deserializeIntoSizeRange } from './deserializeIntoSizeRange';
import { type SizeRange } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createSizeRangeFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSizeRange;
}
