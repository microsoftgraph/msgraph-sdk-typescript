import {ItemBodyImpl, KeyValuePairImpl, TeamworkActivityTopicImpl} from '../../../models/';
import {createItemBodyFromDiscriminatorValue} from '../../../models/createItemBodyFromDiscriminatorValue';
import {createKeyValuePairFromDiscriminatorValue} from '../../../models/createKeyValuePairFromDiscriminatorValue';
import {createTeamworkActivityTopicFromDiscriminatorValue} from '../../../models/createTeamworkActivityTopicFromDiscriminatorValue';
import {ItemBody} from '../../../models/itemBody';
import {KeyValuePair} from '../../../models/keyValuePair';
import {TeamworkActivityTopic} from '../../../models/teamworkActivityTopic';
import {SendActivityNotificationPostRequestBody} from './sendActivityNotificationPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the sendActivityNotification method. */
export class SendActivityNotificationPostRequestBodyImpl implements AdditionalDataHolder, Parsable, SendActivityNotificationPostRequestBody {
    /** The activityType property */
    public activityType?: string | undefined;
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The chainId property */
    public chainId?: number | undefined;
    /** The previewText property */
    public previewText?: ItemBody | undefined;
    /** The templateParameters property */
    public templateParameters?: KeyValuePair[] | undefined;
    /** The topic property */
    public topic?: TeamworkActivityTopic | undefined;
    /**
     * Instantiates a new sendActivityNotificationPostRequestBody and sets the default values.
     * @param sendActivityNotificationPostRequestBodyParameterValue 
     */
    public constructor(sendActivityNotificationPostRequestBodyParameterValue?: SendActivityNotificationPostRequestBody | undefined) {
        this.activityType = sendActivityNotificationPostRequestBodyParameterValue?.activityType ;
        this.additionalData = sendActivityNotificationPostRequestBodyParameterValue?.additionalData ? sendActivityNotificationPostRequestBodyParameterValue?.additionalData! : {}
        this.chainId = sendActivityNotificationPostRequestBodyParameterValue?.chainId ;
        this.previewText = sendActivityNotificationPostRequestBodyParameterValue?.previewText ;
        this.templateParameters = sendActivityNotificationPostRequestBodyParameterValue?.templateParameters ;
        this.topic = sendActivityNotificationPostRequestBodyParameterValue?.topic ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "activityType": n => { this.activityType = n.getStringValue(); },
            "chainId": n => { this.chainId = n.getNumberValue(); },
            "previewText": n => { this.previewText = n.getObjectValue<ItemBodyImpl>(createItemBodyFromDiscriminatorValue); },
            "templateParameters": n => { this.templateParameters = n.getCollectionOfObjectValues<KeyValuePairImpl>(createKeyValuePairFromDiscriminatorValue); },
            "topic": n => { this.topic = n.getObjectValue<TeamworkActivityTopicImpl>(createTeamworkActivityTopicFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.activityType){
        writer.writeStringValue("activityType", this.activityType);
        }
        if(this.chainId){
        writer.writeNumberValue("chainId", this.chainId);
        }
        if(this.previewText){
        writer.writeObjectValue<ItemBodyImpl>("previewText", new ItemBodyImpl(this.previewText));
        }
        if(this.templateParameters && this.templateParameters.length != 0){        const templateParametersArrValue: KeyValuePairImpl[] = []; this.templateParameters?.forEach(element => {templateParametersArrValue.push(new KeyValuePairImpl(element));});
        writer.writeCollectionOfObjectValues<KeyValuePairImpl>("templateParameters", templateParametersArrValue);
        }
        if(this.topic){
        writer.writeObjectValue<TeamworkActivityTopicImpl>("topic", new TeamworkActivityTopicImpl(this.topic));
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
