import {DaylightTimeZoneOffset} from './daylightTimeZoneOffset';
import {StandardTimeZoneOffsetImpl} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class DaylightTimeZoneOffsetImpl extends StandardTimeZoneOffsetImpl implements DaylightTimeZoneOffset {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The time offset from Coordinated Universal Time (UTC) for daylight saving time. This value is in minutes. */
    public daylightBias?: number | undefined;
    /**
     * Instantiates a new DaylightTimeZoneOffset and sets the default values.
     * @param daylightTimeZoneOffsetParameterValue 
     */
    public constructor(daylightTimeZoneOffsetParameterValue?: DaylightTimeZoneOffset | undefined) {
        super(daylightTimeZoneOffsetParameterValue);
        this.additionalData = daylightTimeZoneOffsetParameterValue?.additionalData ? daylightTimeZoneOffsetParameterValue?.additionalData! : {};
        this.daylightBias = daylightTimeZoneOffsetParameterValue?.daylightBias;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "daylightBias": n => { this.daylightBias = n.getNumberValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.daylightBias){
            writer.writeNumberValue("daylightBias", this.daylightBias);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
