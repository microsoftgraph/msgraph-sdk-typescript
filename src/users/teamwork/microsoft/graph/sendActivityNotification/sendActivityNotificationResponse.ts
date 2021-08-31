import {ItemBody} from '../../../../../chats/itemBody';
import {KeyValuePair} from '../../../../../deviceAppManagement/keyValuePair';
import {SerializationWriter, ParseNode, Parsable} from '@microsoft/kiota-abstractions';

export class Microsoft.graph.sendActivityNotificationResponse implements Parsable {
    private _activityType?: string | undefined;
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    private _chainId?: Int64 | undefined;
    private _previewText?: ItemBody | undefined;
    private _templateParameters?: KeyValuePair[] | undefined;
    private _topic?: TeamworkActivityTopic | undefined;
    /**
     * Instantiates a new Microsoft.graph.sendActivityNotificationResponse and sets the default values.
     */
    public constructor() {
        this._additionalData = new Map<string, unknown>();
    };
    /**
     * Gets the activityType property value. 
     * @returns a string
     */
    public get activityType() {
        return this._activityType;
    };
    /**
     * Gets the AdditionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @returns a Map<string, unknown>
     */
    public get additionalData() {
        return this._additionalData;
    };
    /**
     * Gets the chainId property value. 
     * @returns a int64
     */
    public get chainId() {
        return this._chainId;
    };
    /**
     * Gets the previewText property value. 
     * @returns a itemBody
     */
    public get previewText() {
        return this._previewText;
    };
    /**
     * Gets the templateParameters property value. 
     * @returns a keyValuePair
     */
    public get templateParameters() {
        return this._templateParameters;
    };
    /**
     * Gets the topic property value. 
     * @returns a teamworkActivityTopic
     */
    public get topic() {
        return this._topic;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["activityType", (o, n) => { (o as unknown as Microsoft.graph.sendActivityNotificationResponse).activityType = n.getStringValue(); }],
            ["chainId", (o, n) => { (o as unknown as Microsoft.graph.sendActivityNotificationResponse).chainId = n.getObjectValue<Int64>(Int64); }],
            ["previewText", (o, n) => { (o as unknown as Microsoft.graph.sendActivityNotificationResponse).previewText = n.getObjectValue<ItemBody>(ItemBody); }],
            ["templateParameters", (o, n) => { (o as unknown as Microsoft.graph.sendActivityNotificationResponse).templateParameters = n.getCollectionOfObjectValues<KeyValuePair>(KeyValuePair); }],
            ["topic", (o, n) => { (o as unknown as Microsoft.graph.sendActivityNotificationResponse).topic = n.getObjectValue<TeamworkActivityTopic>(TeamworkActivityTopic); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("activityType", this.activityType);
        writer.writeObjectValue<Int64>("chainId", this.chainId);
        writer.writeObjectValue<ItemBody>("previewText", this.previewText);
        writer.writeCollectionOfObjectValues<KeyValuePair>("templateParameters", this.templateParameters);
        writer.writeObjectValue<TeamworkActivityTopic>("topic", this.topic);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Sets the activityType property value. 
     * @param value Value to set for the activityType property.
     */
    public set activityType(value: string | undefined) {
        this._activityType = value;
    };
    /**
     * Sets the AdditionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @param value Value to set for the AdditionalData property.
     */
    public set additionalData(value: Map<string, unknown>) {
        this._additionalData = value;
    };
    /**
     * Sets the chainId property value. 
     * @param value Value to set for the chainId property.
     */
    public set chainId(value: Int64 | undefined) {
        this._chainId = value;
    };
    /**
     * Sets the previewText property value. 
     * @param value Value to set for the previewText property.
     */
    public set previewText(value: ItemBody | undefined) {
        this._previewText = value;
    };
    /**
     * Sets the templateParameters property value. 
     * @param value Value to set for the templateParameters property.
     */
    public set templateParameters(value: KeyValuePair[] | undefined) {
        this._templateParameters = value;
    };
    /**
     * Sets the topic property value. 
     * @param value Value to set for the topic property.
     */
    public set topic(value: TeamworkActivityTopic | undefined) {
        this._topic = value;
    };
}
