import {IPv6CidrRange} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createIPv6CidrRangeFromDiscriminatorValue(parseNode: ParseNode | undefined) : IPv6CidrRange {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new IPv6CidrRange();
}
