import {createWorkbookApplicationFromDiscriminatorValue} from './createWorkbookApplicationFromDiscriminatorValue';
import {createWorkbookCommentFromDiscriminatorValue} from './createWorkbookCommentFromDiscriminatorValue';
import {createWorkbookFunctionsFromDiscriminatorValue} from './createWorkbookFunctionsFromDiscriminatorValue';
import {createWorkbookNamedItemFromDiscriminatorValue} from './createWorkbookNamedItemFromDiscriminatorValue';
import {createWorkbookOperationFromDiscriminatorValue} from './createWorkbookOperationFromDiscriminatorValue';
import {createWorkbookTableFromDiscriminatorValue} from './createWorkbookTableFromDiscriminatorValue';
import {createWorkbookWorksheetFromDiscriminatorValue} from './createWorkbookWorksheetFromDiscriminatorValue';
import {EntityImpl, WorkbookApplicationImpl, WorkbookCommentImpl, WorkbookFunctionsImpl, WorkbookNamedItemImpl, WorkbookOperationImpl, WorkbookTableImpl, WorkbookWorksheetImpl} from './index';
import {Workbook} from './workbook';
import {WorkbookApplication} from './workbookApplication';
import {WorkbookComment} from './workbookComment';
import {WorkbookFunctions} from './workbookFunctions';
import {WorkbookNamedItem} from './workbookNamedItem';
import {WorkbookOperation} from './workbookOperation';
import {WorkbookTable} from './workbookTable';
import {WorkbookWorksheet} from './workbookWorksheet';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the drive singleton. */
export class WorkbookImpl extends EntityImpl implements Parsable, Workbook {
    /** The application property */
    public application?: WorkbookApplication | undefined;
    /** The comments property */
    public comments?: WorkbookComment[] | undefined;
    /** The functions property */
    public functions?: WorkbookFunctions | undefined;
    /** Represents a collection of workbooks scoped named items (named ranges and constants). Read-only. */
    public names?: WorkbookNamedItem[] | undefined;
    /** The status of Workbook operations. Getting an operation collection is not supported, but you can get the status of a long-running operation if the Location header is returned in the response. Read-only. Nullable. */
    public operations?: WorkbookOperation[] | undefined;
    /** Represents a collection of tables associated with the workbook. Read-only. */
    public tables?: WorkbookTable[] | undefined;
    /** Represents a collection of worksheets associated with the workbook. Read-only. */
    public worksheets?: WorkbookWorksheet[] | undefined;
    /**
     * Instantiates a new workbook and sets the default values.
     * @param workbookParameterValue 
     */
    public constructor(workbookParameterValue?: Workbook | undefined) {
        super();
        this.application = workbookParameterValue?.application ;
        this.comments = workbookParameterValue?.comments ;
        this.functions = workbookParameterValue?.functions ;
        this.names = workbookParameterValue?.names ;
        this.operations = workbookParameterValue?.operations ;
        this.tables = workbookParameterValue?.tables ;
        this.worksheets = workbookParameterValue?.worksheets ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "application": n => { this.application = n.getObjectValue<WorkbookApplicationImpl>(createWorkbookApplicationFromDiscriminatorValue); },
            "comments": n => { this.comments = n.getCollectionOfObjectValues<WorkbookCommentImpl>(createWorkbookCommentFromDiscriminatorValue); },
            "functions": n => { this.functions = n.getObjectValue<WorkbookFunctionsImpl>(createWorkbookFunctionsFromDiscriminatorValue); },
            "names": n => { this.names = n.getCollectionOfObjectValues<WorkbookNamedItemImpl>(createWorkbookNamedItemFromDiscriminatorValue); },
            "operations": n => { this.operations = n.getCollectionOfObjectValues<WorkbookOperationImpl>(createWorkbookOperationFromDiscriminatorValue); },
            "tables": n => { this.tables = n.getCollectionOfObjectValues<WorkbookTableImpl>(createWorkbookTableFromDiscriminatorValue); },
            "worksheets": n => { this.worksheets = n.getCollectionOfObjectValues<WorkbookWorksheetImpl>(createWorkbookWorksheetFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.application){
        writer.writeObjectValue<WorkbookApplicationImpl>("application", new WorkbookApplicationImpl(this.application));
        }
        if(this.comments && this.comments.length != 0){        const commentsArrValue: WorkbookCommentImpl[] = []; this.comments?.forEach(element => {commentsArrValue.push(new WorkbookCommentImpl(element));});
        writer.writeCollectionOfObjectValues<WorkbookCommentImpl>("comments", commentsArrValue);
        }
        if(this.functions){
        writer.writeObjectValue<WorkbookFunctionsImpl>("functions", new WorkbookFunctionsImpl(this.functions));
        }
        if(this.names && this.names.length != 0){        const namesArrValue: WorkbookNamedItemImpl[] = []; this.names?.forEach(element => {namesArrValue.push(new WorkbookNamedItemImpl(element));});
        writer.writeCollectionOfObjectValues<WorkbookNamedItemImpl>("names", namesArrValue);
        }
        if(this.operations && this.operations.length != 0){        const operationsArrValue: WorkbookOperationImpl[] = []; this.operations?.forEach(element => {operationsArrValue.push(new WorkbookOperationImpl(element));});
        writer.writeCollectionOfObjectValues<WorkbookOperationImpl>("operations", operationsArrValue);
        }
        if(this.tables && this.tables.length != 0){        const tablesArrValue: WorkbookTableImpl[] = []; this.tables?.forEach(element => {tablesArrValue.push(new WorkbookTableImpl(element));});
        writer.writeCollectionOfObjectValues<WorkbookTableImpl>("tables", tablesArrValue);
        }
        if(this.worksheets && this.worksheets.length != 0){        const worksheetsArrValue: WorkbookWorksheetImpl[] = []; this.worksheets?.forEach(element => {worksheetsArrValue.push(new WorkbookWorksheetImpl(element));});
        writer.writeCollectionOfObjectValues<WorkbookWorksheetImpl>("worksheets", worksheetsArrValue);
        }
    };
}
