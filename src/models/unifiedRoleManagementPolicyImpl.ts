import {createIdentityFromDiscriminatorValue} from './createIdentityFromDiscriminatorValue';
import {createUnifiedRoleManagementPolicyRuleFromDiscriminatorValue} from './createUnifiedRoleManagementPolicyRuleFromDiscriminatorValue';
import {Identity} from './identity';
import {EntityImpl, IdentityImpl, UnifiedRoleManagementPolicyRuleImpl} from './index';
import {UnifiedRoleManagementPolicy} from './unifiedRoleManagementPolicy';
import {UnifiedRoleManagementPolicyRule} from './unifiedRoleManagementPolicyRule';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the policyRoot singleton. */
export class UnifiedRoleManagementPolicyImpl extends EntityImpl implements Parsable, UnifiedRoleManagementPolicy {
    /** Description for the policy. */
    public description?: string | undefined;
    /** Display name for the policy. */
    public displayName?: string | undefined;
    /** Not implemented. The list of effective rules like approval rules and expiration rules evaluated based on inherited referenced rules. For example, if there is a tenant-wide policy to enforce enabling an approval rule, the effective rule will be to enable approval even if the policy has a rule to disable approval. */
    public effectiveRules?: UnifiedRoleManagementPolicyRule[] | undefined;
    /** This can only be set to true for a single tenant wide policy which will apply to all scopes and roles. Set the scopeId to '/' and scopeType to Directory. */
    public isOrganizationDefault?: boolean | undefined;
    /** The identity who last modified the role setting. */
    public lastModifiedBy?: Identity | undefined;
    /** The time when the role setting was last modified. */
    public lastModifiedDateTime?: Date | undefined;
    /** The collection of rules like approval rules and expiration rules. */
    public rules?: UnifiedRoleManagementPolicyRule[] | undefined;
    /** The id of the scope where the policy is created. Can be / for the tenant or a group ID. Required. */
    public scopeId?: string | undefined;
    /** The type of the scope where the policy is created. One of Directory, DirectoryRole. Required. */
    public scopeType?: string | undefined;
    /**
     * Instantiates a new unifiedRoleManagementPolicy and sets the default values.
     * @param unifiedRoleManagementPolicyParameterValue 
     */
    public constructor(unifiedRoleManagementPolicyParameterValue?: UnifiedRoleManagementPolicy | undefined) {
        super();
        this.description = unifiedRoleManagementPolicyParameterValue?.description ;
        this.displayName = unifiedRoleManagementPolicyParameterValue?.displayName ;
        this.effectiveRules = unifiedRoleManagementPolicyParameterValue?.effectiveRules ;
        this.isOrganizationDefault = unifiedRoleManagementPolicyParameterValue?.isOrganizationDefault ;
        this.lastModifiedBy = unifiedRoleManagementPolicyParameterValue?.lastModifiedBy ;
        this.lastModifiedDateTime = unifiedRoleManagementPolicyParameterValue?.lastModifiedDateTime ;
        this.rules = unifiedRoleManagementPolicyParameterValue?.rules ;
        this.scopeId = unifiedRoleManagementPolicyParameterValue?.scopeId ;
        this.scopeType = unifiedRoleManagementPolicyParameterValue?.scopeType ;
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
        if(this.effectiveRules && this.effectiveRules.length != 0){        const effectiveRulesArrValue: UnifiedRoleManagementPolicyRuleImpl[] = []; this.effectiveRules?.forEach(element => {effectiveRulesArrValue.push(new UnifiedRoleManagementPolicyRuleImpl(element));});
        writer.writeCollectionOfObjectValues<UnifiedRoleManagementPolicyRuleImpl>("effectiveRules", effectiveRulesArrValue);
        }
        if(this.isOrganizationDefault){
        writer.writeBooleanValue("isOrganizationDefault", this.isOrganizationDefault);
        }
        if(this.lastModifiedBy){
        writer.writeObjectValue<IdentityImpl>("lastModifiedBy", new IdentityImpl(this.lastModifiedBy));
        }
        if(this.lastModifiedDateTime){
        writer.writeDateValue("lastModifiedDateTime", this.lastModifiedDateTime);
        }
        if(this.rules && this.rules.length != 0){        const rulesArrValue: UnifiedRoleManagementPolicyRuleImpl[] = []; this.rules?.forEach(element => {rulesArrValue.push(new UnifiedRoleManagementPolicyRuleImpl(element));});
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
