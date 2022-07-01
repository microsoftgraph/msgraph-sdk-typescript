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

/** Provides operations to manage the collection of application entities. */
export class WorkbookImpl extends EntityImpl implements Workbook {
    /** The application property */
    private _application?: WorkbookApplication | undefined;
    /** The comments property */
    private _comments?: WorkbookComment[] | undefined;
    /** The functions property */
    private _functions?: WorkbookFunctions | undefined;
    /** Represents a collection of workbooks scoped named items (named ranges and constants). Read-only. */
    private _names?: WorkbookNamedItem[] | undefined;
    /** The status of Workbook operations. Getting an operation collection is not supported, but you can get the status of a long-running operation if the Location header is returned in the response. Read-only. Nullable. */
    private _operations?: WorkbookOperation[] | undefined;
    /** Represents a collection of tables associated with the workbook. Read-only. */
    private _tables?: WorkbookTable[] | undefined;
    /** Represents a collection of worksheets associated with the workbook. Read-only. */
    private _worksheets?: WorkbookWorksheet[] | undefined;
    /**
     * Gets the application property value. The application property
     * @returns a WorkbookApplicationInterface
     */
    public get application() {
        return this._application;
    };
    /**
     * Sets the application property value. The application property
     * @param value Value to set for the application property.
     */
    public set application(value: WorkbookApplication | undefined) {
        if(value) {
            this._application = value instanceof WorkbookApplicationImpl? value as WorkbookApplicationImpl: new WorkbookApplicationImpl(value);
        }
    };
    /**
     * Gets the comments property value. The comments property
     * @returns a WorkbookCommentInterface
     */
    public get comments() {
        return this._comments;
    };
    /**
     * Sets the comments property value. The comments property
     * @param value Value to set for the comments property.
     */
    public set comments(value: WorkbookComment[] | undefined) {
        if(value) {
            const commentsArrValue: WorkbookCommentImpl[] = [];
            this.comments?.forEach(element => {
                commentsArrValue.push((element instanceof WorkbookCommentImpl? element as WorkbookCommentImpl:new WorkbookCommentImpl(element)));
            });
            this._comments = commentsArrValue;
        }
    };
    /**
     * Instantiates a new workbook and sets the default values.
     * @param workbookParameterValue 
     */
    public constructor(workbookParameterValue?: Workbook | undefined) {
        super(workbookParameterValue);
        this._application = workbookParameterValue?.application;
        this._comments = workbookParameterValue?.comments;
        this._functions = workbookParameterValue?.functions;
        this._names = workbookParameterValue?.names;
        this._operations = workbookParameterValue?.operations;
        this._tables = workbookParameterValue?.tables;
        this._worksheets = workbookParameterValue?.worksheets;
    };
    /**
     * Gets the functions property value. The functions property
     * @returns a WorkbookFunctionsInterface
     */
    public get functions() {
        return this._functions;
    };
    /**
     * Sets the functions property value. The functions property
     * @param value Value to set for the functions property.
     */
    public set functions(value: WorkbookFunctions | undefined) {
        if(value) {
            this._functions = value instanceof WorkbookFunctionsImpl? value as WorkbookFunctionsImpl: new WorkbookFunctionsImpl(value);
        }
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
     * Gets the names property value. Represents a collection of workbooks scoped named items (named ranges and constants). Read-only.
     * @returns a WorkbookNamedItemInterface
     */
    public get names() {
        return this._names;
    };
    /**
     * Sets the names property value. Represents a collection of workbooks scoped named items (named ranges and constants). Read-only.
     * @param value Value to set for the names property.
     */
    public set names(value: WorkbookNamedItem[] | undefined) {
        if(value) {
            const namesArrValue: WorkbookNamedItemImpl[] = [];
            this.names?.forEach(element => {
                namesArrValue.push((element instanceof WorkbookNamedItemImpl? element as WorkbookNamedItemImpl:new WorkbookNamedItemImpl(element)));
            });
            this._names = namesArrValue;
        }
    };
    /**
     * Gets the operations property value. The status of Workbook operations. Getting an operation collection is not supported, but you can get the status of a long-running operation if the Location header is returned in the response. Read-only. Nullable.
     * @returns a WorkbookOperationInterface
     */
    public get operations() {
        return this._operations;
    };
    /**
     * Sets the operations property value. The status of Workbook operations. Getting an operation collection is not supported, but you can get the status of a long-running operation if the Location header is returned in the response. Read-only. Nullable.
     * @param value Value to set for the operations property.
     */
    public set operations(value: WorkbookOperation[] | undefined) {
        if(value) {
            const operationsArrValue: WorkbookOperationImpl[] = [];
            this.operations?.forEach(element => {
                operationsArrValue.push((element instanceof WorkbookOperationImpl? element as WorkbookOperationImpl:new WorkbookOperationImpl(element)));
            });
            this._operations = operationsArrValue;
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.application){
            writer.writeObjectValue<WorkbookApplicationImpl>("application", (this.application instanceof WorkbookApplicationImpl? this.application as WorkbookApplicationImpl: new WorkbookApplicationImpl(this.application)));
        }
        if(this.comments && this.comments.length != 0){        const commentsArrValue: WorkbookCommentImpl[] = [];
        this.comments?.forEach(element => {
            commentsArrValue.push((element instanceof WorkbookCommentImpl? element as WorkbookCommentImpl:new WorkbookCommentImpl(element)));
        });
            writer.writeCollectionOfObjectValues<WorkbookCommentImpl>("comments", commentsArrValue);
        }
        if(this.functions){
            writer.writeObjectValue<WorkbookFunctionsImpl>("functions", (this.functions instanceof WorkbookFunctionsImpl? this.functions as WorkbookFunctionsImpl: new WorkbookFunctionsImpl(this.functions)));
        }
        if(this.names && this.names.length != 0){        const namesArrValue: WorkbookNamedItemImpl[] = [];
        this.names?.forEach(element => {
            namesArrValue.push((element instanceof WorkbookNamedItemImpl? element as WorkbookNamedItemImpl:new WorkbookNamedItemImpl(element)));
        });
            writer.writeCollectionOfObjectValues<WorkbookNamedItemImpl>("names", namesArrValue);
        }
        if(this.operations && this.operations.length != 0){        const operationsArrValue: WorkbookOperationImpl[] = [];
        this.operations?.forEach(element => {
            operationsArrValue.push((element instanceof WorkbookOperationImpl? element as WorkbookOperationImpl:new WorkbookOperationImpl(element)));
        });
            writer.writeCollectionOfObjectValues<WorkbookOperationImpl>("operations", operationsArrValue);
        }
        if(this.tables && this.tables.length != 0){        const tablesArrValue: WorkbookTableImpl[] = [];
        this.tables?.forEach(element => {
            tablesArrValue.push((element instanceof WorkbookTableImpl? element as WorkbookTableImpl:new WorkbookTableImpl(element)));
        });
            writer.writeCollectionOfObjectValues<WorkbookTableImpl>("tables", tablesArrValue);
        }
        if(this.worksheets && this.worksheets.length != 0){        const worksheetsArrValue: WorkbookWorksheetImpl[] = [];
        this.worksheets?.forEach(element => {
            worksheetsArrValue.push((element instanceof WorkbookWorksheetImpl? element as WorkbookWorksheetImpl:new WorkbookWorksheetImpl(element)));
        });
            writer.writeCollectionOfObjectValues<WorkbookWorksheetImpl>("worksheets", worksheetsArrValue);
        }
    };
    /**
     * Gets the tables property value. Represents a collection of tables associated with the workbook. Read-only.
     * @returns a WorkbookTableInterface
     */
    public get tables() {
        return this._tables;
    };
    /**
     * Sets the tables property value. Represents a collection of tables associated with the workbook. Read-only.
     * @param value Value to set for the tables property.
     */
    public set tables(value: WorkbookTable[] | undefined) {
        if(value) {
            const tablesArrValue: WorkbookTableImpl[] = [];
            this.tables?.forEach(element => {
                tablesArrValue.push((element instanceof WorkbookTableImpl? element as WorkbookTableImpl:new WorkbookTableImpl(element)));
            });
            this._tables = tablesArrValue;
        }
    };
    /**
     * Gets the worksheets property value. Represents a collection of worksheets associated with the workbook. Read-only.
     * @returns a WorkbookWorksheetInterface
     */
    public get worksheets() {
        return this._worksheets;
    };
    /**
     * Sets the worksheets property value. Represents a collection of worksheets associated with the workbook. Read-only.
     * @param value Value to set for the worksheets property.
     */
    public set worksheets(value: WorkbookWorksheet[] | undefined) {
        if(value) {
            const worksheetsArrValue: WorkbookWorksheetImpl[] = [];
            this.worksheets?.forEach(element => {
                worksheetsArrValue.push((element instanceof WorkbookWorksheetImpl? element as WorkbookWorksheetImpl:new WorkbookWorksheetImpl(element)));
            });
            this._worksheets = worksheetsArrValue;
        }
    };
}
