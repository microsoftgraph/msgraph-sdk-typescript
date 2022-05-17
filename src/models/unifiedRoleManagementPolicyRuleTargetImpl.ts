import {createDirectoryObjectFromDiscriminatorValue} from './createDirectoryObjectFromDiscriminatorValue';
import {DirectoryObject} from './directoryObject';
import {DirectoryObjectImpl} from './index';
import {UnifiedRoleManagementPolicyRuleTarget} from './unifiedRoleManagementPolicyRuleTarget';
import {UnifiedRoleManagementPolicyRuleTargetOperations} from './unifiedRoleManagementPolicyRuleTargetOperations';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class UnifiedRoleManagementPolicyRuleTargetImpl implements AdditionalDataHolder, Parsable, UnifiedRoleManagementPolicyRuleTarget {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData: Record<string, unknown>;
    /** The caller for the policy rule target. Allowed values are: None, Admin, EndUser. */
    caller?: string | undefined;
    /** The list of settings which are enforced and cannot be overridden by child scopes. Use All for all settings. */
    enforcedSettings?: string[] | undefined;
    /** The list of settings which can be inherited by child scopes. Use All for all settings. */
    inheritableSettings?: string[] | undefined;
    /** The level for the policy rule target. Allowed values are: Eligibility, Assignment. */
    level?: string | undefined;
    /** The operations for policy rule target. Allowed values are: All, Activate, Deactivate, Assign, Update, Remove, Extend, Renew. */
    operations?: UnifiedRoleManagementPolicyRuleTargetOperations[] | undefined;
    /** The targetObjects property */
    targetObjects?: DirectoryObject[] | undefined;
    /**
     * Instantiates a new unifiedRoleManagementPolicyRuleTarget and sets the default values.
     * @param unifiedRoleManagementPolicyRuleTargetParameterValue 
     */
    public constructor(unifiedRoleManagementPolicyRuleTargetParameterValue?: UnifiedRoleManagementPolicyRuleTarget | undefined) {
        this.additionalData = {};
        this.additionalData = unifiedRoleManagementPolicyRuleTargetParameterValue?.additionalData ? {} : unifiedRoleManagementPolicyRuleTargetParameterValue?.additionalData!
        this.caller = unifiedRoleManagementPolicyRuleTargetParameterValue?.caller ;
        this.enforcedSettings = unifiedRoleManagementPolicyRuleTargetParameterValue?.enforcedSettings ;
        this.inheritableSettings = unifiedRoleManagementPolicyRuleTargetParameterValue?.inheritableSettings ;
        this.level = unifiedRoleManagementPolicyRuleTargetParameterValue?.level ;
        this.operations = unifiedRoleManagementPolicyRuleTargetParameterValue?.operations ;
        this.targetObjects = unifiedRoleManagementPolicyRuleTargetParameterValue?.targetObjects ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "caller": n => { this.caller = n.getStringValue(); },
            "enforcedSettings": n => { this.enforcedSettings = n.getCollectionOfPrimitiveValues<string>(); },
            "inheritableSettings": n => { this.inheritableSettings = n.getCollectionOfPrimitiveValues<string>(); },
            "level": n => { this.level = n.getStringValue(); },
            "operations": n => { this.operations = n.getEnumValues<UnifiedRoleManagementPolicyRuleTargetOperations>(UnifiedRoleManagementPolicyRuleTargetOperations); },
            "targetObjects": n => { this.targetObjects = n.getCollectionOfObjectValues<DirectoryObjectImpl>(createDirectoryObjectFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.caller){
        if(this.caller)
        writer.writeStringValue("caller", this.caller);
        }
        if(this.enforcedSettings){
        if(this.enforcedSettings)
        writer.writeCollectionOfPrimitiveValues<string>("enforcedSettings", this.enforcedSettings);
        }
        if(this.inheritableSettings){
        if(this.inheritableSettings)
        writer.writeCollectionOfPrimitiveValues<string>("inheritableSettings", this.inheritableSettings);
        }
        if(this.level){
        if(this.level)
        writer.writeStringValue("level", this.level);
        }
        if(this.operations){
        if(this.operations)
        this.operations && writer.writeEnumValue<UnifiedRoleManagementPolicyRuleTargetOperations>("operations", ...this.operations);
        }
        if(this.targetObjects){
        const targetObjectsArrValue: DirectoryObjectImpl[] = []; this.targetObjects?.forEach(element => {targetObjectsArrValue.push(new DirectoryObjectImpl(element));});
        writer.writeCollectionOfObjectValues<DirectoryObjectImpl>("targetObjects", targetObjectsArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
