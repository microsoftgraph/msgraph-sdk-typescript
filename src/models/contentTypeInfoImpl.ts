import {ContentTypeInfo} from './contentTypeInfo';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ContentTypeInfoImpl implements AdditionalDataHolder, ContentTypeInfo, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The id of the content type. */
    public id?: string | undefined;
    /** The name of the content type. */
    public name?: string | undefined;
    /**
     * Instantiates a new contentTypeInfo and sets the default values.
     * @param contentTypeInfoParameterValue 
     */
    public constructor(contentTypeInfoParameterValue?: ContentTypeInfo | undefined) {
        this.additionalData = contentTypeInfoParameterValue?.additionalData ? contentTypeInfoParameterValue?.additionalData! : {}
        this.id = contentTypeInfoParameterValue?.id ;
        this.name = contentTypeInfoParameterValue?.name ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "id": n => { this.id = n.getStringValue(); },
            "name": n => { this.name = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.id){
        writer.writeStringValue("id", this.id);
        }
        if(this.name){
        writer.writeStringValue("name", this.name);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
