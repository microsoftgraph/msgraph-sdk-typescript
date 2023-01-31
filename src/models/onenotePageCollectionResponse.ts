import {createOnenotePageFromDiscriminatorValue} from './createOnenotePageFromDiscriminatorValue';
import {BaseCollectionPaginationCountResponse, OnenotePage} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class OnenotePageCollectionResponse extends BaseCollectionPaginationCountResponse implements Parsable {
    private _value?: OnenotePage[] | undefined;
    /**
     * Instantiates a new OnenotePageCollectionResponse and sets the default values.
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
            "value": n => { this.value = n.getCollectionOfObjectValues<OnenotePage>(createOnenotePageFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfObjectValues<OnenotePage>("value", this.value);
    };
    /**
     * Gets the value property value. 
     * @returns a onenotePage
     */
    public get value() {
        return this._value;
    };
    /**
     * Sets the value property value. 
     * @param value Value to set for the value property.
     */
    public set value(value: OnenotePage[] | undefined) {
        this._value = value;
    };
}
