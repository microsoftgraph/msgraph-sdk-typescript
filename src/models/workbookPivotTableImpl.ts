import {createWorkbookWorksheetFromDiscriminatorValue} from './createWorkbookWorksheetFromDiscriminatorValue';
import {EntityImpl, WorkbookWorksheetImpl} from './index';
import {WorkbookPivotTable} from './workbookPivotTable';
import {WorkbookWorksheet} from './workbookWorksheet';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Casts the previous resource to user. */
export class WorkbookPivotTableImpl extends EntityImpl implements Parsable, WorkbookPivotTable {
    /** Name of the PivotTable. */
    public name?: string | undefined;
    /** The worksheet containing the current PivotTable. Read-only. */
    public worksheet?: WorkbookWorksheet | undefined;
    /**
     * Instantiates a new workbookPivotTable and sets the default values.
     * @param workbookPivotTableParameterValue 
     */
    public constructor(workbookPivotTableParameterValue?: WorkbookPivotTable | undefined) {
        super();
        this.name = workbookPivotTableParameterValue?.name ;
        this.worksheet = workbookPivotTableParameterValue?.worksheet ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "name": n => { this.name = n.getStringValue(); },
            "worksheet": n => { this.worksheet = n.getObjectValue<WorkbookWorksheetImpl>(createWorkbookWorksheetFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.name){
        writer.writeStringValue("name", this.name);
        }
        if(this.worksheet){
        writer.writeObjectValue<WorkbookWorksheetImpl>("worksheet", new WorkbookWorksheetImpl(this.worksheet));
        }
    };
}
