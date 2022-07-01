import {createModifiedPropertyFromDiscriminatorValue} from './createModifiedPropertyFromDiscriminatorValue';
import {GroupType} from './groupType';
import {ModifiedPropertyImpl} from './index';
import {ModifiedProperty} from './modifiedProperty';
import {TargetResource} from './targetResource';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class TargetResourceImpl implements TargetResource {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData?: Record<string, unknown> | undefined;
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
    public set additionalData(value: Record<string, unknown> | undefined) {
        if(value) {
            this._additionalData = value;
        }
    };
    /**
     * Instantiates a new targetResource and sets the default values.
     * @param targetResourceParameterValue 
     */
    public constructor(targetResourceParameterValue?: TargetResource | undefined) {
        this._additionalData = targetResourceParameterValue?.additionalData ? targetResourceParameterValue?.additionalData! : {};
        this._displayName = targetResourceParameterValue?.displayName;
        this._groupType = targetResourceParameterValue?.groupType;
        this._id = targetResourceParameterValue?.id;
        this._modifiedProperties = targetResourceParameterValue?.modifiedProperties;
        this._type = targetResourceParameterValue?.type;
        this._userPrincipalName = targetResourceParameterValue?.userPrincipalName;
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
        if(value) {
            this._displayName = value;
        }
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
            "modifiedProperties": n => { this.modifiedProperties = n.getCollectionOfObjectValues<ModifiedPropertyImpl>(createModifiedPropertyFromDiscriminatorValue); },
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
        if(value) {
            this._groupType = value;
        }
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
        if(value) {
            this._id = value;
        }
    };
    /**
     * Gets the modifiedProperties property value. Indicates name, old value and new value of each attribute that changed. Property values depend on the operation type.
     * @returns a ModifiedPropertyInterface
     */
    public get modifiedProperties() {
        return this._modifiedProperties;
    };
    /**
     * Sets the modifiedProperties property value. Indicates name, old value and new value of each attribute that changed. Property values depend on the operation type.
     * @param value Value to set for the modifiedProperties property.
     */
    public set modifiedProperties(value: ModifiedProperty[] | undefined) {
        if(value) {
            const modifiedPropertiesArrValue: ModifiedPropertyImpl[] = [];
            this.modifiedProperties?.forEach(element => {
                modifiedPropertiesArrValue.push((element instanceof ModifiedPropertyImpl? element:new ModifiedPropertyImpl(element)));
            });
            this._modifiedProperties = modifiedPropertiesArrValue;
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.displayName){
            writer.writeStringValue("displayName", this.displayName);
        }
        if(this.groupType){
            writer.writeEnumValue<GroupType>("groupType", this.groupType);
        }
        if(this.id){
            writer.writeStringValue("id", this.id);
        }
        if(this.modifiedProperties && this.modifiedProperties.length != 0){        const modifiedPropertiesArrValue: ModifiedPropertyImpl[] = [];
        this.modifiedProperties?.forEach(element => {
            modifiedPropertiesArrValue.push((element instanceof ModifiedPropertyImpl? element:new ModifiedPropertyImpl(element)));
        });
            writer.writeCollectionOfObjectValues<ModifiedPropertyImpl>("modifiedProperties", modifiedPropertiesArrValue);
        }
        if(this.type){
            writer.writeStringValue("type", this.type);
        }
        if(this.userPrincipalName){
            writer.writeStringValue("userPrincipalName", this.userPrincipalName);
        }
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
        if(value) {
            this._type = value;
        }
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
        if(value) {
            this._userPrincipalName = value;
        }
    };
}
