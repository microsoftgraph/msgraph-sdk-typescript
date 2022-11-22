import {StateManagementSetting} from './stateManagementSetting';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Windows Firewall Profile Policies. */
export class WindowsFirewallNetworkProfile implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** Configures the firewall to merge authorized application rules from group policy with those from local store instead of ignoring the local store rules. When AuthorizedApplicationRulesFromGroupPolicyNotMerged and AuthorizedApplicationRulesFromGroupPolicyMerged are both true, AuthorizedApplicationRulesFromGroupPolicyMerged takes priority. */
    private _authorizedApplicationRulesFromGroupPolicyMerged?: boolean | undefined;
    /** Configures the firewall to merge connection security rules from group policy with those from local store instead of ignoring the local store rules. When ConnectionSecurityRulesFromGroupPolicyNotMerged and ConnectionSecurityRulesFromGroupPolicyMerged are both true, ConnectionSecurityRulesFromGroupPolicyMerged takes priority. */
    private _connectionSecurityRulesFromGroupPolicyMerged?: boolean | undefined;
    /** State Management Setting. */
    private _firewallEnabled?: StateManagementSetting | undefined;
    /** Configures the firewall to merge global port rules from group policy with those from local store instead of ignoring the local store rules. When GlobalPortRulesFromGroupPolicyNotMerged and GlobalPortRulesFromGroupPolicyMerged are both true, GlobalPortRulesFromGroupPolicyMerged takes priority. */
    private _globalPortRulesFromGroupPolicyMerged?: boolean | undefined;
    /** Configures the firewall to block all incoming connections by default. When InboundConnectionsRequired and InboundConnectionsBlocked are both true, InboundConnectionsBlocked takes priority. */
    private _inboundConnectionsBlocked?: boolean | undefined;
    /** Prevents the firewall from displaying notifications when an application is blocked from listening on a port. When InboundNotificationsRequired and InboundNotificationsBlocked are both true, InboundNotificationsBlocked takes priority. */
    private _inboundNotificationsBlocked?: boolean | undefined;
    /** Configures the firewall to block all incoming traffic regardless of other policy settings. When IncomingTrafficRequired and IncomingTrafficBlocked are both true, IncomingTrafficBlocked takes priority. */
    private _incomingTrafficBlocked?: boolean | undefined;
    /** The OdataType property */
    private _odataType?: string | undefined;
    /** Configures the firewall to block all outgoing connections by default. When OutboundConnectionsRequired and OutboundConnectionsBlocked are both true, OutboundConnectionsBlocked takes priority. This setting will get applied to Windows releases version 1809 and above. */
    private _outboundConnectionsBlocked?: boolean | undefined;
    /** Configures the firewall to merge Firewall Rule policies from group policy with those from local store instead of ignoring the local store rules. When PolicyRulesFromGroupPolicyNotMerged and PolicyRulesFromGroupPolicyMerged are both true, PolicyRulesFromGroupPolicyMerged takes priority. */
    private _policyRulesFromGroupPolicyMerged?: boolean | undefined;
    /** Configures the firewall to allow the host computer to respond to unsolicited network traffic of that traffic is secured by IPSec even when stealthModeBlocked is set to true. When SecuredPacketExemptionBlocked and SecuredPacketExemptionAllowed are both true, SecuredPacketExemptionAllowed takes priority. */
    private _securedPacketExemptionAllowed?: boolean | undefined;
    /** Prevent the server from operating in stealth mode. When StealthModeRequired and StealthModeBlocked are both true, StealthModeBlocked takes priority. */
    private _stealthModeBlocked?: boolean | undefined;
    /** Configures the firewall to block unicast responses to multicast broadcast traffic. When UnicastResponsesToMulticastBroadcastsRequired and UnicastResponsesToMulticastBroadcastsBlocked are both true, UnicastResponsesToMulticastBroadcastsBlocked takes priority. */
    private _unicastResponsesToMulticastBroadcastsBlocked?: boolean | undefined;
    /**
     * Gets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @returns a Record<string, unknown>
     */
    public get additionalData() {
        return this._additionalData;
    };
    /**
     * Sets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @param value Value to set for the AdditionalData property.
     */
    public set additionalData(value: Record<string, unknown>) {
        this._additionalData = value;
    };
    /**
     * Gets the authorizedApplicationRulesFromGroupPolicyMerged property value. Configures the firewall to merge authorized application rules from group policy with those from local store instead of ignoring the local store rules. When AuthorizedApplicationRulesFromGroupPolicyNotMerged and AuthorizedApplicationRulesFromGroupPolicyMerged are both true, AuthorizedApplicationRulesFromGroupPolicyMerged takes priority.
     * @returns a boolean
     */
    public get authorizedApplicationRulesFromGroupPolicyMerged() {
        return this._authorizedApplicationRulesFromGroupPolicyMerged;
    };
    /**
     * Sets the authorizedApplicationRulesFromGroupPolicyMerged property value. Configures the firewall to merge authorized application rules from group policy with those from local store instead of ignoring the local store rules. When AuthorizedApplicationRulesFromGroupPolicyNotMerged and AuthorizedApplicationRulesFromGroupPolicyMerged are both true, AuthorizedApplicationRulesFromGroupPolicyMerged takes priority.
     * @param value Value to set for the authorizedApplicationRulesFromGroupPolicyMerged property.
     */
    public set authorizedApplicationRulesFromGroupPolicyMerged(value: boolean | undefined) {
        this._authorizedApplicationRulesFromGroupPolicyMerged = value;
    };
    /**
     * Gets the connectionSecurityRulesFromGroupPolicyMerged property value. Configures the firewall to merge connection security rules from group policy with those from local store instead of ignoring the local store rules. When ConnectionSecurityRulesFromGroupPolicyNotMerged and ConnectionSecurityRulesFromGroupPolicyMerged are both true, ConnectionSecurityRulesFromGroupPolicyMerged takes priority.
     * @returns a boolean
     */
    public get connectionSecurityRulesFromGroupPolicyMerged() {
        return this._connectionSecurityRulesFromGroupPolicyMerged;
    };
    /**
     * Sets the connectionSecurityRulesFromGroupPolicyMerged property value. Configures the firewall to merge connection security rules from group policy with those from local store instead of ignoring the local store rules. When ConnectionSecurityRulesFromGroupPolicyNotMerged and ConnectionSecurityRulesFromGroupPolicyMerged are both true, ConnectionSecurityRulesFromGroupPolicyMerged takes priority.
     * @param value Value to set for the connectionSecurityRulesFromGroupPolicyMerged property.
     */
    public set connectionSecurityRulesFromGroupPolicyMerged(value: boolean | undefined) {
        this._connectionSecurityRulesFromGroupPolicyMerged = value;
    };
    /**
     * Instantiates a new windowsFirewallNetworkProfile and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the firewallEnabled property value. State Management Setting.
     * @returns a stateManagementSetting
     */
    public get firewallEnabled() {
        return this._firewallEnabled;
    };
    /**
     * Sets the firewallEnabled property value. State Management Setting.
     * @param value Value to set for the firewallEnabled property.
     */
    public set firewallEnabled(value: StateManagementSetting | undefined) {
        this._firewallEnabled = value;
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
            "@odata.type": n => { this.odataType = n.getStringValue(); },
            "outboundConnectionsBlocked": n => { this.outboundConnectionsBlocked = n.getBooleanValue(); },
            "policyRulesFromGroupPolicyMerged": n => { this.policyRulesFromGroupPolicyMerged = n.getBooleanValue(); },
            "securedPacketExemptionAllowed": n => { this.securedPacketExemptionAllowed = n.getBooleanValue(); },
            "stealthModeBlocked": n => { this.stealthModeBlocked = n.getBooleanValue(); },
            "unicastResponsesToMulticastBroadcastsBlocked": n => { this.unicastResponsesToMulticastBroadcastsBlocked = n.getBooleanValue(); },
        };
    };
    /**
     * Gets the globalPortRulesFromGroupPolicyMerged property value. Configures the firewall to merge global port rules from group policy with those from local store instead of ignoring the local store rules. When GlobalPortRulesFromGroupPolicyNotMerged and GlobalPortRulesFromGroupPolicyMerged are both true, GlobalPortRulesFromGroupPolicyMerged takes priority.
     * @returns a boolean
     */
    public get globalPortRulesFromGroupPolicyMerged() {
        return this._globalPortRulesFromGroupPolicyMerged;
    };
    /**
     * Sets the globalPortRulesFromGroupPolicyMerged property value. Configures the firewall to merge global port rules from group policy with those from local store instead of ignoring the local store rules. When GlobalPortRulesFromGroupPolicyNotMerged and GlobalPortRulesFromGroupPolicyMerged are both true, GlobalPortRulesFromGroupPolicyMerged takes priority.
     * @param value Value to set for the globalPortRulesFromGroupPolicyMerged property.
     */
    public set globalPortRulesFromGroupPolicyMerged(value: boolean | undefined) {
        this._globalPortRulesFromGroupPolicyMerged = value;
    };
    /**
     * Gets the inboundConnectionsBlocked property value. Configures the firewall to block all incoming connections by default. When InboundConnectionsRequired and InboundConnectionsBlocked are both true, InboundConnectionsBlocked takes priority.
     * @returns a boolean
     */
    public get inboundConnectionsBlocked() {
        return this._inboundConnectionsBlocked;
    };
    /**
     * Sets the inboundConnectionsBlocked property value. Configures the firewall to block all incoming connections by default. When InboundConnectionsRequired and InboundConnectionsBlocked are both true, InboundConnectionsBlocked takes priority.
     * @param value Value to set for the inboundConnectionsBlocked property.
     */
    public set inboundConnectionsBlocked(value: boolean | undefined) {
        this._inboundConnectionsBlocked = value;
    };
    /**
     * Gets the inboundNotificationsBlocked property value. Prevents the firewall from displaying notifications when an application is blocked from listening on a port. When InboundNotificationsRequired and InboundNotificationsBlocked are both true, InboundNotificationsBlocked takes priority.
     * @returns a boolean
     */
    public get inboundNotificationsBlocked() {
        return this._inboundNotificationsBlocked;
    };
    /**
     * Sets the inboundNotificationsBlocked property value. Prevents the firewall from displaying notifications when an application is blocked from listening on a port. When InboundNotificationsRequired and InboundNotificationsBlocked are both true, InboundNotificationsBlocked takes priority.
     * @param value Value to set for the inboundNotificationsBlocked property.
     */
    public set inboundNotificationsBlocked(value: boolean | undefined) {
        this._inboundNotificationsBlocked = value;
    };
    /**
     * Gets the incomingTrafficBlocked property value. Configures the firewall to block all incoming traffic regardless of other policy settings. When IncomingTrafficRequired and IncomingTrafficBlocked are both true, IncomingTrafficBlocked takes priority.
     * @returns a boolean
     */
    public get incomingTrafficBlocked() {
        return this._incomingTrafficBlocked;
    };
    /**
     * Sets the incomingTrafficBlocked property value. Configures the firewall to block all incoming traffic regardless of other policy settings. When IncomingTrafficRequired and IncomingTrafficBlocked are both true, IncomingTrafficBlocked takes priority.
     * @param value Value to set for the incomingTrafficBlocked property.
     */
    public set incomingTrafficBlocked(value: boolean | undefined) {
        this._incomingTrafficBlocked = value;
    };
    /**
     * Gets the @odata.type property value. The OdataType property
     * @returns a string
     */
    public get odataType() {
        return this._odataType;
    };
    /**
     * Sets the @odata.type property value. The OdataType property
     * @param value Value to set for the OdataType property.
     */
    public set odataType(value: string | undefined) {
        this._odataType = value;
    };
    /**
     * Gets the outboundConnectionsBlocked property value. Configures the firewall to block all outgoing connections by default. When OutboundConnectionsRequired and OutboundConnectionsBlocked are both true, OutboundConnectionsBlocked takes priority. This setting will get applied to Windows releases version 1809 and above.
     * @returns a boolean
     */
    public get outboundConnectionsBlocked() {
        return this._outboundConnectionsBlocked;
    };
    /**
     * Sets the outboundConnectionsBlocked property value. Configures the firewall to block all outgoing connections by default. When OutboundConnectionsRequired and OutboundConnectionsBlocked are both true, OutboundConnectionsBlocked takes priority. This setting will get applied to Windows releases version 1809 and above.
     * @param value Value to set for the outboundConnectionsBlocked property.
     */
    public set outboundConnectionsBlocked(value: boolean | undefined) {
        this._outboundConnectionsBlocked = value;
    };
    /**
     * Gets the policyRulesFromGroupPolicyMerged property value. Configures the firewall to merge Firewall Rule policies from group policy with those from local store instead of ignoring the local store rules. When PolicyRulesFromGroupPolicyNotMerged and PolicyRulesFromGroupPolicyMerged are both true, PolicyRulesFromGroupPolicyMerged takes priority.
     * @returns a boolean
     */
    public get policyRulesFromGroupPolicyMerged() {
        return this._policyRulesFromGroupPolicyMerged;
    };
    /**
     * Sets the policyRulesFromGroupPolicyMerged property value. Configures the firewall to merge Firewall Rule policies from group policy with those from local store instead of ignoring the local store rules. When PolicyRulesFromGroupPolicyNotMerged and PolicyRulesFromGroupPolicyMerged are both true, PolicyRulesFromGroupPolicyMerged takes priority.
     * @param value Value to set for the policyRulesFromGroupPolicyMerged property.
     */
    public set policyRulesFromGroupPolicyMerged(value: boolean | undefined) {
        this._policyRulesFromGroupPolicyMerged = value;
    };
    /**
     * Gets the securedPacketExemptionAllowed property value. Configures the firewall to allow the host computer to respond to unsolicited network traffic of that traffic is secured by IPSec even when stealthModeBlocked is set to true. When SecuredPacketExemptionBlocked and SecuredPacketExemptionAllowed are both true, SecuredPacketExemptionAllowed takes priority.
     * @returns a boolean
     */
    public get securedPacketExemptionAllowed() {
        return this._securedPacketExemptionAllowed;
    };
    /**
     * Sets the securedPacketExemptionAllowed property value. Configures the firewall to allow the host computer to respond to unsolicited network traffic of that traffic is secured by IPSec even when stealthModeBlocked is set to true. When SecuredPacketExemptionBlocked and SecuredPacketExemptionAllowed are both true, SecuredPacketExemptionAllowed takes priority.
     * @param value Value to set for the securedPacketExemptionAllowed property.
     */
    public set securedPacketExemptionAllowed(value: boolean | undefined) {
        this._securedPacketExemptionAllowed = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeBooleanValue("authorizedApplicationRulesFromGroupPolicyMerged", this.authorizedApplicationRulesFromGroupPolicyMerged);
        writer.writeBooleanValue("connectionSecurityRulesFromGroupPolicyMerged", this.connectionSecurityRulesFromGroupPolicyMerged);
        writer.writeEnumValue<StateManagementSetting>("firewallEnabled", this.firewallEnabled);
        writer.writeBooleanValue("globalPortRulesFromGroupPolicyMerged", this.globalPortRulesFromGroupPolicyMerged);
        writer.writeBooleanValue("inboundConnectionsBlocked", this.inboundConnectionsBlocked);
        writer.writeBooleanValue("inboundNotificationsBlocked", this.inboundNotificationsBlocked);
        writer.writeBooleanValue("incomingTrafficBlocked", this.incomingTrafficBlocked);
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeBooleanValue("outboundConnectionsBlocked", this.outboundConnectionsBlocked);
        writer.writeBooleanValue("policyRulesFromGroupPolicyMerged", this.policyRulesFromGroupPolicyMerged);
        writer.writeBooleanValue("securedPacketExemptionAllowed", this.securedPacketExemptionAllowed);
        writer.writeBooleanValue("stealthModeBlocked", this.stealthModeBlocked);
        writer.writeBooleanValue("unicastResponsesToMulticastBroadcastsBlocked", this.unicastResponsesToMulticastBroadcastsBlocked);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the stealthModeBlocked property value. Prevent the server from operating in stealth mode. When StealthModeRequired and StealthModeBlocked are both true, StealthModeBlocked takes priority.
     * @returns a boolean
     */
    public get stealthModeBlocked() {
        return this._stealthModeBlocked;
    };
    /**
     * Sets the stealthModeBlocked property value. Prevent the server from operating in stealth mode. When StealthModeRequired and StealthModeBlocked are both true, StealthModeBlocked takes priority.
     * @param value Value to set for the stealthModeBlocked property.
     */
    public set stealthModeBlocked(value: boolean | undefined) {
        this._stealthModeBlocked = value;
    };
    /**
     * Gets the unicastResponsesToMulticastBroadcastsBlocked property value. Configures the firewall to block unicast responses to multicast broadcast traffic. When UnicastResponsesToMulticastBroadcastsRequired and UnicastResponsesToMulticastBroadcastsBlocked are both true, UnicastResponsesToMulticastBroadcastsBlocked takes priority.
     * @returns a boolean
     */
    public get unicastResponsesToMulticastBroadcastsBlocked() {
        return this._unicastResponsesToMulticastBroadcastsBlocked;
    };
    /**
     * Sets the unicastResponsesToMulticastBroadcastsBlocked property value. Configures the firewall to block unicast responses to multicast broadcast traffic. When UnicastResponsesToMulticastBroadcastsRequired and UnicastResponsesToMulticastBroadcastsBlocked are both true, UnicastResponsesToMulticastBroadcastsBlocked takes priority.
     * @param value Value to set for the unicastResponsesToMulticastBroadcastsBlocked property.
     */
    public set unicastResponsesToMulticastBroadcastsBlocked(value: boolean | undefined) {
        this._unicastResponsesToMulticastBroadcastsBlocked = value;
    };
}
