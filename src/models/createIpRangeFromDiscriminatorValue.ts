import {IpRangeImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createIpRangeFromDiscriminatorValue(parseNode: ParseNode | undefined) : IpRangeImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new IpRangeImpl();
}
