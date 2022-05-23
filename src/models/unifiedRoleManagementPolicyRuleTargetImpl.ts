import {createDirectoryObjectFromDiscriminatorValue} from './createDirectoryObjectFromDiscriminatorValue';
import {DirectoryObject} from './directoryObject';
import {DirectoryObjectImpl} from './index';
import {UnifiedRoleManagementPolicyRuleTarget} from './unifiedRoleManagementPolicyRuleTarget';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class UnifiedRoleManagementPolicyRuleTargetImpl implements AdditionalDataHolder, Parsable, UnifiedRoleManagementPolicyRuleTarget {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The caller for the policy rule target. Allowed values are: None, Admin, EndUser. */
    public caller?: string | undefined;
    /** The list of settings which are enforced and cannot be overridden by child scopes. Use All for all settings. */
    public enforcedSettings?: string[] | undefined;
    /** The list of settings which can be inherited by child scopes. Use All for all settings. */
    public inheritableSettings?: string[] | undefined;
    /** The level for the policy rule target. Allowed values are: Eligibility, Assignment. */
    public level?: string | undefined;
    /** The operations for policy rule target. Allowed values are: All, Activate, Deactivate, Assign, Update, Remove, Extend, Renew. */
    public operations?: string[] | undefined;
    /** The targetObjects property */
    public targetObjects?: DirectoryObject[] | undefined;
    /**
     * Instantiates a new unifiedRoleManagementPolicyRuleTarget and sets the default values.
     * @param unifiedRoleManagementPolicyRuleTargetParameterValue 
     */
    public constructor(unifiedRoleManagementPolicyRuleTargetParameterValue?: UnifiedRoleManagementPolicyRuleTarget | undefined) {
        this.additionalData = unifiedRoleManagementPolicyRuleTargetParameterValue?.additionalData ? unifiedRoleManagementPolicyRuleTargetParameterValue?.additionalData! : {}
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
            "operations": n => { this.operations = n.getCollectionOfPrimitiveValues<string>(); },
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
        writer.writeStringValue("caller", this.caller);
        }
        if(this.enforcedSettings){
        writer.writeCollectionOfPrimitiveValues<string>("enforcedSettings", this.enforcedSettings);
        }
        if(this.inheritableSettings){
        writer.writeCollectionOfPrimitiveValues<string>("inheritableSettings", this.inheritableSettings);
        }
        if(this.level){
        writer.writeStringValue("level", this.level);
        }
        if(this.operations){
        writer.writeCollectionOfPrimitiveValues<string>("operations", this.operations);
        }
        if(this.targetObjects && this.targetObjects.length != 0){        const targetObjectsArrValue: DirectoryObjectImpl[] = []; this.targetObjects?.forEach(element => {targetObjectsArrValue.push(new DirectoryObjectImpl(element));});
        writer.writeCollectionOfObjectValues<DirectoryObjectImpl>("targetObjects", targetObjectsArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
