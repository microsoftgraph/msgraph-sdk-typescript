import {BaseCollectionPaginationCountResponse, ItemActivityStat} from '../../../../../models/';
import {createItemActivityStatFromDiscriminatorValue} from '../../../../../models/createItemActivityStatFromDiscriminatorValue';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to call the getActivitiesByInterval method.
 */
export class GetActivitiesByIntervalWithStartDateTimeWithEndDateTimeWithIntervalResponse extends BaseCollectionPaginationCountResponse implements Parsable {
    /** The value property */
    private _value?: ItemActivityStat[] | undefined;
    /**
     * Instantiates a new getActivitiesByIntervalWithStartDateTimeWithEndDateTimeWithIntervalResponse and sets the default values.
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
            "value": n => { this.value = n.getCollectionOfObjectValues<ItemActivityStat>(createItemActivityStatFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfObjectValues<ItemActivityStat>("value", this.value);
    };
    /**
     * Gets the value property value. The value property
     * @returns a itemActivityStat
     */
    public get value() {
        return this._value;
    };
    /**
     * Sets the value property value. The value property
     * @param value Value to set for the value property.
     */
    public set value(value: ItemActivityStat[] | undefined) {
        this._value = value;
    };
}
