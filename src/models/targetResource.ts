import {createModifiedPropertyFromDiscriminatorValue} from './createModifiedPropertyFromDiscriminatorValue';
import {GroupType} from './groupType';
import {ModifiedProperty} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class TargetResource implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** Indicates the visible name defined for the resource. Typically specified when the resource is created. */
    private _displayName?: string | undefined;
    /** When type is set to Group, this indicates the group type.  Possible values are: unifiedGroups, azureAD, and unknownFutureValue */
    private _groupType?: GroupType | undefined;
    /** Indicates the unique ID of the resource. */
    private _id?: string | undefined;
    /** Indicates name, old value and new value of each attribute that changed. Property values depend on the operation type. */
    private _modifiedProperties?: ModifiedProperty[] | undefined;
    /** Describes the resource type.  Example values include Application, Group, ServicePrincipal, and User. */
    private _type?: string | undefined;
    /** When type is set to User, this includes the user name that initiated the action; null for other types. */
    private _userPrincipalName?: string | undefined;
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
     * Instantiates a new targetResource and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the displayName property value. Indicates the visible name defined for the resource. Typically specified when the resource is created.
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Sets the displayName property value. Indicates the visible name defined for the resource. Typically specified when the resource is created.
     * @param value Value to set for the displayName property.
     */
    public set displayName(value: string | undefined) {
        this._displayName = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "displayName": n => { this.displayName = n.getStringValue(); },
            "groupType": n => { this.groupType = n.getEnumValue<GroupType>(GroupType); },
            "id": n => { this.id = n.getStringValue(); },
            "modifiedProperties": n => { this.modifiedProperties = n.getCollectionOfObjectValues<ModifiedProperty>(createModifiedPropertyFromDiscriminatorValue); },
            "type": n => { this.type = n.getStringValue(); },
            "userPrincipalName": n => { this.userPrincipalName = n.getStringValue(); },
        };
    };
    /**
     * Gets the groupType property value. When type is set to Group, this indicates the group type.  Possible values are: unifiedGroups, azureAD, and unknownFutureValue
     * @returns a groupType
     */
    public get groupType() {
        return this._groupType;
    };
    /**
     * Sets the groupType property value. When type is set to Group, this indicates the group type.  Possible values are: unifiedGroups, azureAD, and unknownFutureValue
     * @param value Value to set for the groupType property.
     */
    public set groupType(value: GroupType | undefined) {
        this._groupType = value;
    };
    /**
     * Gets the id property value. Indicates the unique ID of the resource.
     * @returns a string
     */
    public get id() {
        return this._id;
    };
    /**
     * Sets the id property value. Indicates the unique ID of the resource.
     * @param value Value to set for the id property.
     */
    public set id(value: string | undefined) {
        this._id = value;
    };
    /**
     * Gets the modifiedProperties property value. Indicates name, old value and new value of each attribute that changed. Property values depend on the operation type.
     * @returns a modifiedProperty
     */
    public get modifiedProperties() {
        return this._modifiedProperties;
    };
    /**
     * Sets the modifiedProperties property value. Indicates name, old value and new value of each attribute that changed. Property values depend on the operation type.
     * @param value Value to set for the modifiedProperties property.
     */
    public set modifiedProperties(value: ModifiedProperty[] | undefined) {
        this._modifiedProperties = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("displayName", this.displayName);
        writer.writeEnumValue<GroupType>("groupType", this.groupType);
        writer.writeStringValue("id", this.id);
        writer.writeCollectionOfObjectValues<ModifiedProperty>("modifiedProperties", this.modifiedProperties);
        writer.writeStringValue("type", this.type);
        writer.writeStringValue("userPrincipalName", this.userPrincipalName);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the type property value. Describes the resource type.  Example values include Application, Group, ServicePrincipal, and User.
     * @returns a string
     */
    public get type() {
        return this._type;
    };
    /**
     * Sets the type property value. Describes the resource type.  Example values include Application, Group, ServicePrincipal, and User.
     * @param value Value to set for the type property.
     */
    public set type(value: string | undefined) {
        this._type = value;
    };
    /**
     * Gets the userPrincipalName property value. When type is set to User, this includes the user name that initiated the action; null for other types.
     * @returns a string
     */
    public get userPrincipalName() {
        return this._userPrincipalName;
    };
    /**
     * Sets the userPrincipalName property value. When type is set to User, this includes the user name that initiated the action; null for other types.
     * @param value Value to set for the userPrincipalName property.
     */
    public set userPrincipalName(value: string | undefined) {
        this._userPrincipalName = value;
    };
}
