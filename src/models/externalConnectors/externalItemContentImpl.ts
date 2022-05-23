import {ExternalItemContent} from './externalItemContent';
import {ExternalItemContentType} from './externalItemContentType';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ExternalItemContentImpl implements AdditionalDataHolder, ExternalItemContent, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The type of content in the value property. Possible values are text and html. These are the content types that the indexer supports, and not the file extension types allowed. Required. */
    public type?: ExternalItemContentType | undefined;
    /** The content for the externalItem. Required. */
    public value?: string | undefined;
    /**
     * Instantiates a new externalItemContent and sets the default values.
     * @param externalItemContentParameterValue 
     */
    public constructor(externalItemContentParameterValue?: ExternalItemContent | undefined) {
        this.additionalData = externalItemContentParameterValue?.additionalData ? externalItemContentParameterValue?.additionalData! : {}
        this.type = externalItemContentParameterValue?.type ;
        this.value = externalItemContentParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "type": n => { this.type = n.getEnumValue<ExternalItemContentType>(ExternalItemContentType); },
            "value": n => { this.value = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.type){
        writer.writeEnumValue<ExternalItemContentType>("type", this.type);
        }
        if(this.value){
        writer.writeStringValue("value", this.value);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
