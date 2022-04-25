import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter, TimeOnly} from '@microsoft/kiota-abstractions';

export class TimeRange implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Record<string, unknown>;
    /** End time for the time range.  */
    private _endTime?: TimeOnly | undefined;
    /** Start time for the time range.  */
    private _startTime?: TimeOnly | undefined;
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
     * Instantiates a new timeRange and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the endTime property value. End time for the time range.
     * @returns a TimeOnly
     */
    public get endTime() {
        return this._endTime;
    };
    /**
     * Sets the endTime property value. End time for the time range.
     * @param value Value to set for the endTime property.
     */
    public set endTime(value: TimeOnly | undefined) {
        this._endTime = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "endTime": n => { this.endTime = n.getTimeOnlyValue(); },
            "startTime": n => { this.startTime = n.getTimeOnlyValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeTimeOnlyValue("endTime", this.endTime);
        writer.writeTimeOnlyValue("startTime", this.startTime);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the startTime property value. Start time for the time range.
     * @returns a TimeOnly
     */
    public get startTime() {
        return this._startTime;
    };
    /**
     * Sets the startTime property value. Start time for the time range.
     * @param value Value to set for the startTime property.
     */
    public set startTime(value: TimeOnly | undefined) {
        this._startTime = value;
    };
}
