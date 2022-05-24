import {TeamworkActivityTopic} from './teamworkActivityTopic';
import {TeamworkActivityTopicSource} from './teamworkActivityTopicSource';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class TeamworkActivityTopicImpl implements AdditionalDataHolder, Parsable, TeamworkActivityTopic {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Type of source. Possible values are: entityUrl, text. For supported Microsoft Graph URLs, use entityUrl. For custom text, use text. */
    public source?: TeamworkActivityTopicSource | undefined;
    /** The topic value. If the value of the source property is entityUrl, this must be a Microsoft Graph URL. If the vaule is text, this must be a plain text value. */
    public value?: string | undefined;
    /** The link the user clicks when they select the notification. Optional when source is entityUrl; required when source is text. */
    public webUrl?: string | undefined;
    /**
     * Instantiates a new teamworkActivityTopic and sets the default values.
     * @param teamworkActivityTopicParameterValue 
     */
    public constructor(teamworkActivityTopicParameterValue?: TeamworkActivityTopic | undefined) {
        this.additionalData = teamworkActivityTopicParameterValue?.additionalData ? teamworkActivityTopicParameterValue?.additionalData! : {}
        this.source = teamworkActivityTopicParameterValue?.source ;
        this.value = teamworkActivityTopicParameterValue?.value ;
        this.webUrl = teamworkActivityTopicParameterValue?.webUrl ;
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
}
