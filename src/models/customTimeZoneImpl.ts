import {createDaylightTimeZoneOffsetFromDiscriminatorValue} from './createDaylightTimeZoneOffsetFromDiscriminatorValue';
import {createStandardTimeZoneOffsetFromDiscriminatorValue} from './createStandardTimeZoneOffsetFromDiscriminatorValue';
import {CustomTimeZone} from './customTimeZone';
import {DaylightTimeZoneOffset} from './daylightTimeZoneOffset';
import {DaylightTimeZoneOffsetImpl, StandardTimeZoneOffsetImpl, TimeZoneBaseImpl} from './index';
import {StandardTimeZoneOffset} from './standardTimeZoneOffset';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class CustomTimeZoneImpl extends TimeZoneBaseImpl implements CustomTimeZone {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The time offset of the time zone from Coordinated Universal Time (UTC). This value is in minutes. Time zones that are ahead of UTC have a positive offset; time zones that are behind UTC have a negative offset. */
    public bias?: number | undefined;
    /** Specifies when the time zone switches from standard time to daylight saving time. */
    public daylightOffset?: DaylightTimeZoneOffset | undefined;
    /** Specifies when the time zone switches from daylight saving time to standard time. */
    public standardOffset?: StandardTimeZoneOffset | undefined;
    /**
     * Instantiates a new CustomTimeZone and sets the default values.
     * @param customTimeZoneParameterValue 
     */
    public constructor(customTimeZoneParameterValue?: CustomTimeZone | undefined) {
        super(customTimeZoneParameterValue);
        this.additionalData = customTimeZoneParameterValue?.additionalData ? customTimeZoneParameterValue?.additionalData! : {};
        this.bias = customTimeZoneParameterValue?.bias;
        this.daylightOffset = customTimeZoneParameterValue?.daylightOffset instanceof DaylightTimeZoneOffsetImpl? customTimeZoneParameterValue?.daylightOffset:new DaylightTimeZoneOffsetImpl(customTimeZoneParameterValue?.daylightOffset);
        this.standardOffset = customTimeZoneParameterValue?.standardOffset instanceof StandardTimeZoneOffsetImpl? customTimeZoneParameterValue?.standardOffset:new StandardTimeZoneOffsetImpl(customTimeZoneParameterValue?.standardOffset);
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "bias": n => { this.bias = n.getNumberValue(); },
            "daylightOffset": n => { this.daylightOffset = n.getObjectValue<DaylightTimeZoneOffsetImpl>(createDaylightTimeZoneOffsetFromDiscriminatorValue); },
            "standardOffset": n => { this.standardOffset = n.getObjectValue<StandardTimeZoneOffsetImpl>(createStandardTimeZoneOffsetFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.bias){
            writer.writeNumberValue("bias", this.bias);
        }
        if(this.daylightOffset){
            writer.writeObjectValue<DaylightTimeZoneOffsetImpl>("daylightOffset", new DaylightTimeZoneOffsetImpl(this.daylightOffset));
        }
        if(this.standardOffset){
            writer.writeObjectValue<StandardTimeZoneOffsetImpl>("standardOffset", new StandardTimeZoneOffsetImpl(this.standardOffset));
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
