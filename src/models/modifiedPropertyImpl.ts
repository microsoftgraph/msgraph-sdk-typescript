import {ModifiedProperty} from './modifiedProperty';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ModifiedPropertyImpl implements AdditionalDataHolder, ModifiedProperty, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData: Record<string, unknown>;
    /** Name of property that was modified. */
    displayName?: string | undefined;
    /** New property value. */
    newValue?: string | undefined;
    /** Old property value. */
    oldValue?: string | undefined;
    /**
     * Instantiates a new modifiedProperty and sets the default values.
     * @param modifiedPropertyParameterValue 
     */
    public constructor(modifiedPropertyParameterValue?: ModifiedProperty | undefined) {
        this.additionalData = {};
        this.additionalData = modifiedPropertyParameterValue?.additionalData ? {} : modifiedPropertyParameterValue?.additionalData!
        this.displayName = modifiedPropertyParameterValue?.displayName ;
        this.newValue = modifiedPropertyParameterValue?.newValue ;
        this.oldValue = modifiedPropertyParameterValue?.oldValue ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "displayName": n => { this.displayName = n.getStringValue(); },
            "newValue": n => { this.newValue = n.getStringValue(); },
            "oldValue": n => { this.oldValue = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.displayName){
        if(this.displayName)
        writer.writeStringValue("displayName", this.displayName);
        }
        if(this.newValue){
        if(this.newValue)
        writer.writeStringValue("newValue", this.newValue);
        }
        if(this.oldValue){
        if(this.oldValue)
        writer.writeStringValue("oldValue", this.oldValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
