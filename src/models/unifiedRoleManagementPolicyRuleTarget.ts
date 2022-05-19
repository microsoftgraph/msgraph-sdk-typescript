import {createDirectoryObjectFromDiscriminatorValue} from './createDirectoryObjectFromDiscriminatorValue';
import {DirectoryObject} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class UnifiedRoleManagementPolicyRuleTarget implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The caller for the policy rule target. Allowed values are: None, Admin, EndUser. */
    private _caller?: string | undefined;
    /** The list of settings which are enforced and cannot be overridden by child scopes. Use All for all settings. */
    private _enforcedSettings?: string[] | undefined;
    /** The list of settings which can be inherited by child scopes. Use All for all settings. */
    private _inheritableSettings?: string[] | undefined;
    /** The level for the policy rule target. Allowed values are: Eligibility, Assignment. */
    private _level?: string | undefined;
    /** The operations for policy rule target. Allowed values are: All, Activate, Deactivate, Assign, Update, Remove, Extend, Renew. */
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
        this._additionalData = value;
    };
    /**
     * Gets the caller property value. The caller for the policy rule target. Allowed values are: None, Admin, EndUser.
     * @returns a string
     */
    public get caller() {
        return this._caller;
    };
    /**
     * Sets the caller property value. The caller for the policy rule target. Allowed values are: None, Admin, EndUser.
     * @param value Value to set for the caller property.
     */
    public set caller(value: string | undefined) {
        this._caller = value;
    };
    /**
     * Instantiates a new unifiedRoleManagementPolicyRuleTarget and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the enforcedSettings property value. The list of settings which are enforced and cannot be overridden by child scopes. Use All for all settings.
     * @returns a string
     */
    public get enforcedSettings() {
        return this._enforcedSettings;
    };
    /**
     * Sets the enforcedSettings property value. The list of settings which are enforced and cannot be overridden by child scopes. Use All for all settings.
     * @param value Value to set for the enforcedSettings property.
     */
    public set enforcedSettings(value: string[] | undefined) {
        this._enforcedSettings = value;
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
            "targetObjects": n => { this.targetObjects = n.getCollectionOfObjectValues<DirectoryObject>(createDirectoryObjectFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the inheritableSettings property value. The list of settings which can be inherited by child scopes. Use All for all settings.
     * @returns a string
     */
    public get inheritableSettings() {
        return this._inheritableSettings;
    };
    /**
     * Sets the inheritableSettings property value. The list of settings which can be inherited by child scopes. Use All for all settings.
     * @param value Value to set for the inheritableSettings property.
     */
    public set inheritableSettings(value: string[] | undefined) {
        this._inheritableSettings = value;
    };
    /**
     * Gets the level property value. The level for the policy rule target. Allowed values are: Eligibility, Assignment.
     * @returns a string
     */
    public get level() {
        return this._level;
    };
    /**
     * Sets the level property value. The level for the policy rule target. Allowed values are: Eligibility, Assignment.
     * @param value Value to set for the level property.
     */
    public set level(value: string | undefined) {
        this._level = value;
    };
    /**
     * Gets the operations property value. The operations for policy rule target. Allowed values are: All, Activate, Deactivate, Assign, Update, Remove, Extend, Renew.
     * @returns a string
     */
    public get operations() {
        return this._operations;
    };
    /**
     * Sets the operations property value. The operations for policy rule target. Allowed values are: All, Activate, Deactivate, Assign, Update, Remove, Extend, Renew.
     * @param value Value to set for the operations property.
     */
    public set operations(value: string[] | undefined) {
        this._operations = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("caller", this.caller);
        writer.writeCollectionOfPrimitiveValues<string>("enforcedSettings", this.enforcedSettings);
        writer.writeCollectionOfPrimitiveValues<string>("inheritableSettings", this.inheritableSettings);
        writer.writeStringValue("level", this.level);
        writer.writeCollectionOfPrimitiveValues<string>("operations", this.operations);
        writer.writeCollectionOfObjectValues<DirectoryObject>("targetObjects", this.targetObjects);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the targetObjects property value. The targetObjects property
     * @returns a directoryObject
     */
    public get targetObjects() {
        return this._targetObjects;
    };
    /**
     * Sets the targetObjects property value. The targetObjects property
     * @param value Value to set for the targetObjects property.
     */
    public set targetObjects(value: DirectoryObject[] | undefined) {
        this._targetObjects = value;
    };
}
