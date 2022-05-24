import {UserAttributeValuesItem} from './userAttributeValuesItem';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class UserAttributeValuesItemImpl implements AdditionalDataHolder, Parsable, UserAttributeValuesItem {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Used to set the value as the default. */
    public isDefault?: boolean | undefined;
    /** The display name of the property displayed to the end user in the user flow. */
    public name?: string | undefined;
    /** The value that is set when this item is selected. */
    public value?: string | undefined;
    /**
     * Instantiates a new userAttributeValuesItem and sets the default values.
     * @param userAttributeValuesItemParameterValue 
     */
    public constructor(userAttributeValuesItemParameterValue?: UserAttributeValuesItem | undefined) {
        this.additionalData = userAttributeValuesItemParameterValue?.additionalData ? userAttributeValuesItemParameterValue?.additionalData! : {}
        this.isDefault = userAttributeValuesItemParameterValue?.isDefault ;
        this.name = userAttributeValuesItemParameterValue?.name ;
        this.value = userAttributeValuesItemParameterValue?.value ;
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
}
