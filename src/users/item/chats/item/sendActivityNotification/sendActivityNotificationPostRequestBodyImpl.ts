import {ItemBodyImpl, KeyValuePairImpl, TeamworkActivityTopicImpl, TeamworkNotificationRecipientImpl} from '../../../../../models/';
import {createItemBodyFromDiscriminatorValue} from '../../../../../models/createItemBodyFromDiscriminatorValue';
import {createKeyValuePairFromDiscriminatorValue} from '../../../../../models/createKeyValuePairFromDiscriminatorValue';
import {createTeamworkActivityTopicFromDiscriminatorValue} from '../../../../../models/createTeamworkActivityTopicFromDiscriminatorValue';
import {createTeamworkNotificationRecipientFromDiscriminatorValue} from '../../../../../models/createTeamworkNotificationRecipientFromDiscriminatorValue';
import {ItemBody} from '../../../../../models/itemBody';
import {KeyValuePair} from '../../../../../models/keyValuePair';
import {TeamworkActivityTopic} from '../../../../../models/teamworkActivityTopic';
import {TeamworkNotificationRecipient} from '../../../../../models/teamworkNotificationRecipient';
import {SendActivityNotificationPostRequestBody} from './sendActivityNotificationPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the sendActivityNotification method. */
export class SendActivityNotificationPostRequestBodyImpl implements SendActivityNotificationPostRequestBody {
    /** The activityType property */
    private _activityType?: string | undefined;
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The chainId property */
    private _chainId?: number | undefined;
    /** The previewText property */
    private _previewText?: ItemBody | undefined;
    /** The recipient property */
    private _recipient?: TeamworkNotificationRecipient | undefined;
    /** The templateParameters property */
    private _templateParameters?: KeyValuePair[] | undefined;
    /** The topic property */
    private _topic?: TeamworkActivityTopic | undefined;
    /**
     * Gets the activityType property value. The activityType property
     * @returns a string
     */
    public get activityType() {
        return this._activityType;
    };
    /**
     * Sets the activityType property value. The activityType property
     * @param value Value to set for the activityType property.
     */
    public set activityType(value: string | undefined) {
        if(value) {
            this._activityType = value;
        }
    };
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
     * Gets the chainId property value. The chainId property
     * @returns a int64
     */
    public get chainId() {
        return this._chainId;
    };
    /**
     * Sets the chainId property value. The chainId property
     * @param value Value to set for the chainId property.
     */
    public set chainId(value: number | undefined) {
        if(value) {
            this._chainId = value;
        }
    };
    /**
     * Instantiates a new sendActivityNotificationPostRequestBody and sets the default values.
     * @param sendActivityNotificationPostRequestBodyParameterValue 
     */
    public constructor(sendActivityNotificationPostRequestBodyParameterValue?: SendActivityNotificationPostRequestBody | undefined) {
        this._activityType = sendActivityNotificationPostRequestBodyParameterValue?.activityType;
        this._additionalData = sendActivityNotificationPostRequestBodyParameterValue?.additionalData ? sendActivityNotificationPostRequestBodyParameterValue?.additionalData! : {};
        this._chainId = sendActivityNotificationPostRequestBodyParameterValue?.chainId;
        this._previewText = sendActivityNotificationPostRequestBodyParameterValue?.previewText;
        this._recipient = sendActivityNotificationPostRequestBodyParameterValue?.recipient;
        this._templateParameters = sendActivityNotificationPostRequestBodyParameterValue?.templateParameters;
        this._topic = sendActivityNotificationPostRequestBodyParameterValue?.topic;
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
     * Gets the previewText property value. The previewText property
     * @returns a ItemBodyInterface
     */
    public get previewText() {
        return this._previewText;
    };
    /**
     * Sets the previewText property value. The previewText property
     * @param value Value to set for the previewText property.
     */
    public set previewText(value: ItemBody | undefined) {
        if(value) {
            this._previewText = value instanceof ItemBodyImpl? value : new ItemBodyImpl(value);
        }
    };
    /**
     * Gets the recipient property value. The recipient property
     * @returns a TeamworkNotificationRecipientInterface
     */
    public get recipient() {
        return this._recipient;
    };
    /**
     * Sets the recipient property value. The recipient property
     * @param value Value to set for the recipient property.
     */
    public set recipient(value: TeamworkNotificationRecipient | undefined) {
        if(value) {
            this._recipient = value instanceof TeamworkNotificationRecipientImpl? value : new TeamworkNotificationRecipientImpl(value);
        }
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
            writer.writeObjectValue<ItemBodyImpl>("previewText", (!this.previewText || this.previewText instanceof ItemBodyImpl? this.previewText : new ItemBodyImpl(this.previewText)));
        }
        if(this.recipient){
            writer.writeObjectValue<TeamworkNotificationRecipientImpl>("recipient", (!this.recipient || this.recipient instanceof TeamworkNotificationRecipientImpl? this.recipient : new TeamworkNotificationRecipientImpl(this.recipient)));
        }
        if(this.templateParameters && this.templateParameters.length != 0){        const templateParametersArrValue: KeyValuePairImpl[] = [];
        this.templateParameters?.forEach(element => {
            templateParametersArrValue.push((element instanceof KeyValuePairImpl? element:new KeyValuePairImpl(element)));
        });
            writer.writeCollectionOfObjectValues<KeyValuePairImpl>("templateParameters", templateParametersArrValue);
        }
        if(this.topic){
            writer.writeObjectValue<TeamworkActivityTopicImpl>("topic", (!this.topic || this.topic instanceof TeamworkActivityTopicImpl? this.topic : new TeamworkActivityTopicImpl(this.topic)));
        }
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the templateParameters property value. The templateParameters property
     * @returns a KeyValuePairInterface
     */
    public get templateParameters() {
        return this._templateParameters;
    };
    /**
     * Sets the templateParameters property value. The templateParameters property
     * @param value Value to set for the templateParameters property.
     */
    public set templateParameters(value: KeyValuePair[] | undefined) {
        if(value) {
            const templateParametersArrValue: KeyValuePairImpl[] = [];
            this.templateParameters?.forEach(element => {
                templateParametersArrValue.push((element instanceof KeyValuePairImpl? element:new KeyValuePairImpl(element)));
            });
            this._templateParameters = templateParametersArrValue;
        }
    };
    /**
     * Gets the topic property value. The topic property
     * @returns a TeamworkActivityTopicInterface
     */
    public get topic() {
        return this._topic;
    };
    /**
     * Sets the topic property value. The topic property
     * @param value Value to set for the topic property.
     */
    public set topic(value: TeamworkActivityTopic | undefined) {
        if(value) {
            this._topic = value instanceof TeamworkActivityTopicImpl? value : new TeamworkActivityTopicImpl(value);
        }
    };
}
