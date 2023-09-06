import { deserializeIntoIPv4CidrRange } from './deserializeIntoIPv4CidrRange';
import { type IPv4CidrRange } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createIPv4CidrRangeFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoIPv4CidrRange;
}
