import {createDaylightTimeZoneOffsetFromDiscriminatorValue} from './createDaylightTimeZoneOffsetFromDiscriminatorValue';
import {createStandardTimeZoneOffsetFromDiscriminatorValue} from './createStandardTimeZoneOffsetFromDiscriminatorValue';
import {DaylightTimeZoneOffset, StandardTimeZoneOffset, TimeZoneBase} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class CustomTimeZone extends TimeZoneBase implements Parsable {
    /** The time offset of the time zone from Coordinated Universal Time (UTC). This value is in minutes. Time zones that are ahead of UTC have a positive offset; time zones that are behind UTC have a negative offset. */
    private _bias?: number | undefined;
    /** Specifies when the time zone switches from standard time to daylight saving time. */
    private _daylightOffset?: DaylightTimeZoneOffset | undefined;
    /** Specifies when the time zone switches from daylight saving time to standard time. */
    private _standardOffset?: StandardTimeZoneOffset | undefined;
    /**
     * Gets the bias property value. The time offset of the time zone from Coordinated Universal Time (UTC). This value is in minutes. Time zones that are ahead of UTC have a positive offset; time zones that are behind UTC have a negative offset.
     * @returns a integer
     */
    public get bias() {
        return this._bias;
    };
    /**
     * Sets the bias property value. The time offset of the time zone from Coordinated Universal Time (UTC). This value is in minutes. Time zones that are ahead of UTC have a positive offset; time zones that are behind UTC have a negative offset.
     * @param value Value to set for the bias property.
     */
    public set bias(value: number | undefined) {
        this._bias = value;
    };
    /**
     * Instantiates a new CustomTimeZone and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the daylightOffset property value. Specifies when the time zone switches from standard time to daylight saving time.
     * @returns a daylightTimeZoneOffset
     */
    public get daylightOffset() {
        return this._daylightOffset;
    };
    /**
     * Sets the daylightOffset property value. Specifies when the time zone switches from standard time to daylight saving time.
     * @param value Value to set for the daylightOffset property.
     */
    public set daylightOffset(value: DaylightTimeZoneOffset | undefined) {
        this._daylightOffset = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "bias": n => { this.bias = n.getNumberValue(); },
            "daylightOffset": n => { this.daylightOffset = n.getObjectValue<DaylightTimeZoneOffset>(createDaylightTimeZoneOffsetFromDiscriminatorValue); },
            "standardOffset": n => { this.standardOffset = n.getObjectValue<StandardTimeZoneOffset>(createStandardTimeZoneOffsetFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeNumberValue("bias", this.bias);
        writer.writeObjectValue<DaylightTimeZoneOffset>("daylightOffset", this.daylightOffset);
        writer.writeObjectValue<StandardTimeZoneOffset>("standardOffset", this.standardOffset);
    };
    /**
     * Gets the standardOffset property value. Specifies when the time zone switches from daylight saving time to standard time.
     * @returns a standardTimeZoneOffset
     */
    public get standardOffset() {
        return this._standardOffset;
    };
    /**
     * Sets the standardOffset property value. Specifies when the time zone switches from daylight saving time to standard time.
     * @param value Value to set for the standardOffset property.
     */
    public set standardOffset(value: StandardTimeZoneOffset | undefined) {
        this._standardOffset = value;
    };
}
