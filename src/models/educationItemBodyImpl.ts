import {BodyType} from './bodyType';
import {EducationItemBody} from './educationItemBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class EducationItemBodyImpl implements AdditionalDataHolder, EducationItemBody, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The content property */
    public content?: string | undefined;
    /** The contentType property */
    public contentType?: BodyType | undefined;
    /**
     * Instantiates a new educationItemBody and sets the default values.
     * @param educationItemBodyParameterValue 
     */
    public constructor(educationItemBodyParameterValue?: EducationItemBody | undefined) {
        this.additionalData = educationItemBodyParameterValue?.additionalData ? educationItemBodyParameterValue?.additionalData! : {}
        this.content = educationItemBodyParameterValue?.content ;
        this.contentType = educationItemBodyParameterValue?.contentType ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "content": n => { this.content = n.getStringValue(); },
            "contentType": n => { this.contentType = n.getEnumValue<BodyType>(BodyType); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.content){
        writer.writeStringValue("content", this.content);
        }
        if(this.contentType){
        writer.writeEnumValue<BodyType>("contentType", this.contentType);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
