import {createWorkbookSortFieldFromDiscriminatorValue} from './createWorkbookSortFieldFromDiscriminatorValue';
import {EntityImpl, WorkbookSortFieldImpl} from './index';
import {WorkbookSortField} from './workbookSortField';
import {WorkbookTableSort} from './workbookTableSort';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the collection of application entities. */
export class WorkbookTableSortImpl extends EntityImpl implements WorkbookTableSort {
    /** Represents the current conditions used to last sort the table. Read-only. */
    public fields?: WorkbookSortField[] | undefined;
    /** Represents whether the casing impacted the last sort of the table. Read-only. */
    public matchCase?: boolean | undefined;
    /** Represents Chinese character ordering method last used to sort the table. Possible values are: PinYin, StrokeCount. Read-only. */
    public method?: string | undefined;
    /**
     * Instantiates a new workbookTableSort and sets the default values.
     * @param workbookTableSortParameterValue 
     */
    public constructor(workbookTableSortParameterValue?: WorkbookTableSort | undefined) {
        super(workbookTableSortParameterValue);
        const fieldsArrValue: WorkbookSortFieldImpl[] = []; workbookTableSortParameterValue?.fields?.forEach(element => {fieldsArrValue.push(element instanceof WorkbookSortFieldImpl? element : new WorkbookSortFieldImpl(element));});
        this.fields = fieldsArrValue;
        this.matchCase = workbookTableSortParameterValue?.matchCase;
        this.method = workbookTableSortParameterValue?.method;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "fields": n => { this.fields = n.getCollectionOfObjectValues<WorkbookSortFieldImpl>(createWorkbookSortFieldFromDiscriminatorValue); },
            "matchCase": n => { this.matchCase = n.getBooleanValue(); },
            "method": n => { this.method = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.fields && this.fields.length != 0){        const fieldsArrValue: WorkbookSortFieldImpl[] = []; this.fields?.forEach(element => {fieldsArrValue.push(element instanceof WorkbookSortFieldImpl? element : new WorkbookSortFieldImpl(element));});
            writer.writeCollectionOfObjectValues<WorkbookSortFieldImpl>("fields", fieldsArrValue);
        }
        if(this.matchCase){
            writer.writeBooleanValue("matchCase", this.matchCase);
        }
        if(this.method){
            writer.writeStringValue("method", this.method);
        }
    };
}
