import {BookingsAvailabilityStatus} from './bookingsAvailabilityStatus';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter, TimeOnly} from '@microsoft/kiota-abstractions';

export class AvailabilityItem implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The endTime property */
    private _endTime?: TimeOnly | undefined;
    /** The OdataType property */
    private _odataType?: string | undefined;
    /** Indicates the service ID in case of 1:n appointments. If the appointment is of type 1:n, this field will be present, otherwise, null. */
    private _serviceId?: string | undefined;
    /** The startTime property */
    private _startTime?: TimeOnly | undefined;
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
        this.odataType = "#microsoft.graph.availabilityItem";
    };
    /**
     * Gets the endTime property value. The endTime property
     * @returns a TimeOnly
     */
    public get endTime() {
        return this._endTime;
    };
    /**
     * Sets the endTime property value. The endTime property
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
            "@odata.type": n => { this.odataType = n.getStringValue(); },
            "serviceId": n => { this.serviceId = n.getStringValue(); },
            "startTime": n => { this.startTime = n.getTimeOnlyValue(); },
            "status": n => { this.status = n.getEnumValue<BookingsAvailabilityStatus>(BookingsAvailabilityStatus); },
        };
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
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeTimeOnlyValue("endTime", this.endTime);
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeStringValue("serviceId", this.serviceId);
        writer.writeTimeOnlyValue("startTime", this.startTime);
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
     * Gets the startTime property value. The startTime property
     * @returns a TimeOnly
     */
    public get startTime() {
        return this._startTime;
    };
    /**
     * Sets the startTime property value. The startTime property
     * @param value Value to set for the startTime property.
     */
    public set startTime(value: TimeOnly | undefined) {
        this._startTime = value;
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
