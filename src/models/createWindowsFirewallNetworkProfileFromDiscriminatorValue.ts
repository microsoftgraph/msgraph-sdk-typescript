import {WindowsFirewallNetworkProfile} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWindowsFirewallNetworkProfileFromDiscriminatorValue(parseNode: ParseNode | undefined) : WindowsFirewallNetworkProfile {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new WindowsFirewallNetworkProfile();
}
