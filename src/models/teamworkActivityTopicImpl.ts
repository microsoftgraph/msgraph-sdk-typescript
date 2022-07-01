import {TeamworkActivityTopic} from './teamworkActivityTopic';
import {TeamworkActivityTopicSource} from './teamworkActivityTopicSource';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class TeamworkActivityTopicImpl implements TeamworkActivityTopic {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData?: Record<string, unknown> | undefined;
    /** Type of source. Possible values are: entityUrl, text. For supported Microsoft Graph URLs, use entityUrl. For custom text, use text. */
    private _source?: TeamworkActivityTopicSource | undefined;
    /** The topic value. If the value of the source property is entityUrl, this must be a Microsoft Graph URL. If the vaule is text, this must be a plain text value. */
    private _value?: string | undefined;
    /** The link the user clicks when they select the notification. Optional when source is entityUrl; required when source is text. */
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
    public set additionalData(value: Record<string, unknown> | undefined) {
        if(value) {
            this._additionalData = value;
        }
    };
    /**
     * Instantiates a new teamworkActivityTopic and sets the default values.
     * @param teamworkActivityTopicParameterValue 
     */
    public constructor(teamworkActivityTopicParameterValue?: TeamworkActivityTopic | undefined) {
        this._additionalData = teamworkActivityTopicParameterValue?.additionalData ? teamworkActivityTopicParameterValue?.additionalData! : {};
        this._source = teamworkActivityTopicParameterValue?.source;
        this._value = teamworkActivityTopicParameterValue?.value;
        this._webUrl = teamworkActivityTopicParameterValue?.webUrl;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "source": n => { this.source = n.getEnumValue<TeamworkActivityTopicSource>(TeamworkActivityTopicSource); },
            "value": n => { this.value = n.getStringValue(); },
            "webUrl": n => { this.webUrl = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.source){
            writer.writeEnumValue<TeamworkActivityTopicSource>("source", this.source);
        }
        if(this.value){
            writer.writeStringValue("value", this.value);
        }
        if(this.webUrl){
            writer.writeStringValue("webUrl", this.webUrl);
        }
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the source property value. Type of source. Possible values are: entityUrl, text. For supported Microsoft Graph URLs, use entityUrl. For custom text, use text.
     * @returns a teamworkActivityTopicSource
     */
    public get source() {
        return this._source;
    };
    /**
     * Sets the source property value. Type of source. Possible values are: entityUrl, text. For supported Microsoft Graph URLs, use entityUrl. For custom text, use text.
     * @param value Value to set for the source property.
     */
    public set source(value: TeamworkActivityTopicSource | undefined) {
        if(value) {
            this._source = value;
        }
    };
    /**
     * Gets the value property value. The topic value. If the value of the source property is entityUrl, this must be a Microsoft Graph URL. If the vaule is text, this must be a plain text value.
     * @returns a string
     */
    public get value() {
        return this._value;
    };
    /**
     * Sets the value property value. The topic value. If the value of the source property is entityUrl, this must be a Microsoft Graph URL. If the vaule is text, this must be a plain text value.
     * @param value Value to set for the value property.
     */
    public set value(value: string | undefined) {
        if(value) {
            this._value = value;
        }
    };
    /**
     * Gets the webUrl property value. The link the user clicks when they select the notification. Optional when source is entityUrl; required when source is text.
     * @returns a string
     */
    public get webUrl() {
        return this._webUrl;
    };
    /**
     * Sets the webUrl property value. The link the user clicks when they select the notification. Optional when source is entityUrl; required when source is text.
     * @param value Value to set for the webUrl property.
     */
    public set webUrl(value: string | undefined) {
        if(value) {
            this._webUrl = value;
        }
    };
}
