import {BookingsAvailabilityStatus} from './bookingsAvailabilityStatus';
import {createDateTimeTimeZoneFromDiscriminatorValue} from './createDateTimeTimeZoneFromDiscriminatorValue';
import {DateTimeTimeZone} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AvailabilityItem implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    private _endDateTime?: DateTimeTimeZone | undefined;
    private _odataType?: string | undefined;
    /** Indicates the service ID in case of 1:n appointments. If the appointment is of type 1:n, this field will be present, otherwise, null. */
    private _serviceId?: string | undefined;
    private _startDateTime?: DateTimeTimeZone | undefined;
    /** The status of the staff member. Possible values are: available, busy, slotsAvailable, outOfOffice, unknownFutureValue. */
    private _status?: BookingsAvailabilityStatus | undefined;
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
     * Instantiates a new availabilityItem and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the endDateTime property value. 
     * @returns a dateTimeTimeZone
     */
    public get endDateTime() {
        return this._endDateTime;
    };
    /**
     * Sets the endDateTime property value. 
     * @param value Value to set for the endDateTime property.
     */
    public set endDateTime(value: DateTimeTimeZone | undefined) {
        this._endDateTime = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "endDateTime": n => { this.endDateTime = n.getObjectValue<DateTimeTimeZone>(createDateTimeTimeZoneFromDiscriminatorValue); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
            "serviceId": n => { this.serviceId = n.getStringValue(); },
            "startDateTime": n => { this.startDateTime = n.getObjectValue<DateTimeTimeZone>(createDateTimeTimeZoneFromDiscriminatorValue); },
            "status": n => { this.status = n.getEnumValue<BookingsAvailabilityStatus>(BookingsAvailabilityStatus); },
        };
    };
    /**
     * Gets the @odata.type property value. 
     * @returns a string
     */
    public get odataType() {
        return this._odataType;
    };
    /**
     * Sets the @odata.type property value. 
     * @param value Value to set for the OdataType property.
     */
    public set odataType(value: string | undefined) {
        this._odataType = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeObjectValue<DateTimeTimeZone>("endDateTime", this.endDateTime);
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeStringValue("serviceId", this.serviceId);
        writer.writeObjectValue<DateTimeTimeZone>("startDateTime", this.startDateTime);
        writer.writeEnumValue<BookingsAvailabilityStatus>("status", this.status);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the serviceId property value. Indicates the service ID in case of 1:n appointments. If the appointment is of type 1:n, this field will be present, otherwise, null.
     * @returns a string
     */
    public get serviceId() {
        return this._serviceId;
    };
    /**
     * Sets the serviceId property value. Indicates the service ID in case of 1:n appointments. If the appointment is of type 1:n, this field will be present, otherwise, null.
     * @param value Value to set for the serviceId property.
     */
    public set serviceId(value: string | undefined) {
        this._serviceId = value;
    };
    /**
     * Gets the startDateTime property value. 
     * @returns a dateTimeTimeZone
     */
    public get startDateTime() {
        return this._startDateTime;
    };
    /**
     * Sets the startDateTime property value. 
     * @param value Value to set for the startDateTime property.
     */
    public set startDateTime(value: DateTimeTimeZone | undefined) {
        this._startDateTime = value;
    };
    /**
     * Gets the status property value. The status of the staff member. Possible values are: available, busy, slotsAvailable, outOfOffice, unknownFutureValue.
     * @returns a bookingsAvailabilityStatus
     */
    public get status() {
        return this._status;
    };
    /**
     * Sets the status property value. The status of the staff member. Possible values are: available, busy, slotsAvailable, outOfOffice, unknownFutureValue.
     * @param value Value to set for the status property.
     */
    public set status(value: BookingsAvailabilityStatus | undefined) {
        this._status = value;
    };
}
