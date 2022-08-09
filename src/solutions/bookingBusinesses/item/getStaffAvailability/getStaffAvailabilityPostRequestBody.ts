import {DateTimeTimeZone} from '../../../../models/';
import {createDateTimeTimeZoneFromDiscriminatorValue} from '../../../../models/createDateTimeTimeZoneFromDiscriminatorValue';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the getStaffAvailability method. */
export class GetStaffAvailabilityPostRequestBody implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The endDateTime property */
    private _endDateTime?: DateTimeTimeZone | undefined;
    /** The staffIds property */
    private _staffIds?: string[] | undefined;
    /** The startDateTime property */
    private _startDateTime?: DateTimeTimeZone | undefined;
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
     * Instantiates a new getStaffAvailabilityPostRequestBody and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the endDateTime property value. The endDateTime property
     * @returns a dateTimeTimeZone
     */
    public get endDateTime() {
        return this._endDateTime;
    };
    /**
     * Sets the endDateTime property value. The endDateTime property
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
            "staffIds": n => { this.staffIds = n.getCollectionOfPrimitiveValues<string>(); },
            "startDateTime": n => { this.startDateTime = n.getObjectValue<DateTimeTimeZone>(createDateTimeTimeZoneFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeObjectValue<DateTimeTimeZone>("endDateTime", this.endDateTime);
        writer.writeCollectionOfPrimitiveValues<string>("staffIds", this.staffIds);
        writer.writeObjectValue<DateTimeTimeZone>("startDateTime", this.startDateTime);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the staffIds property value. The staffIds property
     * @returns a string
     */
    public get staffIds() {
        return this._staffIds;
    };
    /**
     * Sets the staffIds property value. The staffIds property
     * @param value Value to set for the staffIds property.
     */
    public set staffIds(value: string[] | undefined) {
        this._staffIds = value;
    };
    /**
     * Gets the startDateTime property value. The startDateTime property
     * @returns a dateTimeTimeZone
     */
    public get startDateTime() {
        return this._startDateTime;
    };
    /**
     * Sets the startDateTime property value. The startDateTime property
     * @param value Value to set for the startDateTime property.
     */
    public set startDateTime(value: DateTimeTimeZone | undefined) {
        this._startDateTime = value;
    };
}
