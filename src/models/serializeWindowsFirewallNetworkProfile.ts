import {StateManagementSetting} from './stateManagementSetting';
import {WindowsFirewallNetworkProfile} from './windowsFirewallNetworkProfile';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWindowsFirewallNetworkProfile(writer: SerializationWriter, windowsFirewallNetworkProfile: WindowsFirewallNetworkProfile | undefined = {} as WindowsFirewallNetworkProfile) : void {
        writer.writeBooleanValue("authorizedApplicationRulesFromGroupPolicyMerged", windowsFirewallNetworkProfile.authorizedApplicationRulesFromGroupPolicyMerged);
        writer.writeBooleanValue("connectionSecurityRulesFromGroupPolicyMerged", windowsFirewallNetworkProfile.connectionSecurityRulesFromGroupPolicyMerged);
        writer.writeEnumValue<StateManagementSetting>("firewallEnabled", windowsFirewallNetworkProfile.firewallEnabled);
        writer.writeBooleanValue("globalPortRulesFromGroupPolicyMerged", windowsFirewallNetworkProfile.globalPortRulesFromGroupPolicyMerged);
        writer.writeBooleanValue("inboundConnectionsBlocked", windowsFirewallNetworkProfile.inboundConnectionsBlocked);
        writer.writeBooleanValue("inboundNotificationsBlocked", windowsFirewallNetworkProfile.inboundNotificationsBlocked);
        writer.writeBooleanValue("incomingTrafficBlocked", windowsFirewallNetworkProfile.incomingTrafficBlocked);
        writer.writeStringValue("@odata.type", windowsFirewallNetworkProfile.odataType);
        writer.writeBooleanValue("outboundConnectionsBlocked", windowsFirewallNetworkProfile.outboundConnectionsBlocked);
        writer.writeBooleanValue("policyRulesFromGroupPolicyMerged", windowsFirewallNetworkProfile.policyRulesFromGroupPolicyMerged);
        writer.writeBooleanValue("securedPacketExemptionAllowed", windowsFirewallNetworkProfile.securedPacketExemptionAllowed);
        writer.writeBooleanValue("stealthModeBlocked", windowsFirewallNetworkProfile.stealthModeBlocked);
        writer.writeBooleanValue("unicastResponsesToMulticastBroadcastsBlocked", windowsFirewallNetworkProfile.unicastResponsesToMulticastBroadcastsBlocked);
        writer.writeAdditionalData(windowsFirewallNetworkProfile.additionalData);
}
