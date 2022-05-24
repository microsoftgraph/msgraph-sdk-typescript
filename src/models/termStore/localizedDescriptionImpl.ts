import {LocalizedDescription} from './localizedDescription';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class LocalizedDescriptionImpl implements AdditionalDataHolder, LocalizedDescription, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The description in the localized language. */
    public description?: string | undefined;
    /** The language tag for the label. */
    public languageTag?: string | undefined;
    /**
     * Instantiates a new localizedDescription and sets the default values.
     * @param localizedDescriptionParameterValue 
     */
    public constructor(localizedDescriptionParameterValue?: LocalizedDescription | undefined) {
        this.additionalData = localizedDescriptionParameterValue?.additionalData ? localizedDescriptionParameterValue?.additionalData! : {}
        this.description = localizedDescriptionParameterValue?.description ;
        this.languageTag = localizedDescriptionParameterValue?.languageTag ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "description": n => { this.description = n.getStringValue(); },
            "languageTag": n => { this.languageTag = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.description){
        writer.writeStringValue("description", this.description);
        }
        if(this.languageTag){
        writer.writeStringValue("languageTag", this.languageTag);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
