import {SpecialFolder} from './specialFolder';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class SpecialFolderImpl implements AdditionalDataHolder, Parsable, SpecialFolder {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The unique identifier for this item in the /drive/special collection */
    public name?: string | undefined;
    /**
     * Instantiates a new specialFolder and sets the default values.
     * @param specialFolderParameterValue 
     */
    public constructor(specialFolderParameterValue?: SpecialFolder | undefined) {
        this.additionalData = specialFolderParameterValue?.additionalData ? specialFolderParameterValue?.additionalData! : {}
        this.name = specialFolderParameterValue?.name ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "name": n => { this.name = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.name){
        writer.writeStringValue("name", this.name);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
