import {ApplicationsMember1, CrossTenantAccessPolicyB2BSetting, CrossTenantAccessPolicyInboundTrust} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class CrossTenantAccessPolicyConfigurationPartner implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** Defines your partner-specific configuration for users from other organizations accessing your resources via Azure AD B2B collaboration. */
    private _b2bCollaborationInbound?: CrossTenantAccessPolicyB2BSetting | ApplicationsMember1 | undefined;
    /** Defines your partner-specific configuration for users in your organization going outbound to access resources in another organization via Azure AD B2B collaboration. */
    private _b2bCollaborationOutbound?: CrossTenantAccessPolicyB2BSetting | ApplicationsMember1 | undefined;
    /** Defines your partner-specific configuration for users from other organizations accessing your resources via Azure B2B direct connect. */
    private _b2bDirectConnectInbound?: CrossTenantAccessPolicyB2BSetting | ApplicationsMember1 | undefined;
    /** Defines your partner-specific configuration for users in your organization going outbound to access resources in another organization via Azure AD B2B direct connect. */
    private _b2bDirectConnectOutbound?: CrossTenantAccessPolicyB2BSetting | ApplicationsMember1 | undefined;
    /** Determines the partner-specific configuration for trusting other Conditional Access claims from external Azure AD organizations. */
    private _inboundTrust?: CrossTenantAccessPolicyInboundTrust | ApplicationsMember1 | undefined;
    /** Identifies whether the partner-specific configuration is a Cloud Service Provider for your organization. */
    private _isServiceProvider?: boolean | undefined;
    /** The tenant identifier for the partner Azure AD organization. Read-only. Key. */
    private _tenantId?: string | undefined;
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
     * Gets the b2bCollaborationInbound property value. Defines your partner-specific configuration for users from other organizations accessing your resources via Azure AD B2B collaboration.
     * @returns a applications
     */
    public get b2bCollaborationInbound() {
        return this._b2bCollaborationInbound;
    };
    /**
     * Sets the b2bCollaborationInbound property value. Defines your partner-specific configuration for users from other organizations accessing your resources via Azure AD B2B collaboration.
     * @param value Value to set for the b2bCollaborationInbound property.
     */
    public set b2bCollaborationInbound(value: CrossTenantAccessPolicyB2BSetting | ApplicationsMember1 | undefined) {
        this._b2bCollaborationInbound = value;
    };
    /**
     * Gets the b2bCollaborationOutbound property value. Defines your partner-specific configuration for users in your organization going outbound to access resources in another organization via Azure AD B2B collaboration.
     * @returns a applications
     */
    public get b2bCollaborationOutbound() {
        return this._b2bCollaborationOutbound;
    };
    /**
     * Sets the b2bCollaborationOutbound property value. Defines your partner-specific configuration for users in your organization going outbound to access resources in another organization via Azure AD B2B collaboration.
     * @param value Value to set for the b2bCollaborationOutbound property.
     */
    public set b2bCollaborationOutbound(value: CrossTenantAccessPolicyB2BSetting | ApplicationsMember1 | undefined) {
        this._b2bCollaborationOutbound = value;
    };
    /**
     * Gets the b2bDirectConnectInbound property value. Defines your partner-specific configuration for users from other organizations accessing your resources via Azure B2B direct connect.
     * @returns a applications
     */
    public get b2bDirectConnectInbound() {
        return this._b2bDirectConnectInbound;
    };
    /**
     * Sets the b2bDirectConnectInbound property value. Defines your partner-specific configuration for users from other organizations accessing your resources via Azure B2B direct connect.
     * @param value Value to set for the b2bDirectConnectInbound property.
     */
    public set b2bDirectConnectInbound(value: CrossTenantAccessPolicyB2BSetting | ApplicationsMember1 | undefined) {
        this._b2bDirectConnectInbound = value;
    };
    /**
     * Gets the b2bDirectConnectOutbound property value. Defines your partner-specific configuration for users in your organization going outbound to access resources in another organization via Azure AD B2B direct connect.
     * @returns a applications
     */
    public get b2bDirectConnectOutbound() {
        return this._b2bDirectConnectOutbound;
    };
    /**
     * Sets the b2bDirectConnectOutbound property value. Defines your partner-specific configuration for users in your organization going outbound to access resources in another organization via Azure AD B2B direct connect.
     * @param value Value to set for the b2bDirectConnectOutbound property.
     */
    public set b2bDirectConnectOutbound(value: CrossTenantAccessPolicyB2BSetting | ApplicationsMember1 | undefined) {
        this._b2bDirectConnectOutbound = value;
    };
    /**
     * Instantiates a new crossTenantAccessPolicyConfigurationPartner and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "b2bCollaborationInbound": n => { this.b2bCollaborationInbound = n.getObjectValue<CrossTenantAccessPolicyB2BSetting>(createCrossTenantAccessPolicyB2BSettingFromDiscriminatorValue); },
            "b2bCollaborationOutbound": n => { this.b2bCollaborationOutbound = n.getObjectValue<CrossTenantAccessPolicyB2BSetting>(createCrossTenantAccessPolicyB2BSettingFromDiscriminatorValue); },
            "b2bDirectConnectInbound": n => { this.b2bDirectConnectInbound = n.getObjectValue<CrossTenantAccessPolicyB2BSetting>(createCrossTenantAccessPolicyB2BSettingFromDiscriminatorValue); },
            "b2bDirectConnectOutbound": n => { this.b2bDirectConnectOutbound = n.getObjectValue<CrossTenantAccessPolicyB2BSetting>(createCrossTenantAccessPolicyB2BSettingFromDiscriminatorValue); },
            "inboundTrust": n => { this.inboundTrust = n.getObjectValue<CrossTenantAccessPolicyInboundTrust>(createCrossTenantAccessPolicyInboundTrustFromDiscriminatorValue); },
            "isServiceProvider": n => { this.isServiceProvider = n.getBooleanValue(); },
            "tenantId": n => { this.tenantId = n.getStringValue(); },
        };
    };
    /**
     * Gets the inboundTrust property value. Determines the partner-specific configuration for trusting other Conditional Access claims from external Azure AD organizations.
     * @returns a applications
     */
    public get inboundTrust() {
        return this._inboundTrust;
    };
    /**
     * Sets the inboundTrust property value. Determines the partner-specific configuration for trusting other Conditional Access claims from external Azure AD organizations.
     * @param value Value to set for the inboundTrust property.
     */
    public set inboundTrust(value: CrossTenantAccessPolicyInboundTrust | ApplicationsMember1 | undefined) {
        this._inboundTrust = value;
    };
    /**
     * Gets the isServiceProvider property value. Identifies whether the partner-specific configuration is a Cloud Service Provider for your organization.
     * @returns a boolean
     */
    public get isServiceProvider() {
        return this._isServiceProvider;
    };
    /**
     * Sets the isServiceProvider property value. Identifies whether the partner-specific configuration is a Cloud Service Provider for your organization.
     * @param value Value to set for the isServiceProvider property.
     */
    public set isServiceProvider(value: boolean | undefined) {
        this._isServiceProvider = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeObjectValue<CrossTenantAccessPolicyB2BSetting>("b2bCollaborationInbound", this.b2bCollaborationInbound);
        writer.writeObjectValue<CrossTenantAccessPolicyB2BSetting>("b2bCollaborationOutbound", this.b2bCollaborationOutbound);
        writer.writeObjectValue<CrossTenantAccessPolicyB2BSetting>("b2bDirectConnectInbound", this.b2bDirectConnectInbound);
        writer.writeObjectValue<CrossTenantAccessPolicyB2BSetting>("b2bDirectConnectOutbound", this.b2bDirectConnectOutbound);
        writer.writeObjectValue<CrossTenantAccessPolicyInboundTrust>("inboundTrust", this.inboundTrust);
        writer.writeBooleanValue("isServiceProvider", this.isServiceProvider);
        writer.writeStringValue("tenantId", this.tenantId);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the tenantId property value. The tenant identifier for the partner Azure AD organization. Read-only. Key.
     * @returns a string
     */
    public get tenantId() {
        return this._tenantId;
    };
    /**
     * Sets the tenantId property value. The tenant identifier for the partner Azure AD organization. Read-only. Key.
     * @param value Value to set for the tenantId property.
     */
    public set tenantId(value: string | undefined) {
        this._tenantId = value;
    };
}
