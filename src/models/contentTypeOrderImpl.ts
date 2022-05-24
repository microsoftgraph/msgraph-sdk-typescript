import {ContentTypeOrder} from './contentTypeOrder';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ContentTypeOrderImpl implements AdditionalDataHolder, ContentTypeOrder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Whether this is the default Content Type */
    public default_escaped?: boolean | undefined;
    /** Specifies the position in which the Content Type appears in the selection UI. */
    public position?: number | undefined;
    /**
     * Instantiates a new contentTypeOrder and sets the default values.
     * @param contentTypeOrderParameterValue 
     */
    public constructor(contentTypeOrderParameterValue?: ContentTypeOrder | undefined) {
        this.additionalData = contentTypeOrderParameterValue?.additionalData ? contentTypeOrderParameterValue?.additionalData! : {}
        this.default_escaped = contentTypeOrderParameterValue?.default_escaped ;
        this.position = contentTypeOrderParameterValue?.position ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "default": n => { this.default_escaped = n.getBooleanValue(); },
            "position": n => { this.position = n.getNumberValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.default_escaped){
        writer.writeBooleanValue("default", this.default_escaped);
        }
        if(this.position){
        writer.writeNumberValue("position", this.position);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
