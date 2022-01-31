import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class BookingSchedulingPolicy implements Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    /** True if to allow customers to choose a specific person for the booking.  */
    private _allowStaffSelection?: boolean | undefined;
    /** Maximum number of days in advance that a booking can be made. It follows the ISO 8601 format.  */
    private _maximumAdvance?: string | undefined;
    /** The minimum amount of time before which bookings and cancellations must be made. It follows the ISO 8601 format.  */
    private _minimumLeadTime?: string | undefined;
    /** True to notify the business via email when a booking is created or changed. Use the email address specified in the email property of the bookingBusiness entity for the business.  */
    private _sendConfirmationsToOwner?: boolean | undefined;
    /** Duration of each time slot, denoted in ISO 8601 format.  */
    private _timeSlotInterval?: string | undefined;
    /**
     * Instantiates a new bookingSchedulingPolicy and sets the default values.
     */
    public constructor() {
        this._additionalData = new Map<string, unknown>();
    };
    /**
     * Gets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @returns a Map<string, unknown>
     */
    public get additionalData() {
        return this._additionalData;
    };
    /**
     * Gets the allowStaffSelection property value. True if to allow customers to choose a specific person for the booking.
     * @returns a boolean
     */
    public get allowStaffSelection() {
        return this._allowStaffSelection;
    };
    /**
     * Gets the maximumAdvance property value. Maximum number of days in advance that a booking can be made. It follows the ISO 8601 format.
     * @returns a string
     */
    public get maximumAdvance() {
        return this._maximumAdvance;
    };
    /**
     * Gets the minimumLeadTime property value. The minimum amount of time before which bookings and cancellations must be made. It follows the ISO 8601 format.
     * @returns a string
     */
    public get minimumLeadTime() {
        return this._minimumLeadTime;
    };
    /**
     * Gets the sendConfirmationsToOwner property value. True to notify the business via email when a booking is created or changed. Use the email address specified in the email property of the bookingBusiness entity for the business.
     * @returns a boolean
     */
    public get sendConfirmationsToOwner() {
        return this._sendConfirmationsToOwner;
    };
    /**
     * Gets the timeSlotInterval property value. Duration of each time slot, denoted in ISO 8601 format.
     * @returns a string
     */
    public get timeSlotInterval() {
        return this._timeSlotInterval;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["allowStaffSelection", (o, n) => { (o as unknown as BookingSchedulingPolicy).allowStaffSelection = n.getBooleanValue(); }],
            ["maximumAdvance", (o, n) => { (o as unknown as BookingSchedulingPolicy).maximumAdvance = n.getStringValue(); }],
            ["minimumLeadTime", (o, n) => { (o as unknown as BookingSchedulingPolicy).minimumLeadTime = n.getStringValue(); }],
            ["sendConfirmationsToOwner", (o, n) => { (o as unknown as BookingSchedulingPolicy).sendConfirmationsToOwner = n.getBooleanValue(); }],
            ["timeSlotInterval", (o, n) => { (o as unknown as BookingSchedulingPolicy).timeSlotInterval = n.getStringValue(); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeBooleanValue("allowStaffSelection", this.allowStaffSelection);
        writer.writeStringValue("maximumAdvance", this.maximumAdvance);
        writer.writeStringValue("minimumLeadTime", this.minimumLeadTime);
        writer.writeBooleanValue("sendConfirmationsToOwner", this.sendConfirmationsToOwner);
        writer.writeStringValue("timeSlotInterval", this.timeSlotInterval);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Sets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @param value Value to set for the AdditionalData property.
     */
    public set additionalData(value: Map<string, unknown>) {
        this._additionalData = value;
    };
    /**
     * Sets the allowStaffSelection property value. True if to allow customers to choose a specific person for the booking.
     * @param value Value to set for the allowStaffSelection property.
     */
    public set allowStaffSelection(value: boolean | undefined) {
        this._allowStaffSelection = value;
    };
    /**
     * Sets the maximumAdvance property value. Maximum number of days in advance that a booking can be made. It follows the ISO 8601 format.
     * @param value Value to set for the maximumAdvance property.
     */
    public set maximumAdvance(value: string | undefined) {
        this._maximumAdvance = value;
    };
    /**
     * Sets the minimumLeadTime property value. The minimum amount of time before which bookings and cancellations must be made. It follows the ISO 8601 format.
     * @param value Value to set for the minimumLeadTime property.
     */
    public set minimumLeadTime(value: string | undefined) {
        this._minimumLeadTime = value;
    };
    /**
     * Sets the sendConfirmationsToOwner property value. True to notify the business via email when a booking is created or changed. Use the email address specified in the email property of the bookingBusiness entity for the business.
     * @param value Value to set for the sendConfirmationsToOwner property.
     */
    public set sendConfirmationsToOwner(value: boolean | undefined) {
        this._sendConfirmationsToOwner = value;
    };
    /**
     * Sets the timeSlotInterval property value. Duration of each time slot, denoted in ISO 8601 format.
     * @param value Value to set for the timeSlotInterval property.
     */
    public set timeSlotInterval(value: string | undefined) {
        this._timeSlotInterval = value;
    };
}
