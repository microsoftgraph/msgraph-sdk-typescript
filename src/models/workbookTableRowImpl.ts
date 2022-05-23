import {createJsonFromDiscriminatorValue} from './createJsonFromDiscriminatorValue';
import {EntityImpl, JsonImpl} from './index';
import {Json} from './json';
import {WorkbookTableRow} from './workbookTableRow';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the drive singleton. */
export class WorkbookTableRowImpl extends EntityImpl implements Parsable, WorkbookTableRow {
    /** Returns the index number of the row within the rows collection of the table. Zero-indexed. Read-only. */
    public index?: number | undefined;
    /** Represents the raw values of the specified range. The data returned could be of type string, number, or a boolean. Cell that contain an error will return the error string. */
    public values?: Json | undefined;
    /**
     * Instantiates a new workbookTableRow and sets the default values.
     * @param workbookTableRowParameterValue 
     */
    public constructor(workbookTableRowParameterValue?: WorkbookTableRow | undefined) {
        super();
        this.index = workbookTableRowParameterValue?.index ;
        this.values = workbookTableRowParameterValue?.values ;
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
        writer.writeObjectValue<JsonImpl>("values", new JsonImpl(this.values));
        }
    };
}
