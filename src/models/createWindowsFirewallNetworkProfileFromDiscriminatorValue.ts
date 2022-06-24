import {WindowsFirewallNetworkProfileImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWindowsFirewallNetworkProfileFromDiscriminatorValue(parseNode: ParseNode | undefined) : WindowsFirewallNetworkProfileImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new WindowsFirewallNetworkProfileImpl();
}
