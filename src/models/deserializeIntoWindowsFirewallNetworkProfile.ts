import {StateManagementSetting} from './stateManagementSetting';
import {WindowsFirewallNetworkProfile} from './windowsFirewallNetworkProfile';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWindowsFirewallNetworkProfile(windowsFirewallNetworkProfile: WindowsFirewallNetworkProfile | undefined = {} as WindowsFirewallNetworkProfile) : Record<string, (node: ParseNode) => void> {
    return {
        "authorizedApplicationRulesFromGroupPolicyMerged": n => { windowsFirewallNetworkProfile.authorizedApplicationRulesFromGroupPolicyMerged = n.getBooleanValue(); },
        "connectionSecurityRulesFromGroupPolicyMerged": n => { windowsFirewallNetworkProfile.connectionSecurityRulesFromGroupPolicyMerged = n.getBooleanValue(); },
        "firewallEnabled": n => { windowsFirewallNetworkProfile.firewallEnabled = n.getEnumValue<StateManagementSetting>(StateManagementSetting); },
        "globalPortRulesFromGroupPolicyMerged": n => { windowsFirewallNetworkProfile.globalPortRulesFromGroupPolicyMerged = n.getBooleanValue(); },
        "inboundConnectionsBlocked": n => { windowsFirewallNetworkProfile.inboundConnectionsBlocked = n.getBooleanValue(); },
        "inboundNotificationsBlocked": n => { windowsFirewallNetworkProfile.inboundNotificationsBlocked = n.getBooleanValue(); },
        "incomingTrafficBlocked": n => { windowsFirewallNetworkProfile.incomingTrafficBlocked = n.getBooleanValue(); },
        "@odata.type": n => { windowsFirewallNetworkProfile.odataType = n.getStringValue(); },
        "outboundConnectionsBlocked": n => { windowsFirewallNetworkProfile.outboundConnectionsBlocked = n.getBooleanValue(); },
        "policyRulesFromGroupPolicyMerged": n => { windowsFirewallNetworkProfile.policyRulesFromGroupPolicyMerged = n.getBooleanValue(); },
        "securedPacketExemptionAllowed": n => { windowsFirewallNetworkProfile.securedPacketExemptionAllowed = n.getBooleanValue(); },
        "stealthModeBlocked": n => { windowsFirewallNetworkProfile.stealthModeBlocked = n.getBooleanValue(); },
        "unicastResponsesToMulticastBroadcastsBlocked": n => { windowsFirewallNetworkProfile.unicastResponsesToMulticastBroadcastsBlocked = n.getBooleanValue(); },
    }
}
