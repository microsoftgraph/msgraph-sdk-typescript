import {BodyType} from './bodyType';
import {EducationItemBody} from './educationItemBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class EducationItemBodyImpl implements EducationItemBody {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData?: Record<string, unknown> | undefined;
    /** The content property */
    private _content?: string | undefined;
    /** The contentType property */
    private _contentType?: BodyType | undefined;
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
     * Instantiates a new educationItemBody and sets the default values.
     * @param educationItemBodyParameterValue 
     */
    public constructor(educationItemBodyParameterValue?: EducationItemBody | undefined) {
        this._additionalData = educationItemBodyParameterValue?.additionalData ? educationItemBodyParameterValue?.additionalData! : {};
        this._content = educationItemBodyParameterValue?.content;
        this._contentType = educationItemBodyParameterValue?.contentType;
    };
    /**
     * Gets the content property value. The content property
     * @returns a string
     */
    public get content() {
        return this._content;
    };
    /**
     * Sets the content property value. The content property
     * @param value Value to set for the content property.
     */
    public set content(value: string | undefined) {
        if(value) {
            this._content = value;
        }
    };
    /**
     * Gets the contentType property value. The contentType property
     * @returns a bodyType
     */
    public get contentType() {
        return this._contentType;
    };
    /**
     * Sets the contentType property value. The contentType property
     * @param value Value to set for the contentType property.
     */
    public set contentType(value: BodyType | undefined) {
        if(value) {
            this._contentType = value;
        }
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
