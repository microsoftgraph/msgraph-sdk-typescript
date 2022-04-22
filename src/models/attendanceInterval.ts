import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AttendanceInterval implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Record<string, unknown>;
    /** Duration of the meeting interval in seconds; that is, the difference between joinDateTime and leaveDateTime.  */
    private _durationInSeconds?: number | undefined;
    /** The time the attendee joined in UTC.  */
    private _joinDateTime?: Date | undefined;
    /** The time the attendee left in UTC.  */
    private _leaveDateTime?: Date | undefined;
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
     * Instantiates a new attendanceInterval and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the durationInSeconds property value. Duration of the meeting interval in seconds; that is, the difference between joinDateTime and leaveDateTime.
     * @returns a integer
     */
    public get durationInSeconds() {
        return this._durationInSeconds;
    };
    /**
     * Sets the durationInSeconds property value. Duration of the meeting interval in seconds; that is, the difference between joinDateTime and leaveDateTime.
     * @param value Value to set for the durationInSeconds property.
     */
    public set durationInSeconds(value: number | undefined) {
        this._durationInSeconds = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "durationInSeconds": n => { this.durationInSeconds = n.getNumberValue(); },
            "joinDateTime": n => { this.joinDateTime = n.getDateValue(); },
            "leaveDateTime": n => { this.leaveDateTime = n.getDateValue(); },
        };
    };
    /**
     * Gets the joinDateTime property value. The time the attendee joined in UTC.
     * @returns a Date
     */
    public get joinDateTime() {
        return this._joinDateTime;
    };
    /**
     * Sets the joinDateTime property value. The time the attendee joined in UTC.
     * @param value Value to set for the joinDateTime property.
     */
    public set joinDateTime(value: Date | undefined) {
        this._joinDateTime = value;
    };
    /**
     * Gets the leaveDateTime property value. The time the attendee left in UTC.
     * @returns a Date
     */
    public get leaveDateTime() {
        return this._leaveDateTime;
    };
    /**
     * Sets the leaveDateTime property value. The time the attendee left in UTC.
     * @param value Value to set for the leaveDateTime property.
     */
    public set leaveDateTime(value: Date | undefined) {
        this._leaveDateTime = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeNumberValue("durationInSeconds", this.durationInSeconds);
        writer.writeDateValue("joinDateTime", this.joinDateTime);
        writer.writeDateValue("leaveDateTime", this.leaveDateTime);
        writer.writeAdditionalData(this.additionalData);
    };
}
