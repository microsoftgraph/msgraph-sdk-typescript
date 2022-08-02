import {createCrossTenantAccessPolicyB2BSettingFromDiscriminatorValue} from './createCrossTenantAccessPolicyB2BSettingFromDiscriminatorValue';
import {createCrossTenantAccessPolicyInboundTrustFromDiscriminatorValue} from './createCrossTenantAccessPolicyInboundTrustFromDiscriminatorValue';
import {CrossTenantAccessPolicyB2BSetting, CrossTenantAccessPolicyInboundTrust, Entity} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class CrossTenantAccessPolicyConfigurationDefault extends Entity implements Parsable {
    /** Defines your default configuration for users from other organizations accessing your resources via Azure AD B2B collaboration. */
    private _b2bCollaborationInbound?: CrossTenantAccessPolicyB2BSetting | undefined;
    /** Defines your default configuration for users in your organization going outbound to access resources in another organization via Azure AD B2B collaboration. */
    private _b2bCollaborationOutbound?: CrossTenantAccessPolicyB2BSetting | undefined;
    /** Defines your default configuration for users from other organizations accessing your resources via Azure AD B2B direct connect. */
    private _b2bDirectConnectInbound?: CrossTenantAccessPolicyB2BSetting | undefined;
    /** Defines your default configuration for users in your organization going outbound to access resources in another organization via Azure AD B2B direct connect. */
    private _b2bDirectConnectOutbound?: CrossTenantAccessPolicyB2BSetting | undefined;
    /** Determines the default configuration for trusting other Conditional Access claims from external Azure AD organizations. */
    private _inboundTrust?: CrossTenantAccessPolicyInboundTrust | undefined;
    /** If true, the default configuration is set to the system default configuration. If false, the default settings have been customized. */
    private _isServiceDefault?: boolean | undefined;
    /**
     * Gets the b2bCollaborationInbound property value. Defines your default configuration for users from other organizations accessing your resources via Azure AD B2B collaboration.
     * @returns a crossTenantAccessPolicyB2BSetting
     */
    public get b2bCollaborationInbound() {
        return this._b2bCollaborationInbound;
    };
    /**
     * Sets the b2bCollaborationInbound property value. Defines your default configuration for users from other organizations accessing your resources via Azure AD B2B collaboration.
     * @param value Value to set for the b2bCollaborationInbound property.
     */
    public set b2bCollaborationInbound(value: CrossTenantAccessPolicyB2BSetting | undefined) {
        this._b2bCollaborationInbound = value;
    };
    /**
     * Gets the b2bCollaborationOutbound property value. Defines your default configuration for users in your organization going outbound to access resources in another organization via Azure AD B2B collaboration.
     * @returns a crossTenantAccessPolicyB2BSetting
     */
    public get b2bCollaborationOutbound() {
        return this._b2bCollaborationOutbound;
    };
    /**
     * Sets the b2bCollaborationOutbound property value. Defines your default configuration for users in your organization going outbound to access resources in another organization via Azure AD B2B collaboration.
     * @param value Value to set for the b2bCollaborationOutbound property.
     */
    public set b2bCollaborationOutbound(value: CrossTenantAccessPolicyB2BSetting | undefined) {
        this._b2bCollaborationOutbound = value;
    };
    /**
     * Gets the b2bDirectConnectInbound property value. Defines your default configuration for users from other organizations accessing your resources via Azure AD B2B direct connect.
     * @returns a crossTenantAccessPolicyB2BSetting
     */
    public get b2bDirectConnectInbound() {
        return this._b2bDirectConnectInbound;
    };
    /**
     * Sets the b2bDirectConnectInbound property value. Defines your default configuration for users from other organizations accessing your resources via Azure AD B2B direct connect.
     * @param value Value to set for the b2bDirectConnectInbound property.
     */
    public set b2bDirectConnectInbound(value: CrossTenantAccessPolicyB2BSetting | undefined) {
        this._b2bDirectConnectInbound = value;
    };
    /**
     * Gets the b2bDirectConnectOutbound property value. Defines your default configuration for users in your organization going outbound to access resources in another organization via Azure AD B2B direct connect.
     * @returns a crossTenantAccessPolicyB2BSetting
     */
    public get b2bDirectConnectOutbound() {
        return this._b2bDirectConnectOutbound;
    };
    /**
     * Sets the b2bDirectConnectOutbound property value. Defines your default configuration for users in your organization going outbound to access resources in another organization via Azure AD B2B direct connect.
     * @param value Value to set for the b2bDirectConnectOutbound property.
     */
    public set b2bDirectConnectOutbound(value: CrossTenantAccessPolicyB2BSetting | undefined) {
        this._b2bDirectConnectOutbound = value;
    };
    /**
     * Instantiates a new crossTenantAccessPolicyConfigurationDefault and sets the default values.
     */
    public constructor() {
        super();
        this.odataType = "#microsoft.graph.crossTenantAccessPolicyConfigurationDefault";
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "b2bCollaborationInbound": n => { this.b2bCollaborationInbound = n.getObjectValue<CrossTenantAccessPolicyB2BSetting>(createCrossTenantAccessPolicyB2BSettingFromDiscriminatorValue); },
            "b2bCollaborationOutbound": n => { this.b2bCollaborationOutbound = n.getObjectValue<CrossTenantAccessPolicyB2BSetting>(createCrossTenantAccessPolicyB2BSettingFromDiscriminatorValue); },
            "b2bDirectConnectInbound": n => { this.b2bDirectConnectInbound = n.getObjectValue<CrossTenantAccessPolicyB2BSetting>(createCrossTenantAccessPolicyB2BSettingFromDiscriminatorValue); },
            "b2bDirectConnectOutbound": n => { this.b2bDirectConnectOutbound = n.getObjectValue<CrossTenantAccessPolicyB2BSetting>(createCrossTenantAccessPolicyB2BSettingFromDiscriminatorValue); },
            "inboundTrust": n => { this.inboundTrust = n.getObjectValue<CrossTenantAccessPolicyInboundTrust>(createCrossTenantAccessPolicyInboundTrustFromDiscriminatorValue); },
            "isServiceDefault": n => { this.isServiceDefault = n.getBooleanValue(); },
        };
    };
    /**
     * Gets the inboundTrust property value. Determines the default configuration for trusting other Conditional Access claims from external Azure AD organizations.
     * @returns a crossTenantAccessPolicyInboundTrust
     */
    public get inboundTrust() {
        return this._inboundTrust;
    };
    /**
     * Sets the inboundTrust property value. Determines the default configuration for trusting other Conditional Access claims from external Azure AD organizations.
     * @param value Value to set for the inboundTrust property.
     */
    public set inboundTrust(value: CrossTenantAccessPolicyInboundTrust | undefined) {
        this._inboundTrust = value;
    };
    /**
     * Gets the isServiceDefault property value. If true, the default configuration is set to the system default configuration. If false, the default settings have been customized.
     * @returns a boolean
     */
    public get isServiceDefault() {
        return this._isServiceDefault;
    };
    /**
     * Sets the isServiceDefault property value. If true, the default configuration is set to the system default configuration. If false, the default settings have been customized.
     * @param value Value to set for the isServiceDefault property.
     */
    public set isServiceDefault(value: boolean | undefined) {
        this._isServiceDefault = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeObjectValue<CrossTenantAccessPolicyB2BSetting>("b2bCollaborationInbound", this.b2bCollaborationInbound);
        writer.writeObjectValue<CrossTenantAccessPolicyB2BSetting>("b2bCollaborationOutbound", this.b2bCollaborationOutbound);
        writer.writeObjectValue<CrossTenantAccessPolicyB2BSetting>("b2bDirectConnectInbound", this.b2bDirectConnectInbound);
        writer.writeObjectValue<CrossTenantAccessPolicyB2BSetting>("b2bDirectConnectOutbound", this.b2bDirectConnectOutbound);
        writer.writeObjectValue<CrossTenantAccessPolicyInboundTrust>("inboundTrust", this.inboundTrust);
        writer.writeBooleanValue("isServiceDefault", this.isServiceDefault);
    };
}
