import {IPv4CidrRange} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createIPv4CidrRangeFromDiscriminatorValue(parseNode: ParseNode | undefined) : IPv4CidrRange {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new IPv4CidrRange();
}
