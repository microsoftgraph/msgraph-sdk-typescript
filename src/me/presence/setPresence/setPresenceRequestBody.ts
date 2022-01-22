import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class SetPresenceRequestBody implements Parsable {
    private _activity?: string | undefined;
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    private _availability?: string | undefined;
    private _expirationDuration?: string | undefined;
    private _sessionId?: string | undefined;
    /**
     * Instantiates a new setPresenceRequestBody and sets the default values.
     */
    public constructor() {
        this._additionalData = new Map<string, unknown>();
    };
    /**
     * Gets the activity property value. 
     * @returns a string
     */
    public get activity() {
        return this._activity;
    };
    /**
     * Gets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @returns a Map<string, unknown>
     */
    public get additionalData() {
        return this._additionalData;
    };
    /**
     * Gets the availability property value. 
     * @returns a string
     */
    public get availability() {
        return this._availability;
    };
    /**
     * Gets the expirationDuration property value. 
     * @returns a string
     */
    public get expirationDuration() {
        return this._expirationDuration;
    };
    /**
     * Gets the sessionId property value. 
     * @returns a string
     */
    public get sessionId() {
        return this._sessionId;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["activity", (o, n) => { (o as unknown as SetPresenceRequestBody).activity = n.getStringValue(); }],
            ["availability", (o, n) => { (o as unknown as SetPresenceRequestBody).availability = n.getStringValue(); }],
            ["expirationDuration", (o, n) => { (o as unknown as SetPresenceRequestBody).expirationDuration = n.getStringValue(); }],
            ["sessionId", (o, n) => { (o as unknown as SetPresenceRequestBody).sessionId = n.getStringValue(); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("activity", this.activity);
        writer.writeStringValue("availability", this.availability);
        writer.writeStringValue("expirationDuration", this.expirationDuration);
        writer.writeStringValue("sessionId", this.sessionId);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Sets the activity property value. 
     * @param value Value to set for the activity property.
     */
    public set activity(value: string | undefined) {
        this._activity = value;
    };
    /**
     * Sets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @param value Value to set for the AdditionalData property.
     */
    public set additionalData(value: Map<string, unknown>) {
        this._additionalData = value;
    };
    /**
     * Sets the availability property value. 
     * @param value Value to set for the availability property.
     */
    public set availability(value: string | undefined) {
        this._availability = value;
    };
    /**
     * Sets the expirationDuration property value. 
     * @param value Value to set for the expirationDuration property.
     */
    public set expirationDuration(value: string | undefined) {
        this._expirationDuration = value;
    };
    /**
     * Sets the sessionId property value. 
     * @param value Value to set for the sessionId property.
     */
    public set sessionId(value: string | undefined) {
        this._sessionId = value;
    };
}
