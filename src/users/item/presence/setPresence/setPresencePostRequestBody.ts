import {AdditionalDataHolder, Duration, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the setPresence method. */
export class SetPresencePostRequestBody implements AdditionalDataHolder, Parsable {
    /** The activity property */
    private _activity?: string | undefined;
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The availability property */
    private _availability?: string | undefined;
    /** The expirationDuration property */
    private _expirationDuration?: Duration | undefined;
    /** The sessionId property */
    private _sessionId?: string | undefined;
    /**
     * Gets the activity property value. The activity property
     * @returns a string
     */
    public get activity() {
        return this._activity;
    };
    /**
     * Sets the activity property value. The activity property
     * @param value Value to set for the activity property.
     */
    public set activity(value: string | undefined) {
        this._activity = value;
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
     * Gets the availability property value. The availability property
     * @returns a string
     */
    public get availability() {
        return this._availability;
    };
    /**
     * Sets the availability property value. The availability property
     * @param value Value to set for the availability property.
     */
    public set availability(value: string | undefined) {
        this._availability = value;
    };
    /**
     * Instantiates a new setPresencePostRequestBody and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the expirationDuration property value. The expirationDuration property
     * @returns a Duration
     */
    public get expirationDuration() {
        return this._expirationDuration;
    };
    /**
     * Sets the expirationDuration property value. The expirationDuration property
     * @param value Value to set for the expirationDuration property.
     */
    public set expirationDuration(value: Duration | undefined) {
        this._expirationDuration = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "activity": n => { this.activity = n.getStringValue(); },
            "availability": n => { this.availability = n.getStringValue(); },
            "expirationDuration": n => { this.expirationDuration = n.getDurationValue(); },
            "sessionId": n => { this.sessionId = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("activity", this.activity);
        writer.writeStringValue("availability", this.availability);
        writer.writeDurationValue("expirationDuration", this.expirationDuration);
        writer.writeStringValue("sessionId", this.sessionId);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the sessionId property value. The sessionId property
     * @returns a string
     */
    public get sessionId() {
        return this._sessionId;
    };
    /**
     * Sets the sessionId property value. The sessionId property
     * @param value Value to set for the sessionId property.
     */
    public set sessionId(value: string | undefined) {
        this._sessionId = value;
    };
}
