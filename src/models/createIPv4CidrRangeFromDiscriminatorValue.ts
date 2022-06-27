import {IPv4CidrRangeImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createIPv4CidrRangeFromDiscriminatorValue(parseNode: ParseNode | undefined) : IPv4CidrRangeImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new IPv4CidrRangeImpl();
}
