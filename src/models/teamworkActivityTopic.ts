import {TeamworkActivityTopicSource} from './teamworkActivityTopicSource';

export interface TeamworkActivityTopic{
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?:Record<string, unknown>;
    /** Type of source. Possible values are: entityUrl, text. For supported Microsoft Graph URLs, use entityUrl. For custom text, use text. */
    source?:TeamworkActivityTopicSource | undefined;
    /** The topic value. If the value of the source property is entityUrl, this must be a Microsoft Graph URL. If the vaule is text, this must be a plain text value. */
    value?:string | undefined;
    /** The link the user clicks when they select the notification. Optional when source is entityUrl; required when source is text. */
    webUrl?:string | undefined;
}
