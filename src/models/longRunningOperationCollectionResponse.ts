import {createLongRunningOperationFromDiscriminatorValue} from './createLongRunningOperationFromDiscriminatorValue';
import {BaseCollectionPaginationCountResponse, LongRunningOperation} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class LongRunningOperationCollectionResponse extends BaseCollectionPaginationCountResponse implements Parsable {
    private _value?: LongRunningOperation[] | undefined;
    /**
     * Instantiates a new LongRunningOperationCollectionResponse and sets the default values.
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
            "value": n => { this.value = n.getCollectionOfObjectValues<LongRunningOperation>(createLongRunningOperationFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfObjectValues<LongRunningOperation>("value", this.value);
    };
    /**
     * Gets the value property value. 
     * @returns a longRunningOperation
     */
    public get value() {
        return this._value;
    };
    /**
     * Sets the value property value. 
     * @param value Value to set for the value property.
     */
    public set value(value: LongRunningOperation[] | undefined) {
        this._value = value;
    };
}
