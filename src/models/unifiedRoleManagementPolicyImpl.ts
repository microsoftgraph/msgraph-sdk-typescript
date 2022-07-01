import {createIdentityFromDiscriminatorValue} from './createIdentityFromDiscriminatorValue';
import {createUnifiedRoleManagementPolicyRuleFromDiscriminatorValue} from './createUnifiedRoleManagementPolicyRuleFromDiscriminatorValue';
import {Identity} from './identity';
import {EntityImpl, IdentityImpl, UnifiedRoleManagementPolicyRuleImpl} from './index';
import {UnifiedRoleManagementPolicy} from './unifiedRoleManagementPolicy';
import {UnifiedRoleManagementPolicyRule} from './unifiedRoleManagementPolicyRule';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the policyRoot singleton. */
export class UnifiedRoleManagementPolicyImpl extends EntityImpl implements UnifiedRoleManagementPolicy {
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
     * @param unifiedRoleManagementPolicyParameterValue 
     */
    public constructor(unifiedRoleManagementPolicyParameterValue?: UnifiedRoleManagementPolicy | undefined) {
        super(unifiedRoleManagementPolicyParameterValue);
        this._description = unifiedRoleManagementPolicyParameterValue?.description;
        this._displayName = unifiedRoleManagementPolicyParameterValue?.displayName;
        this._effectiveRules = unifiedRoleManagementPolicyParameterValue?.effectiveRules;
        this._isOrganizationDefault = unifiedRoleManagementPolicyParameterValue?.isOrganizationDefault;
        this._lastModifiedBy = unifiedRoleManagementPolicyParameterValue?.lastModifiedBy;
        this._lastModifiedDateTime = unifiedRoleManagementPolicyParameterValue?.lastModifiedDateTime;
        this._rules = unifiedRoleManagementPolicyParameterValue?.rules;
        this._scopeId = unifiedRoleManagementPolicyParameterValue?.scopeId;
        this._scopeType = unifiedRoleManagementPolicyParameterValue?.scopeType;
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
        if(value) {
            this._description = value;
        }
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
        if(value) {
            this._displayName = value;
        }
    };
    /**
     * Gets the effectiveRules property value. The list of effective rules like approval rules and expiration rules evaluated based on inherited referenced rules. For example, if there is a tenant-wide policy to enforce enabling an approval rule, the effective rule will be to enable approval even if the policy has a rule to disable approval. Supports $expand.
     * @returns a UnifiedRoleManagementPolicyRuleInterface
     */
    public get effectiveRules() {
        return this._effectiveRules;
    };
    /**
     * Sets the effectiveRules property value. The list of effective rules like approval rules and expiration rules evaluated based on inherited referenced rules. For example, if there is a tenant-wide policy to enforce enabling an approval rule, the effective rule will be to enable approval even if the policy has a rule to disable approval. Supports $expand.
     * @param value Value to set for the effectiveRules property.
     */
    public set effectiveRules(value: UnifiedRoleManagementPolicyRule[] | undefined) {
        if(value) {
            const effectiveRulesArrValue: UnifiedRoleManagementPolicyRuleImpl[] = [];
            this.effectiveRules?.forEach(element => {
                effectiveRulesArrValue.push((element instanceof UnifiedRoleManagementPolicyRuleImpl? element as UnifiedRoleManagementPolicyRuleImpl:new UnifiedRoleManagementPolicyRuleImpl(element)));
            });
            this._effectiveRules = effectiveRulesArrValue;
        }
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "description": n => { this.description = n.getStringValue(); },
            "displayName": n => { this.displayName = n.getStringValue(); },
            "effectiveRules": n => { this.effectiveRules = n.getCollectionOfObjectValues<UnifiedRoleManagementPolicyRuleImpl>(createUnifiedRoleManagementPolicyRuleFromDiscriminatorValue); },
            "isOrganizationDefault": n => { this.isOrganizationDefault = n.getBooleanValue(); },
            "lastModifiedBy": n => { this.lastModifiedBy = n.getObjectValue<IdentityImpl>(createIdentityFromDiscriminatorValue); },
            "lastModifiedDateTime": n => { this.lastModifiedDateTime = n.getDateValue(); },
            "rules": n => { this.rules = n.getCollectionOfObjectValues<UnifiedRoleManagementPolicyRuleImpl>(createUnifiedRoleManagementPolicyRuleFromDiscriminatorValue); },
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
        if(value) {
            this._isOrganizationDefault = value;
        }
    };
    /**
     * Gets the lastModifiedBy property value. The identity who last modified the role setting.
     * @returns a IdentityInterface
     */
    public get lastModifiedBy() {
        return this._lastModifiedBy;
    };
    /**
     * Sets the lastModifiedBy property value. The identity who last modified the role setting.
     * @param value Value to set for the lastModifiedBy property.
     */
    public set lastModifiedBy(value: Identity | undefined) {
        if(value) {
            this._lastModifiedBy = value instanceof IdentityImpl? value as IdentityImpl: new IdentityImpl(value);
        }
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
        if(value) {
            this._lastModifiedDateTime = value;
        }
    };
    /**
     * Gets the rules property value. The collection of rules like approval rules and expiration rules. Supports $expand.
     * @returns a UnifiedRoleManagementPolicyRuleInterface
     */
    public get rules() {
        return this._rules;
    };
    /**
     * Sets the rules property value. The collection of rules like approval rules and expiration rules. Supports $expand.
     * @param value Value to set for the rules property.
     */
    public set rules(value: UnifiedRoleManagementPolicyRule[] | undefined) {
        if(value) {
            const rulesArrValue: UnifiedRoleManagementPolicyRuleImpl[] = [];
            this.rules?.forEach(element => {
                rulesArrValue.push((element instanceof UnifiedRoleManagementPolicyRuleImpl? element as UnifiedRoleManagementPolicyRuleImpl:new UnifiedRoleManagementPolicyRuleImpl(element)));
            });
            this._rules = rulesArrValue;
        }
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
        if(value) {
            this._scopeId = value;
        }
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
        if(value) {
            this._scopeType = value;
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.description){
            writer.writeStringValue("description", this.description);
        }
        if(this.displayName){
            writer.writeStringValue("displayName", this.displayName);
        }
        if(this.effectiveRules && this.effectiveRules.length != 0){        const effectiveRulesArrValue: UnifiedRoleManagementPolicyRuleImpl[] = [];
        this.effectiveRules?.forEach(element => {
            effectiveRulesArrValue.push((element instanceof UnifiedRoleManagementPolicyRuleImpl? element as UnifiedRoleManagementPolicyRuleImpl:new UnifiedRoleManagementPolicyRuleImpl(element)));
        });
            writer.writeCollectionOfObjectValues<UnifiedRoleManagementPolicyRuleImpl>("effectiveRules", effectiveRulesArrValue);
        }
        if(this.isOrganizationDefault){
            writer.writeBooleanValue("isOrganizationDefault", this.isOrganizationDefault);
        }
        if(this.lastModifiedBy){
            writer.writeObjectValue<IdentityImpl>("lastModifiedBy", (this.lastModifiedBy instanceof IdentityImpl? this.lastModifiedBy as IdentityImpl: new IdentityImpl(this.lastModifiedBy)));
        }
        if(this.lastModifiedDateTime){
            writer.writeDateValue("lastModifiedDateTime", this.lastModifiedDateTime);
        }
        if(this.rules && this.rules.length != 0){        const rulesArrValue: UnifiedRoleManagementPolicyRuleImpl[] = [];
        this.rules?.forEach(element => {
            rulesArrValue.push((element instanceof UnifiedRoleManagementPolicyRuleImpl? element as UnifiedRoleManagementPolicyRuleImpl:new UnifiedRoleManagementPolicyRuleImpl(element)));
        });
            writer.writeCollectionOfObjectValues<UnifiedRoleManagementPolicyRuleImpl>("rules", rulesArrValue);
        }
        if(this.scopeId){
            writer.writeStringValue("scopeId", this.scopeId);
        }
        if(this.scopeType){
            writer.writeStringValue("scopeType", this.scopeType);
        }
    };
}
