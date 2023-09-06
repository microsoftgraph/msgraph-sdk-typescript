import { deserializeIntoIPv4Range } from './deserializeIntoIPv4Range';
import { type IPv4Range } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createIPv4RangeFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoIPv4Range;
}
