import { deserializeIntoWindowsFirewallNetworkProfile } from './deserializeIntoWindowsFirewallNetworkProfile';
import { type WindowsFirewallNetworkProfile } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createWindowsFirewallNetworkProfileFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoWindowsFirewallNetworkProfile;
}
