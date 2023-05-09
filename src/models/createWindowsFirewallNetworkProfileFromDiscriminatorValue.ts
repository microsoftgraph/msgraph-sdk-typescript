import {deserializeIntoWindowsFirewallNetworkProfile} from './deserializeIntoWindowsFirewallNetworkProfile';
import {WindowsFirewallNetworkProfile} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWindowsFirewallNetworkProfileFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoWindowsFirewallNetworkProfile;
}
