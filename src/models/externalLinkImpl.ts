import {ExternalLink} from './externalLink';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ExternalLinkImpl implements ExternalLink {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData?: Record<string, unknown> | undefined;
    /** The url of the link. */
    private _href?: string | undefined;
    /**
     * Gets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @returns a Record<string, unknown>
     */
    public get additionalData() {
        return this._additionalData;
    };
    /**
     * Sets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @param value Value to set for the AdditionalData property.
     */
    public set additionalData(value: Record<string, unknown> | undefined) {
        if(value) {
            this._additionalData = value;
        }
    };
    /**
     * Instantiates a new externalLink and sets the default values.
     * @param externalLinkParameterValue 
     */
    public constructor(externalLinkParameterValue?: ExternalLink | undefined) {
        this._additionalData = externalLinkParameterValue?.additionalData ? externalLinkParameterValue?.additionalData! : {};
        this._href = externalLinkParameterValue?.href;
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
     * Gets the href property value. The url of the link.
     * @returns a string
     */
    public get href() {
        return this._href;
    };
    /**
     * Sets the href property value. The url of the link.
     * @param value Value to set for the href property.
     */
    public set href(value: string | undefined) {
        if(value) {
            this._href = value;
        }
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
