import {createJsonFromDiscriminatorValue} from './createJsonFromDiscriminatorValue';
import {createWorkbookFilterFromDiscriminatorValue} from './createWorkbookFilterFromDiscriminatorValue';
import {EntityImpl, JsonImpl, WorkbookFilterImpl} from './index';
import {Json} from './json';
import {WorkbookFilter} from './workbookFilter';
import {WorkbookTableColumn} from './workbookTableColumn';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the drive singleton. */
export class WorkbookTableColumnImpl extends EntityImpl implements Parsable, WorkbookTableColumn {
    /** Retrieve the filter applied to the column. Read-only. */
    public filter?: WorkbookFilter | undefined;
    /** Returns the index number of the column within the columns collection of the table. Zero-indexed. Read-only. */
    public index?: number | undefined;
    /** Returns the name of the table column. */
    public name?: string | undefined;
    /** Represents the raw values of the specified range. The data returned could be of type string, number, or a boolean. Cell that contain an error will return the error string. */
    public values?: Json | undefined;
    /**
     * Instantiates a new workbookTableColumn and sets the default values.
     * @param workbookTableColumnParameterValue 
     */
    public constructor(workbookTableColumnParameterValue?: WorkbookTableColumn | undefined) {
        super();
        this.filter = workbookTableColumnParameterValue?.filter ;
        this.index = workbookTableColumnParameterValue?.index ;
        this.name = workbookTableColumnParameterValue?.name ;
        this.values = workbookTableColumnParameterValue?.values ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "filter": n => { this.filter = n.getObjectValue<WorkbookFilterImpl>(createWorkbookFilterFromDiscriminatorValue); },
            "index": n => { this.index = n.getNumberValue(); },
            "name": n => { this.name = n.getStringValue(); },
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
        if(this.filter){
        writer.writeObjectValue<WorkbookFilterImpl>("filter", new WorkbookFilterImpl(this.filter));
        }
        if(this.index){
        writer.writeNumberValue("index", this.index);
        }
        if(this.name){
        writer.writeStringValue("name", this.name);
        }
        if(this.values){
        writer.writeObjectValue<JsonImpl>("values", new JsonImpl(this.values));
        }
    };
}
