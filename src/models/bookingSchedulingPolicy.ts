import {AdditionalDataHolder, Duration, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** This type represents the set of policies that dictate how bookings can be created in a Booking Calendar. */
export class BookingSchedulingPolicy implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** True if to allow customers to choose a specific person for the booking. */
    private _allowStaffSelection?: boolean | undefined;
    /** Maximum number of days in advance that a booking can be made. It follows the ISO 8601 format. */
    private _maximumAdvance?: Duration | undefined;
    /** The minimum amount of time before which bookings and cancellations must be made. It follows the ISO 8601 format. */
    private _minimumLeadTime?: Duration | undefined;
    /** The OdataType property */
    private _odataType?: string | undefined;
    /** True to notify the business via email when a booking is created or changed. Use the email address specified in the email property of the bookingBusiness entity for the business. */
    private _sendConfirmationsToOwner?: boolean | undefined;
    /** Duration of each time slot, denoted in ISO 8601 format. */
    private _timeSlotInterval?: Duration | undefined;
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
     * Gets the allowStaffSelection property value. True if to allow customers to choose a specific person for the booking.
     * @returns a boolean
     */
    public get allowStaffSelection() {
        return this._allowStaffSelection;
    };
    /**
     * Sets the allowStaffSelection property value. True if to allow customers to choose a specific person for the booking.
     * @param value Value to set for the allowStaffSelection property.
     */
    public set allowStaffSelection(value: boolean | undefined) {
        this._allowStaffSelection = value;
    };
    /**
     * Instantiates a new bookingSchedulingPolicy and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
        this.odataType = "#microsoft.graph.bookingSchedulingPolicy";
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "allowStaffSelection": n => { this.allowStaffSelection = n.getBooleanValue(); },
            "maximumAdvance": n => { this.maximumAdvance = n.getDurationValue(); },
            "minimumLeadTime": n => { this.minimumLeadTime = n.getDurationValue(); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
            "sendConfirmationsToOwner": n => { this.sendConfirmationsToOwner = n.getBooleanValue(); },
            "timeSlotInterval": n => { this.timeSlotInterval = n.getDurationValue(); },
        };
    };
    /**
     * Gets the maximumAdvance property value. Maximum number of days in advance that a booking can be made. It follows the ISO 8601 format.
     * @returns a Duration
     */
    public get maximumAdvance() {
        return this._maximumAdvance;
    };
    /**
     * Sets the maximumAdvance property value. Maximum number of days in advance that a booking can be made. It follows the ISO 8601 format.
     * @param value Value to set for the maximumAdvance property.
     */
    public set maximumAdvance(value: Duration | undefined) {
        this._maximumAdvance = value;
    };
    /**
     * Gets the minimumLeadTime property value. The minimum amount of time before which bookings and cancellations must be made. It follows the ISO 8601 format.
     * @returns a Duration
     */
    public get minimumLeadTime() {
        return this._minimumLeadTime;
    };
    /**
     * Sets the minimumLeadTime property value. The minimum amount of time before which bookings and cancellations must be made. It follows the ISO 8601 format.
     * @param value Value to set for the minimumLeadTime property.
     */
    public set minimumLeadTime(value: Duration | undefined) {
        this._minimumLeadTime = value;
    };
    /**
     * Gets the @odata.type property value. The OdataType property
     * @returns a string
     */
    public get odataType() {
        return this._odataType;
    };
    /**
     * Sets the @odata.type property value. The OdataType property
     * @param value Value to set for the OdataType property.
     */
    public set odataType(value: string | undefined) {
        this._odataType = value;
    };
    /**
     * Gets the sendConfirmationsToOwner property value. True to notify the business via email when a booking is created or changed. Use the email address specified in the email property of the bookingBusiness entity for the business.
     * @returns a boolean
     */
    public get sendConfirmationsToOwner() {
        return this._sendConfirmationsToOwner;
    };
    /**
     * Sets the sendConfirmationsToOwner property value. True to notify the business via email when a booking is created or changed. Use the email address specified in the email property of the bookingBusiness entity for the business.
     * @param value Value to set for the sendConfirmationsToOwner property.
     */
    public set sendConfirmationsToOwner(value: boolean | undefined) {
        this._sendConfirmationsToOwner = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeBooleanValue("allowStaffSelection", this.allowStaffSelection);
        writer.writeDurationValue("maximumAdvance", this.maximumAdvance);
        writer.writeDurationValue("minimumLeadTime", this.minimumLeadTime);
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeBooleanValue("sendConfirmationsToOwner", this.sendConfirmationsToOwner);
        writer.writeDurationValue("timeSlotInterval", this.timeSlotInterval);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the timeSlotInterval property value. Duration of each time slot, denoted in ISO 8601 format.
     * @returns a Duration
     */
    public get timeSlotInterval() {
        return this._timeSlotInterval;
    };
    /**
     * Sets the timeSlotInterval property value. Duration of each time slot, denoted in ISO 8601 format.
     * @param value Value to set for the timeSlotInterval property.
     */
    public set timeSlotInterval(value: Duration | undefined) {
        this._timeSlotInterval = value;
    };
}
