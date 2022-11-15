import {BaseCollectionPaginationCountResponse} from '../../../models/';
import {DirectRoutingLogRow} from '../../../models/callRecords/';
import {createDirectRoutingLogRowFromDiscriminatorValue} from '../../../models/callRecords/createDirectRoutingLogRowFromDiscriminatorValue';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the getDirectRoutingCalls method. */
export class GetDirectRoutingCallsWithFromDateTimeWithToDateTimeResponse extends BaseCollectionPaginationCountResponse implements Parsable {
    /** The value property */
    private _value?: DirectRoutingLogRow[] | undefined;
    /**
     * Instantiates a new getDirectRoutingCallsWithFromDateTimeWithToDateTimeResponse and sets the default values.
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
            "value": n => { this.value = n.getCollectionOfObjectValues<DirectRoutingLogRow>(createDirectRoutingLogRowFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfObjectValues<DirectRoutingLogRow>("value", this.value);
    };
    /**
     * Gets the value property value. The value property
     * @returns a directRoutingLogRow
     */
    public get value() {
        return this._value;
    };
    /**
     * Sets the value property value. The value property
     * @param value Value to set for the value property.
     */
    public set value(value: DirectRoutingLogRow[] | undefined) {
        this._value = value;
    };
}
