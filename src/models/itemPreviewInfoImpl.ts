import {ItemPreviewInfo} from './itemPreviewInfo';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ItemPreviewInfoImpl implements AdditionalDataHolder, ItemPreviewInfo, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The getUrl property */
    public getUrl?: string | undefined;
    /** The postParameters property */
    public postParameters?: string | undefined;
    /** The postUrl property */
    public postUrl?: string | undefined;
    /**
     * Instantiates a new ItemPreviewInfo and sets the default values.
     * @param itemPreviewInfoParameterValue 
     */
    public constructor(itemPreviewInfoParameterValue?: ItemPreviewInfo | undefined) {
        this.additionalData = itemPreviewInfoParameterValue?.additionalData ? itemPreviewInfoParameterValue?.additionalData! : {}
        this.getUrl = itemPreviewInfoParameterValue?.getUrl ;
        this.postParameters = itemPreviewInfoParameterValue?.postParameters ;
        this.postUrl = itemPreviewInfoParameterValue?.postUrl ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "getUrl": n => { this.getUrl = n.getStringValue(); },
            "postParameters": n => { this.postParameters = n.getStringValue(); },
            "postUrl": n => { this.postUrl = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.getUrl){
        writer.writeStringValue("getUrl", this.getUrl);
        }
        if(this.postParameters){
        writer.writeStringValue("postParameters", this.postParameters);
        }
        if(this.postUrl){
        writer.writeStringValue("postUrl", this.postUrl);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
