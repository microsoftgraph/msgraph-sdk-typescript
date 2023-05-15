import {deserializeIntoIPv6CidrRange} from './deserializeIntoIPv6CidrRange';
import {IPv6CidrRange} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createIPv6CidrRangeFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoIPv6CidrRange;
}
