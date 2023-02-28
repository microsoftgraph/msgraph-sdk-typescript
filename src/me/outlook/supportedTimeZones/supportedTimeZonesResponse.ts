import {BaseCollectionPaginationCountResponse, TimeZoneInformation} from '../../../models/';
import {createTimeZoneInformationFromDiscriminatorValue} from '../../../models/createTimeZoneInformationFromDiscriminatorValue';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class SupportedTimeZonesResponse extends BaseCollectionPaginationCountResponse implements Parsable {
    /** The value property */
    private _value?: TimeZoneInformation[] | undefined;
    /**
     * Instantiates a new supportedTimeZonesResponse and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "value": n => { this.value = n.getCollectionOfObjectValues<TimeZoneInformation>(createTimeZoneInformationFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfObjectValues<TimeZoneInformation>("value", this.value);
    };
    /**
     * Gets the value property value. The value property
     * @returns a timeZoneInformation
     */
    public get value() {
        return this._value;
    };
    /**
     * Sets the value property value. The value property
     * @param value Value to set for the value property.
     */
    public set value(value: TimeZoneInformation[] | undefined) {
        this._value = value;
    };
}
