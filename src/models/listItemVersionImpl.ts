import {createFieldValueSetFromDiscriminatorValue} from './createFieldValueSetFromDiscriminatorValue';
import {FieldValueSet} from './fieldValueSet';
import {BaseItemVersionImpl, FieldValueSetImpl} from './index';
import {ListItemVersion} from './listItemVersion';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ListItemVersionImpl extends BaseItemVersionImpl implements ListItemVersion {
    /** A collection of the fields and values for this version of the list item. */
    private _fields?: FieldValueSet | undefined;
    /**
     * Instantiates a new ListItemVersion and sets the default values.
     * @param listItemVersionParameterValue 
     */
    public constructor(listItemVersionParameterValue?: ListItemVersion | undefined) {
        super(listItemVersionParameterValue);
        this._fields = listItemVersionParameterValue?.fields;
    };
    /**
     * Gets the fields property value. A collection of the fields and values for this version of the list item.
     * @returns a FieldValueSetInterface
     */
    public get fields() {
        return this._fields;
    };
    /**
     * Sets the fields property value. A collection of the fields and values for this version of the list item.
     * @param value Value to set for the fields property.
     */
    public set fields(value: FieldValueSet | undefined) {
        if(value) {
            this._fields = value instanceof FieldValueSetImpl? value : new FieldValueSetImpl(value);
        }
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "fields": n => { this.fields = n.getObjectValue<FieldValueSetImpl>(createFieldValueSetFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.fields){
            writer.writeObjectValue<FieldValueSetImpl>("fields", (!this.fields || this.fields instanceof FieldValueSetImpl? this.fields : new FieldValueSetImpl(this.fields)));
        }
    };
}
