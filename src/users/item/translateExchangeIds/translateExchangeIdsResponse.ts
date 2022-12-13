import {BaseCollectionPaginationCountResponse, ConvertIdResult} from '../../../models/';
import {createConvertIdResultFromDiscriminatorValue} from '../../../models/createConvertIdResultFromDiscriminatorValue';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to call the translateExchangeIds method.
 */
export class TranslateExchangeIdsResponse extends BaseCollectionPaginationCountResponse implements Parsable {
    /** The value property */
    private _value?: ConvertIdResult[] | undefined;
    /**
     * Instantiates a new translateExchangeIdsResponse and sets the default values.
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
            "value": n => { this.value = n.getCollectionOfObjectValues<ConvertIdResult>(createConvertIdResultFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfObjectValues<ConvertIdResult>("value", this.value);
    };
    /**
     * Gets the value property value. The value property
     * @returns a convertIdResult
     */
    public get value() {
        return this._value;
    };
    /**
     * Sets the value property value. The value property
     * @param value Value to set for the value property.
     */
    public set value(value: ConvertIdResult[] | undefined) {
        this._value = value;
    };
}
