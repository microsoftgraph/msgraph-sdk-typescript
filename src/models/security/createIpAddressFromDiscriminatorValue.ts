import { deserializeIntoIpAddress } from './deserializeIntoIpAddress';
import { type IpAddress } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createIpAddressFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoIpAddress;
}
