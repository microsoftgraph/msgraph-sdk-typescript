import {createJsonFromDiscriminatorValue} from './createJsonFromDiscriminatorValue';
import {EntityImpl, JsonImpl} from './index';
import {Json} from './json';
import {WorkbookTableRow} from './workbookTableRow';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the collection of application entities. */
export class WorkbookTableRowImpl extends EntityImpl implements WorkbookTableRow {
    /** Returns the index number of the row within the rows collection of the table. Zero-indexed. Read-only. */
    private _index?: number | undefined;
    /** Represents the raw values of the specified range. The data returned could be of type string, number, or a boolean. Cell that contain an error will return the error string. */
    private _values?: Json | undefined;
    /**
     * Instantiates a new workbookTableRow and sets the default values.
     * @param workbookTableRowParameterValue 
     */
    public constructor(workbookTableRowParameterValue?: WorkbookTableRow | undefined) {
        super(workbookTableRowParameterValue);
        this._index = workbookTableRowParameterValue?.index;
        this._values = workbookTableRowParameterValue?.values;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "index": n => { this.index = n.getNumberValue(); },
            "values": n => { this.values = n.getObjectValue<JsonImpl>(createJsonFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the index property value. Returns the index number of the row within the rows collection of the table. Zero-indexed. Read-only.
     * @returns a integer
     */
    public get index() {
        return this._index;
    };
    /**
     * Sets the index property value. Returns the index number of the row within the rows collection of the table. Zero-indexed. Read-only.
     * @param value Value to set for the index property.
     */
    public set index(value: number | undefined) {
        if(value) {
            this._index = value;
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.index){
            writer.writeNumberValue("index", this.index);
        }
        if(this.values){
            writer.writeObjectValue<JsonImpl>("values", (!this.values || this.values instanceof JsonImpl? this.values : new JsonImpl(this.values)));
        }
    };
    /**
     * Gets the values property value. Represents the raw values of the specified range. The data returned could be of type string, number, or a boolean. Cell that contain an error will return the error string.
     * @returns a JsonInterface
     */
    public get values() {
        return this._values;
    };
    /**
     * Sets the values property value. Represents the raw values of the specified range. The data returned could be of type string, number, or a boolean. Cell that contain an error will return the error string.
     * @param value Value to set for the values property.
     */
    public set values(value: Json | undefined) {
        if(value) {
            this._values = value instanceof JsonImpl? value : new JsonImpl(value);
        }
    };
}
