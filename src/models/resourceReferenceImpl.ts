import {ResourceReference} from './resourceReference';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ResourceReferenceImpl implements ResourceReference {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The item's unique identifier. */
    private _id?: string | undefined;
    /** A string value that can be used to classify the item, such as 'microsoft.graph.driveItem' */
    private _type?: string | undefined;
    /** A URL leading to the referenced item. */
    private _webUrl?: string | undefined;
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
    public set additionalData(value: Record<string, unknown>) {
        if(value) {
            this._additionalData = value;
        }
    };
    /**
     * Instantiates a new resourceReference and sets the default values.
     * @param resourceReferenceParameterValue 
     */
    public constructor(resourceReferenceParameterValue?: ResourceReference | undefined) {
        this._additionalData = resourceReferenceParameterValue?.additionalData ? resourceReferenceParameterValue?.additionalData! : {};
        this._id = resourceReferenceParameterValue?.id;
        this._type = resourceReferenceParameterValue?.type;
        this._webUrl = resourceReferenceParameterValue?.webUrl;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "id": n => { this.id = n.getStringValue(); },
            "type": n => { this.type = n.getStringValue(); },
            "webUrl": n => { this.webUrl = n.getStringValue(); },
        };
    };
    /**
     * Gets the id property value. The item's unique identifier.
     * @returns a string
     */
    public get id() {
        return this._id;
    };
    /**
     * Sets the id property value. The item's unique identifier.
     * @param value Value to set for the id property.
     */
    public set id(value: string | undefined) {
        if(value) {
            this._id = value;
        }
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
        if(this.type){
            writer.writeStringValue("type", this.type);
        }
        if(this.webUrl){
            writer.writeStringValue("webUrl", this.webUrl);
        }
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the type property value. A string value that can be used to classify the item, such as 'microsoft.graph.driveItem'
     * @returns a string
     */
    public get type() {
        return this._type;
    };
    /**
     * Sets the type property value. A string value that can be used to classify the item, such as 'microsoft.graph.driveItem'
     * @param value Value to set for the type property.
     */
    public set type(value: string | undefined) {
        if(value) {
            this._type = value;
        }
    };
    /**
     * Gets the webUrl property value. A URL leading to the referenced item.
     * @returns a string
     */
    public get webUrl() {
        return this._webUrl;
    };
    /**
     * Sets the webUrl property value. A URL leading to the referenced item.
     * @param value Value to set for the webUrl property.
     */
    public set webUrl(value: string | undefined) {
        if(value) {
            this._webUrl = value;
        }
    };
}
