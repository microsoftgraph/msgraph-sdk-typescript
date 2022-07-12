import {StandardTimeZoneOffset} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class DaylightTimeZoneOffset extends StandardTimeZoneOffset implements Parsable {
    /** The time offset from Coordinated Universal Time (UTC) for daylight saving time. This value is in minutes. */
    private _daylightBias?: number | undefined;
    /**
     * Instantiates a new DaylightTimeZoneOffset and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the daylightBias property value. The time offset from Coordinated Universal Time (UTC) for daylight saving time. This value is in minutes.
     * @returns a integer
     */
    public get daylightBias() {
        return this._daylightBias;
    };
    /**
     * Sets the daylightBias property value. The time offset from Coordinated Universal Time (UTC) for daylight saving time. This value is in minutes.
     * @param value Value to set for the daylightBias property.
     */
    public set daylightBias(value: number | undefined) {
        this._daylightBias = value;
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
        writer.writeNumberValue("daylightBias", this.daylightBias);
    };
}
