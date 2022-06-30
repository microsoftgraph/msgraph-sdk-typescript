import {createDirectoryObjectFromDiscriminatorValue} from './createDirectoryObjectFromDiscriminatorValue';
import {DirectoryObject} from './directoryObject';
import {DirectoryObjectImpl} from './index';
import {UnifiedRoleManagementPolicyRuleTarget} from './unifiedRoleManagementPolicyRuleTarget';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class UnifiedRoleManagementPolicyRuleTargetImpl implements UnifiedRoleManagementPolicyRuleTarget {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The type of caller that's the target of the policy rule. Allowed values are: None, Admin, EndUser. */
    private _caller?: string | undefined;
    /** The list of role settings that are enforced and cannot be overridden by child scopes. Use All for all settings. */
    private _enforcedSettings?: string[] | undefined;
    /** The list of role settings that can be inherited by child scopes. Use All for all settings. */
    private _inheritableSettings?: string[] | undefined;
    /** The role assignment type that's the target of policy rule. Allowed values are: Eligibility, Assignment. */
    private _level?: string | undefined;
    /** The role management operations that are the target of the policy rule. Allowed values are: All, Activate, Deactivate, Assign, Update, Remove, Extend, Renew. */
    private _operations?: string[] | undefined;
    /** The targetObjects property */
    private _targetObjects?: DirectoryObject[] | undefined;
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
        if(value) {
            this._additionalData = value;
        }
    };
    /**
     * Gets the caller property value. The type of caller that's the target of the policy rule. Allowed values are: None, Admin, EndUser.
     * @returns a string
     */
    public get caller() {
        return this._caller;
    };
    /**
     * Sets the caller property value. The type of caller that's the target of the policy rule. Allowed values are: None, Admin, EndUser.
     * @param value Value to set for the caller property.
     */
    public set caller(value: string | undefined) {
        if(value) {
            this._caller = value;
        }
    };
    /**
     * Instantiates a new unifiedRoleManagementPolicyRuleTarget and sets the default values.
     * @param unifiedRoleManagementPolicyRuleTargetParameterValue 
     */
    public constructor(unifiedRoleManagementPolicyRuleTargetParameterValue?: UnifiedRoleManagementPolicyRuleTarget | undefined) {
        this._additionalData = unifiedRoleManagementPolicyRuleTargetParameterValue?.additionalData ? unifiedRoleManagementPolicyRuleTargetParameterValue?.additionalData! : {};
        this._caller = unifiedRoleManagementPolicyRuleTargetParameterValue?.caller;
        this._enforcedSettings = unifiedRoleManagementPolicyRuleTargetParameterValue?.enforcedSettings;
        this._inheritableSettings = unifiedRoleManagementPolicyRuleTargetParameterValue?.inheritableSettings;
        this._level = unifiedRoleManagementPolicyRuleTargetParameterValue?.level;
        this._operations = unifiedRoleManagementPolicyRuleTargetParameterValue?.operations;
        this._targetObjects = unifiedRoleManagementPolicyRuleTargetParameterValue?.targetObjects;
    };
    /**
     * Gets the enforcedSettings property value. The list of role settings that are enforced and cannot be overridden by child scopes. Use All for all settings.
     * @returns a string
     */
    public get enforcedSettings() {
        return this._enforcedSettings;
    };
    /**
     * Sets the enforcedSettings property value. The list of role settings that are enforced and cannot be overridden by child scopes. Use All for all settings.
     * @param value Value to set for the enforcedSettings property.
     */
    public set enforcedSettings(value: string[] | undefined) {
        if(value) {
            this._enforcedSettings = value;
        }
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
     * Gets the inheritableSettings property value. The list of role settings that can be inherited by child scopes. Use All for all settings.
     * @returns a string
     */
    public get inheritableSettings() {
        return this._inheritableSettings;
    };
    /**
     * Sets the inheritableSettings property value. The list of role settings that can be inherited by child scopes. Use All for all settings.
     * @param value Value to set for the inheritableSettings property.
     */
    public set inheritableSettings(value: string[] | undefined) {
        if(value) {
            this._inheritableSettings = value;
        }
    };
    /**
     * Gets the level property value. The role assignment type that's the target of policy rule. Allowed values are: Eligibility, Assignment.
     * @returns a string
     */
    public get level() {
        return this._level;
    };
    /**
     * Sets the level property value. The role assignment type that's the target of policy rule. Allowed values are: Eligibility, Assignment.
     * @param value Value to set for the level property.
     */
    public set level(value: string | undefined) {
        if(value) {
            this._level = value;
        }
    };
    /**
     * Gets the operations property value. The role management operations that are the target of the policy rule. Allowed values are: All, Activate, Deactivate, Assign, Update, Remove, Extend, Renew.
     * @returns a string
     */
    public get operations() {
        return this._operations;
    };
    /**
     * Sets the operations property value. The role management operations that are the target of the policy rule. Allowed values are: All, Activate, Deactivate, Assign, Update, Remove, Extend, Renew.
     * @param value Value to set for the operations property.
     */
    public set operations(value: string[] | undefined) {
        if(value) {
            this._operations = value;
        }
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
        if(this.targetObjects && this.targetObjects.length != 0){        const targetObjectsArrValue: DirectoryObjectImpl[] = [];
        this.targetObjects?.forEach(element => {
            targetObjectsArrValue.push((element instanceof DirectoryObjectImpl? element:new DirectoryObjectImpl(element)));
        });
            writer.writeCollectionOfObjectValues<DirectoryObjectImpl>("targetObjects", targetObjectsArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the targetObjects property value. The targetObjects property
     * @returns a DirectoryObjectInterface
     */
    public get targetObjects() {
        return this._targetObjects;
    };
    /**
     * Sets the targetObjects property value. The targetObjects property
     * @param value Value to set for the targetObjects property.
     */
    public set targetObjects(value: DirectoryObject[] | undefined) {
        if(value) {
            const targetObjectsArrValue: DirectoryObjectImpl[] = [];
            this.targetObjects?.forEach(element => {
                targetObjectsArrValue.push((element instanceof DirectoryObjectImpl? element:new DirectoryObjectImpl(element)));
            });
            this._targetObjects = targetObjectsArrValue;
        }
    };
}
