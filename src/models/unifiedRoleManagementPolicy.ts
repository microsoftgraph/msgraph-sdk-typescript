import {createIdentityFromDiscriminatorValue} from './createIdentityFromDiscriminatorValue';
import {createUnifiedRoleManagementPolicyRuleFromDiscriminatorValue} from './createUnifiedRoleManagementPolicyRuleFromDiscriminatorValue';
import {Entity, Identity, UnifiedRoleManagementPolicyRule} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the collection of application entities.
 */
export class UnifiedRoleManagementPolicy extends Entity implements Parsable {
    /** Description for the policy. */
    private _description?: string | undefined;
    /** Display name for the policy. */
    private _displayName?: string | undefined;
    /** The list of effective rules like approval rules and expiration rules evaluated based on inherited referenced rules. For example, if there is a tenant-wide policy to enforce enabling an approval rule, the effective rule will be to enable approval even if the policy has a rule to disable approval. Supports $expand. */
    private _effectiveRules?: UnifiedRoleManagementPolicyRule[] | undefined;
    /** This can only be set to true for a single tenant-wide policy which will apply to all scopes and roles. Set the scopeId to / and scopeType to Directory. Supports $filter (eq, ne). */
    private _isOrganizationDefault?: boolean | undefined;
    /** The identity who last modified the role setting. */
    private _lastModifiedBy?: Identity | undefined;
    /** The time when the role setting was last modified. */
    private _lastModifiedDateTime?: Date | undefined;
    /** The collection of rules like approval rules and expiration rules. Supports $expand. */
    private _rules?: UnifiedRoleManagementPolicyRule[] | undefined;
    /** The identifier of the scope where the policy is created. Can be / for the tenant or a group ID. Required. */
    private _scopeId?: string | undefined;
    /** The type of the scope where the policy is created. One of Directory, DirectoryRole. Required. */
    private _scopeType?: string | undefined;
    /**
     * Instantiates a new unifiedRoleManagementPolicy and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the description property value. Description for the policy.
     * @returns a string
     */
    public get description() {
        return this._description;
    };
    /**
     * Sets the description property value. Description for the policy.
     * @param value Value to set for the description property.
     */
    public set description(value: string | undefined) {
        this._description = value;
    };
    /**
     * Gets the displayName property value. Display name for the policy.
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Sets the displayName property value. Display name for the policy.
     * @param value Value to set for the displayName property.
     */
    public set displayName(value: string | undefined) {
        this._displayName = value;
    };
    /**
     * Gets the effectiveRules property value. The list of effective rules like approval rules and expiration rules evaluated based on inherited referenced rules. For example, if there is a tenant-wide policy to enforce enabling an approval rule, the effective rule will be to enable approval even if the policy has a rule to disable approval. Supports $expand.
     * @returns a unifiedRoleManagementPolicyRule
     */
    public get effectiveRules() {
        return this._effectiveRules;
    };
    /**
     * Sets the effectiveRules property value. The list of effective rules like approval rules and expiration rules evaluated based on inherited referenced rules. For example, if there is a tenant-wide policy to enforce enabling an approval rule, the effective rule will be to enable approval even if the policy has a rule to disable approval. Supports $expand.
     * @param value Value to set for the effectiveRules property.
     */
    public set effectiveRules(value: UnifiedRoleManagementPolicyRule[] | undefined) {
        this._effectiveRules = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "description": n => { this.description = n.getStringValue(); },
            "displayName": n => { this.displayName = n.getStringValue(); },
            "effectiveRules": n => { this.effectiveRules = n.getCollectionOfObjectValues<UnifiedRoleManagementPolicyRule>(createUnifiedRoleManagementPolicyRuleFromDiscriminatorValue); },
            "isOrganizationDefault": n => { this.isOrganizationDefault = n.getBooleanValue(); },
            "lastModifiedBy": n => { this.lastModifiedBy = n.getObjectValue<Identity>(createIdentityFromDiscriminatorValue); },
            "lastModifiedDateTime": n => { this.lastModifiedDateTime = n.getDateValue(); },
            "rules": n => { this.rules = n.getCollectionOfObjectValues<UnifiedRoleManagementPolicyRule>(createUnifiedRoleManagementPolicyRuleFromDiscriminatorValue); },
            "scopeId": n => { this.scopeId = n.getStringValue(); },
            "scopeType": n => { this.scopeType = n.getStringValue(); },
        };
    };
    /**
     * Gets the isOrganizationDefault property value. This can only be set to true for a single tenant-wide policy which will apply to all scopes and roles. Set the scopeId to / and scopeType to Directory. Supports $filter (eq, ne).
     * @returns a boolean
     */
    public get isOrganizationDefault() {
        return this._isOrganizationDefault;
    };
    /**
     * Sets the isOrganizationDefault property value. This can only be set to true for a single tenant-wide policy which will apply to all scopes and roles. Set the scopeId to / and scopeType to Directory. Supports $filter (eq, ne).
     * @param value Value to set for the isOrganizationDefault property.
     */
    public set isOrganizationDefault(value: boolean | undefined) {
        this._isOrganizationDefault = value;
    };
    /**
     * Gets the lastModifiedBy property value. The identity who last modified the role setting.
     * @returns a identity
     */
    public get lastModifiedBy() {
        return this._lastModifiedBy;
    };
    /**
     * Sets the lastModifiedBy property value. The identity who last modified the role setting.
     * @param value Value to set for the lastModifiedBy property.
     */
    public set lastModifiedBy(value: Identity | undefined) {
        this._lastModifiedBy = value;
    };
    /**
     * Gets the lastModifiedDateTime property value. The time when the role setting was last modified.
     * @returns a Date
     */
    public get lastModifiedDateTime() {
        return this._lastModifiedDateTime;
    };
    /**
     * Sets the lastModifiedDateTime property value. The time when the role setting was last modified.
     * @param value Value to set for the lastModifiedDateTime property.
     */
    public set lastModifiedDateTime(value: Date | undefined) {
        this._lastModifiedDateTime = value;
    };
    /**
     * Gets the rules property value. The collection of rules like approval rules and expiration rules. Supports $expand.
     * @returns a unifiedRoleManagementPolicyRule
     */
    public get rules() {
        return this._rules;
    };
    /**
     * Sets the rules property value. The collection of rules like approval rules and expiration rules. Supports $expand.
     * @param value Value to set for the rules property.
     */
    public set rules(value: UnifiedRoleManagementPolicyRule[] | undefined) {
        this._rules = value;
    };
    /**
     * Gets the scopeId property value. The identifier of the scope where the policy is created. Can be / for the tenant or a group ID. Required.
     * @returns a string
     */
    public get scopeId() {
        return this._scopeId;
    };
    /**
     * Sets the scopeId property value. The identifier of the scope where the policy is created. Can be / for the tenant or a group ID. Required.
     * @param value Value to set for the scopeId property.
     */
    public set scopeId(value: string | undefined) {
        this._scopeId = value;
    };
    /**
     * Gets the scopeType property value. The type of the scope where the policy is created. One of Directory, DirectoryRole. Required.
     * @returns a string
     */
    public get scopeType() {
        return this._scopeType;
    };
    /**
     * Sets the scopeType property value. The type of the scope where the policy is created. One of Directory, DirectoryRole. Required.
     * @param value Value to set for the scopeType property.
     */
    public set scopeType(value: string | undefined) {
        this._scopeType = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("description", this.description);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeCollectionOfObjectValues<UnifiedRoleManagementPolicyRule>("effectiveRules", this.effectiveRules);
        writer.writeBooleanValue("isOrganizationDefault", this.isOrganizationDefault);
        writer.writeObjectValue<Identity>("lastModifiedBy", this.lastModifiedBy);
        writer.writeDateValue("lastModifiedDateTime", this.lastModifiedDateTime);
        writer.writeCollectionOfObjectValues<UnifiedRoleManagementPolicyRule>("rules", this.rules);
        writer.writeStringValue("scopeId", this.scopeId);
        writer.writeStringValue("scopeType", this.scopeType);
    };
}
