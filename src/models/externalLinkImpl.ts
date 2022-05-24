import {ExternalLink} from './externalLink';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ExternalLinkImpl implements AdditionalDataHolder, ExternalLink, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The url of the link. */
    public href?: string | undefined;
    /**
     * Instantiates a new externalLink and sets the default values.
     * @param externalLinkParameterValue 
     */
    public constructor(externalLinkParameterValue?: ExternalLink | undefined) {
        this.additionalData = externalLinkParameterValue?.additionalData ? externalLinkParameterValue?.additionalData! : {}
        this.href = externalLinkParameterValue?.href ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "href": n => { this.href = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.href){
        writer.writeStringValue("href", this.href);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
