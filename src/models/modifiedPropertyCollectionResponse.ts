import {createModifiedPropertyFromDiscriminatorValue} from './createModifiedPropertyFromDiscriminatorValue';
import {BaseCollectionPaginationCountResponse, ModifiedProperty} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ModifiedPropertyCollectionResponse extends BaseCollectionPaginationCountResponse implements Parsable {
    /** The value property */
    private _value?: ModifiedProperty[] | undefined;
    /**
     * Instantiates a new ModifiedPropertyCollectionResponse and sets the default values.
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
            "value": n => { this.value = n.getCollectionOfObjectValues<ModifiedProperty>(createModifiedPropertyFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfObjectValues<ModifiedProperty>("value", this.value);
    };
    /**
     * Gets the value property value. The value property
     * @returns a modifiedProperty
     */
    public get value() {
        return this._value;
    };
    /**
     * Sets the value property value. The value property
     * @param value Value to set for the value property.
     */
    public set value(value: ModifiedProperty[] | undefined) {
        this._value = value;
    };
}
