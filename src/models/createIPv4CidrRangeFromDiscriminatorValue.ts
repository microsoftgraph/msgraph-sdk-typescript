import {deserializeIntoIPv4CidrRange} from './deserializeIntoIPv4CidrRange';
import {IPv4CidrRange} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createIPv4CidrRangeFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoIPv4CidrRange;
}
