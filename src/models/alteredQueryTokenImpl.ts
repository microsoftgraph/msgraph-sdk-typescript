import {AlteredQueryToken} from './alteredQueryToken';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AlteredQueryTokenImpl implements AdditionalDataHolder, AlteredQueryToken, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Defines the length of a changed segment. */
    public length?: number | undefined;
    /** Defines the offset of a changed segment. */
    public offset?: number | undefined;
    /** Represents the corrected segment string. */
    public suggestion?: string | undefined;
    /**
     * Instantiates a new alteredQueryToken and sets the default values.
     * @param alteredQueryTokenParameterValue 
     */
    public constructor(alteredQueryTokenParameterValue?: AlteredQueryToken | undefined) {
        this.additionalData = alteredQueryTokenParameterValue?.additionalData ? alteredQueryTokenParameterValue?.additionalData! : {}
        this.length = alteredQueryTokenParameterValue?.length ;
        this.offset = alteredQueryTokenParameterValue?.offset ;
        this.suggestion = alteredQueryTokenParameterValue?.suggestion ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "length": n => { this.length = n.getNumberValue(); },
            "offset": n => { this.offset = n.getNumberValue(); },
            "suggestion": n => { this.suggestion = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.length){
        writer.writeNumberValue("length", this.length);
        }
        if(this.offset){
        writer.writeNumberValue("offset", this.offset);
        }
        if(this.suggestion){
        writer.writeStringValue("suggestion", this.suggestion);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
