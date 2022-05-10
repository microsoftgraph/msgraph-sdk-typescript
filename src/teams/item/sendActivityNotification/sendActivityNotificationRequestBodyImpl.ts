import {ItemBodyImpl, KeyValuePairImpl, TeamworkActivityTopicImpl, TeamworkNotificationRecipientImpl} from '../../../models/';
import {createItemBodyFromDiscriminatorValue} from '../../../models/createItemBodyFromDiscriminatorValue';
import {createKeyValuePairFromDiscriminatorValue} from '../../../models/createKeyValuePairFromDiscriminatorValue';
import {createTeamworkActivityTopicFromDiscriminatorValue} from '../../../models/createTeamworkActivityTopicFromDiscriminatorValue';
import {createTeamworkNotificationRecipientFromDiscriminatorValue} from '../../../models/createTeamworkNotificationRecipientFromDiscriminatorValue';
import {ItemBody} from '../../../models/itemBody';
import {KeyValuePair} from '../../../models/keyValuePair';
import {TeamworkActivityTopic} from '../../../models/teamworkActivityTopic';
import {TeamworkNotificationRecipient} from '../../../models/teamworkNotificationRecipient';
import {SendActivityNotificationRequestBody} from './sendActivityNotificationRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the sendActivityNotification method.  */
export class SendActivityNotificationRequestBodyImpl implements AdditionalDataHolder, Parsable, SendActivityNotificationRequestBody {
    /** The activityType property  */
    activityType?: string | undefined;
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    additionalData: Record<string, unknown>;
    /** The chainId property  */
    chainId?: number | undefined;
    /** The previewText property  */
    previewText?: ItemBody | undefined;
    /** The recipient property  */
    recipient?: TeamworkNotificationRecipient | undefined;
    /** The templateParameters property  */
    templateParameters?: KeyValuePair[] | undefined;
    /** The topic property  */
    topic?: TeamworkActivityTopic | undefined;
    /**
     * Instantiates a new sendActivityNotificationRequestBody and sets the default values.
     * @param sendActivityNotificationRequestBodyParameterValue 
     */
    public constructor(sendActivityNotificationRequestBodyParameterValue?: SendActivityNotificationRequestBody | undefined) {
        this.additionalData = {};
        this.activityType = sendActivityNotificationRequestBodyParameterValue?.activityType ;
        this.additionalData = sendActivityNotificationRequestBodyParameterValue?.additionalData ? {} : sendActivityNotificationRequestBodyParameterValue?.additionalData!
        this.chainId = sendActivityNotificationRequestBodyParameterValue?.chainId ;
        this.previewText = sendActivityNotificationRequestBodyParameterValue?.previewText ;
        this.recipient = sendActivityNotificationRequestBodyParameterValue?.recipient ;
        this.templateParameters = sendActivityNotificationRequestBodyParameterValue?.templateParameters ;
        this.topic = sendActivityNotificationRequestBodyParameterValue?.topic ;
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
            "recipient": n => { this.recipient = n.getObjectValue<TeamworkNotificationRecipientImpl>(createTeamworkNotificationRecipientFromDiscriminatorValue); },
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
        if(this.activityType)
        writer.writeStringValue("activityType", this.activityType);
        }
        if(this.chainId){
        if(this.chainId)
        writer.writeNumberValue("chainId", this.chainId);
        }
        if(this.previewText){
        if(this.previewText)
        writer.writeObjectValue<ItemBodyImpl>("previewText", new ItemBodyImpl(this.previewText));
        }
        if(this.recipient){
        if(this.recipient)
        writer.writeObjectValue<TeamworkNotificationRecipientImpl>("recipient", new TeamworkNotificationRecipientImpl(this.recipient));
        }
        if(this.templateParameters){
        const templateParametersArrValue: KeyValuePairImpl[] = []; this.templateParameters?.forEach(element => {templateParametersArrValue.push(new KeyValuePairImpl(element));});
        writer.writeCollectionOfObjectValues<KeyValuePairImpl>("templateParameters", templateParametersArrValue);
        }
        if(this.topic){
        if(this.topic)
        writer.writeObjectValue<TeamworkActivityTopicImpl>("topic", new TeamworkActivityTopicImpl(this.topic));
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
