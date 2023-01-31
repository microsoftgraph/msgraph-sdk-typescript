import {ItemBody, KeyValuePair, TeamworkActivityTopic, TeamworkNotificationRecipient} from '../../models/';
import {createItemBodyFromDiscriminatorValue} from '../../models/createItemBodyFromDiscriminatorValue';
import {createKeyValuePairFromDiscriminatorValue} from '../../models/createKeyValuePairFromDiscriminatorValue';
import {createTeamworkActivityTopicFromDiscriminatorValue} from '../../models/createTeamworkActivityTopicFromDiscriminatorValue';
import {createTeamworkNotificationRecipientFromDiscriminatorValue} from '../../models/createTeamworkNotificationRecipientFromDiscriminatorValue';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class SendActivityNotificationToRecipientsPostRequestBody implements AdditionalDataHolder, Parsable {
    private _activityType?: string | undefined;
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    private _chainId?: number | undefined;
    private _previewText?: ItemBody | undefined;
    private _recipients?: TeamworkNotificationRecipient[] | undefined;
    private _teamsAppId?: string | undefined;
    private _templateParameters?: KeyValuePair[] | undefined;
    private _topic?: TeamworkActivityTopic | undefined;
    /**
     * Gets the activityType property value. 
     * @returns a string
     */
    public get activityType() {
        return this._activityType;
    };
    /**
     * Sets the activityType property value. 
     * @param value Value to set for the activityType property.
     */
    public set activityType(value: string | undefined) {
        this._activityType = value;
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
        this._additionalData = value;
    };
    /**
     * Gets the chainId property value. 
     * @returns a int64
     */
    public get chainId() {
        return this._chainId;
    };
    /**
     * Sets the chainId property value. 
     * @param value Value to set for the chainId property.
     */
    public set chainId(value: number | undefined) {
        this._chainId = value;
    };
    /**
     * Instantiates a new sendActivityNotificationToRecipientsPostRequestBody and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "activityType": n => { this.activityType = n.getStringValue(); },
            "chainId": n => { this.chainId = n.getNumberValue(); },
            "previewText": n => { this.previewText = n.getObjectValue<ItemBody>(createItemBodyFromDiscriminatorValue); },
            "recipients": n => { this.recipients = n.getCollectionOfObjectValues<TeamworkNotificationRecipient>(createTeamworkNotificationRecipientFromDiscriminatorValue); },
            "teamsAppId": n => { this.teamsAppId = n.getStringValue(); },
            "templateParameters": n => { this.templateParameters = n.getCollectionOfObjectValues<KeyValuePair>(createKeyValuePairFromDiscriminatorValue); },
            "topic": n => { this.topic = n.getObjectValue<TeamworkActivityTopic>(createTeamworkActivityTopicFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the previewText property value. 
     * @returns a itemBody
     */
    public get previewText() {
        return this._previewText;
    };
    /**
     * Sets the previewText property value. 
     * @param value Value to set for the previewText property.
     */
    public set previewText(value: ItemBody | undefined) {
        this._previewText = value;
    };
    /**
     * Gets the recipients property value. 
     * @returns a teamworkNotificationRecipient
     */
    public get recipients() {
        return this._recipients;
    };
    /**
     * Sets the recipients property value. 
     * @param value Value to set for the recipients property.
     */
    public set recipients(value: TeamworkNotificationRecipient[] | undefined) {
        this._recipients = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("activityType", this.activityType);
        writer.writeNumberValue("chainId", this.chainId);
        writer.writeObjectValue<ItemBody>("previewText", this.previewText);
        writer.writeCollectionOfObjectValues<TeamworkNotificationRecipient>("recipients", this.recipients);
        writer.writeStringValue("teamsAppId", this.teamsAppId);
        writer.writeCollectionOfObjectValues<KeyValuePair>("templateParameters", this.templateParameters);
        writer.writeObjectValue<TeamworkActivityTopic>("topic", this.topic);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the teamsAppId property value. 
     * @returns a string
     */
    public get teamsAppId() {
        return this._teamsAppId;
    };
    /**
     * Sets the teamsAppId property value. 
     * @param value Value to set for the teamsAppId property.
     */
    public set teamsAppId(value: string | undefined) {
        this._teamsAppId = value;
    };
    /**
     * Gets the templateParameters property value. 
     * @returns a keyValuePair
     */
    public get templateParameters() {
        return this._templateParameters;
    };
    /**
     * Sets the templateParameters property value. 
     * @param value Value to set for the templateParameters property.
     */
    public set templateParameters(value: KeyValuePair[] | undefined) {
        this._templateParameters = value;
    };
    /**
     * Gets the topic property value. 
     * @returns a teamworkActivityTopic
     */
    public get topic() {
        return this._topic;
    };
    /**
     * Sets the topic property value. 
     * @param value Value to set for the topic property.
     */
    public set topic(value: TeamworkActivityTopic | undefined) {
        this._topic = value;
    };
}
