import {StateManagementSetting} from './stateManagementSetting';
import {WindowsFirewallNetworkProfile} from './windowsFirewallNetworkProfile';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Windows Firewall Profile Policies. */
export class WindowsFirewallNetworkProfileImpl implements WindowsFirewallNetworkProfile {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Configures the firewall to merge authorized application rules from group policy with those from local store instead of ignoring the local store rules. When AuthorizedApplicationRulesFromGroupPolicyNotMerged and AuthorizedApplicationRulesFromGroupPolicyMerged are both true, AuthorizedApplicationRulesFromGroupPolicyMerged takes priority. */
    public authorizedApplicationRulesFromGroupPolicyMerged?: boolean | undefined;
    /** Configures the firewall to merge connection security rules from group policy with those from local store instead of ignoring the local store rules. When ConnectionSecurityRulesFromGroupPolicyNotMerged and ConnectionSecurityRulesFromGroupPolicyMerged are both true, ConnectionSecurityRulesFromGroupPolicyMerged takes priority. */
    public connectionSecurityRulesFromGroupPolicyMerged?: boolean | undefined;
    /** Configures the host device to allow or block the firewall and advanced security enforcement for the network profile. Possible values are: notConfigured, blocked, allowed. */
    public firewallEnabled?: StateManagementSetting | undefined;
    /** Configures the firewall to merge global port rules from group policy with those from local store instead of ignoring the local store rules. When GlobalPortRulesFromGroupPolicyNotMerged and GlobalPortRulesFromGroupPolicyMerged are both true, GlobalPortRulesFromGroupPolicyMerged takes priority. */
    public globalPortRulesFromGroupPolicyMerged?: boolean | undefined;
    /** Configures the firewall to block all incoming connections by default. When InboundConnectionsRequired and InboundConnectionsBlocked are both true, InboundConnectionsBlocked takes priority. */
    public inboundConnectionsBlocked?: boolean | undefined;
    /** Prevents the firewall from displaying notifications when an application is blocked from listening on a port. When InboundNotificationsRequired and InboundNotificationsBlocked are both true, InboundNotificationsBlocked takes priority. */
    public inboundNotificationsBlocked?: boolean | undefined;
    /** Configures the firewall to block all incoming traffic regardless of other policy settings. When IncomingTrafficRequired and IncomingTrafficBlocked are both true, IncomingTrafficBlocked takes priority. */
    public incomingTrafficBlocked?: boolean | undefined;
    /** Configures the firewall to block all outgoing connections by default. When OutboundConnectionsRequired and OutboundConnectionsBlocked are both true, OutboundConnectionsBlocked takes priority. This setting will get applied to Windows releases version 1809 and above. */
    public outboundConnectionsBlocked?: boolean | undefined;
    /** Configures the firewall to merge Firewall Rule policies from group policy with those from local store instead of ignoring the local store rules. When PolicyRulesFromGroupPolicyNotMerged and PolicyRulesFromGroupPolicyMerged are both true, PolicyRulesFromGroupPolicyMerged takes priority. */
    public policyRulesFromGroupPolicyMerged?: boolean | undefined;
    /** Configures the firewall to allow the host computer to respond to unsolicited network traffic of that traffic is secured by IPSec even when stealthModeBlocked is set to true. When SecuredPacketExemptionBlocked and SecuredPacketExemptionAllowed are both true, SecuredPacketExemptionAllowed takes priority. */
    public securedPacketExemptionAllowed?: boolean | undefined;
    /** Prevent the server from operating in stealth mode. When StealthModeRequired and StealthModeBlocked are both true, StealthModeBlocked takes priority. */
    public stealthModeBlocked?: boolean | undefined;
    /** Configures the firewall to block unicast responses to multicast broadcast traffic. When UnicastResponsesToMulticastBroadcastsRequired and UnicastResponsesToMulticastBroadcastsBlocked are both true, UnicastResponsesToMulticastBroadcastsBlocked takes priority. */
    public unicastResponsesToMulticastBroadcastsBlocked?: boolean | undefined;
    /**
     * Instantiates a new windowsFirewallNetworkProfile and sets the default values.
     * @param windowsFirewallNetworkProfileParameterValue 
     */
    public constructor(windowsFirewallNetworkProfileParameterValue?: WindowsFirewallNetworkProfile | undefined) {
        this.additionalData = windowsFirewallNetworkProfileParameterValue?.additionalData ? windowsFirewallNetworkProfileParameterValue?.additionalData! : {};
        this.authorizedApplicationRulesFromGroupPolicyMerged = windowsFirewallNetworkProfileParameterValue?.authorizedApplicationRulesFromGroupPolicyMerged;
        this.connectionSecurityRulesFromGroupPolicyMerged = windowsFirewallNetworkProfileParameterValue?.connectionSecurityRulesFromGroupPolicyMerged;
        this.firewallEnabled = windowsFirewallNetworkProfileParameterValue?.firewallEnabled;
        this.globalPortRulesFromGroupPolicyMerged = windowsFirewallNetworkProfileParameterValue?.globalPortRulesFromGroupPolicyMerged;
        this.inboundConnectionsBlocked = windowsFirewallNetworkProfileParameterValue?.inboundConnectionsBlocked;
        this.inboundNotificationsBlocked = windowsFirewallNetworkProfileParameterValue?.inboundNotificationsBlocked;
        this.incomingTrafficBlocked = windowsFirewallNetworkProfileParameterValue?.incomingTrafficBlocked;
        this.outboundConnectionsBlocked = windowsFirewallNetworkProfileParameterValue?.outboundConnectionsBlocked;
        this.policyRulesFromGroupPolicyMerged = windowsFirewallNetworkProfileParameterValue?.policyRulesFromGroupPolicyMerged;
        this.securedPacketExemptionAllowed = windowsFirewallNetworkProfileParameterValue?.securedPacketExemptionAllowed;
        this.stealthModeBlocked = windowsFirewallNetworkProfileParameterValue?.stealthModeBlocked;
        this.unicastResponsesToMulticastBroadcastsBlocked = windowsFirewallNetworkProfileParameterValue?.unicastResponsesToMulticastBroadcastsBlocked;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "authorizedApplicationRulesFromGroupPolicyMerged": n => { this.authorizedApplicationRulesFromGroupPolicyMerged = n.getBooleanValue(); },
            "connectionSecurityRulesFromGroupPolicyMerged": n => { this.connectionSecurityRulesFromGroupPolicyMerged = n.getBooleanValue(); },
            "firewallEnabled": n => { this.firewallEnabled = n.getEnumValue<StateManagementSetting>(StateManagementSetting); },
            "globalPortRulesFromGroupPolicyMerged": n => { this.globalPortRulesFromGroupPolicyMerged = n.getBooleanValue(); },
            "inboundConnectionsBlocked": n => { this.inboundConnectionsBlocked = n.getBooleanValue(); },
            "inboundNotificationsBlocked": n => { this.inboundNotificationsBlocked = n.getBooleanValue(); },
            "incomingTrafficBlocked": n => { this.incomingTrafficBlocked = n.getBooleanValue(); },
            "outboundConnectionsBlocked": n => { this.outboundConnectionsBlocked = n.getBooleanValue(); },
            "policyRulesFromGroupPolicyMerged": n => { this.policyRulesFromGroupPolicyMerged = n.getBooleanValue(); },
            "securedPacketExemptionAllowed": n => { this.securedPacketExemptionAllowed = n.getBooleanValue(); },
            "stealthModeBlocked": n => { this.stealthModeBlocked = n.getBooleanValue(); },
            "unicastResponsesToMulticastBroadcastsBlocked": n => { this.unicastResponsesToMulticastBroadcastsBlocked = n.getBooleanValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.authorizedApplicationRulesFromGroupPolicyMerged){
            writer.writeBooleanValue("authorizedApplicationRulesFromGroupPolicyMerged", this.authorizedApplicationRulesFromGroupPolicyMerged);
        }
        if(this.connectionSecurityRulesFromGroupPolicyMerged){
            writer.writeBooleanValue("connectionSecurityRulesFromGroupPolicyMerged", this.connectionSecurityRulesFromGroupPolicyMerged);
        }
        if(this.firewallEnabled){
            writer.writeEnumValue<StateManagementSetting>("firewallEnabled", this.firewallEnabled);
        }
        if(this.globalPortRulesFromGroupPolicyMerged){
            writer.writeBooleanValue("globalPortRulesFromGroupPolicyMerged", this.globalPortRulesFromGroupPolicyMerged);
        }
        if(this.inboundConnectionsBlocked){
            writer.writeBooleanValue("inboundConnectionsBlocked", this.inboundConnectionsBlocked);
        }
        if(this.inboundNotificationsBlocked){
            writer.writeBooleanValue("inboundNotificationsBlocked", this.inboundNotificationsBlocked);
        }
        if(this.incomingTrafficBlocked){
            writer.writeBooleanValue("incomingTrafficBlocked", this.incomingTrafficBlocked);
        }
        if(this.outboundConnectionsBlocked){
            writer.writeBooleanValue("outboundConnectionsBlocked", this.outboundConnectionsBlocked);
        }
        if(this.policyRulesFromGroupPolicyMerged){
            writer.writeBooleanValue("policyRulesFromGroupPolicyMerged", this.policyRulesFromGroupPolicyMerged);
        }
        if(this.securedPacketExemptionAllowed){
            writer.writeBooleanValue("securedPacketExemptionAllowed", this.securedPacketExemptionAllowed);
        }
        if(this.stealthModeBlocked){
            writer.writeBooleanValue("stealthModeBlocked", this.stealthModeBlocked);
        }
        if(this.unicastResponsesToMulticastBroadcastsBlocked){
            writer.writeBooleanValue("unicastResponsesToMulticastBroadcastsBlocked", this.unicastResponsesToMulticastBroadcastsBlocked);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
