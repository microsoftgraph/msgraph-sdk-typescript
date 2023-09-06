import { deserializeIntoIPv6CidrRange } from './deserializeIntoIPv6CidrRange';
import { type IPv6CidrRange } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createIPv6CidrRangeFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoIPv6CidrRange;
}
