import {UserAttributeValuesItem} from './userAttributeValuesItem';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class UserAttributeValuesItemImpl implements UserAttributeValuesItem {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData?: Record<string, unknown> | undefined;
    /** Used to set the value as the default. */
    private _isDefault?: boolean | undefined;
    /** The display name of the property displayed to the end user in the user flow. */
    private _name?: string | undefined;
    /** The value that is set when this item is selected. */
    private _value?: string | undefined;
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
     * Instantiates a new userAttributeValuesItem and sets the default values.
     * @param userAttributeValuesItemParameterValue 
     */
    public constructor(userAttributeValuesItemParameterValue?: UserAttributeValuesItem | undefined) {
        this._additionalData = userAttributeValuesItemParameterValue?.additionalData ? userAttributeValuesItemParameterValue?.additionalData! : {};
        this._isDefault = userAttributeValuesItemParameterValue?.isDefault;
        this._name = userAttributeValuesItemParameterValue?.name;
        this._value = userAttributeValuesItemParameterValue?.value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "isDefault": n => { this.isDefault = n.getBooleanValue(); },
            "name": n => { this.name = n.getStringValue(); },
            "value": n => { this.value = n.getStringValue(); },
        };
    };
    /**
     * Gets the isDefault property value. Used to set the value as the default.
     * @returns a boolean
     */
    public get isDefault() {
        return this._isDefault;
    };
    /**
     * Sets the isDefault property value. Used to set the value as the default.
     * @param value Value to set for the isDefault property.
     */
    public set isDefault(value: boolean | undefined) {
        if(value) {
            this._isDefault = value;
        }
    };
    /**
     * Gets the name property value. The display name of the property displayed to the end user in the user flow.
     * @returns a string
     */
    public get name() {
        return this._name;
    };
    /**
     * Sets the name property value. The display name of the property displayed to the end user in the user flow.
     * @param value Value to set for the name property.
     */
    public set name(value: string | undefined) {
        if(value) {
            this._name = value;
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.isDefault){
            writer.writeBooleanValue("isDefault", this.isDefault);
        }
        if(this.name){
            writer.writeStringValue("name", this.name);
        }
        if(this.value){
            writer.writeStringValue("value", this.value);
        }
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the value property value. The value that is set when this item is selected.
     * @returns a string
     */
    public get value() {
        return this._value;
    };
    /**
     * Sets the value property value. The value that is set when this item is selected.
     * @param value Value to set for the value property.
     */
    public set value(value: string | undefined) {
        if(value) {
            this._value = value;
        }
    };
}
