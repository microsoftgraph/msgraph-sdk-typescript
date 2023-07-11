import {deserializeIntoIpAddress} from './deserializeIntoIpAddress';
import {IpAddress} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createIpAddressFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoIpAddress;
}
