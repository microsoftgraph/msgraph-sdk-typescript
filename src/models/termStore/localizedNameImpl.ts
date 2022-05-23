import {LocalizedName} from './localizedName';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class LocalizedNameImpl implements AdditionalDataHolder, LocalizedName, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The language tag for the label. */
    public languageTag?: string | undefined;
    /** The name in the localized language. */
    public name?: string | undefined;
    /**
     * Instantiates a new localizedName and sets the default values.
     * @param localizedNameParameterValue 
     */
    public constructor(localizedNameParameterValue?: LocalizedName | undefined) {
        this.additionalData = localizedNameParameterValue?.additionalData ? localizedNameParameterValue?.additionalData! : {}
        this.languageTag = localizedNameParameterValue?.languageTag ;
        this.name = localizedNameParameterValue?.name ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "languageTag": n => { this.languageTag = n.getStringValue(); },
            "name": n => { this.name = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.languageTag){
        writer.writeStringValue("languageTag", this.languageTag);
        }
        if(this.name){
        writer.writeStringValue("name", this.name);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
