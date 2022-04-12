import {createWorkbookApplicationFromDiscriminatorValue} from './createWorkbookApplicationFromDiscriminatorValue';
import {createWorkbookCommentFromDiscriminatorValue} from './createWorkbookCommentFromDiscriminatorValue';
import {createWorkbookFunctionsFromDiscriminatorValue} from './createWorkbookFunctionsFromDiscriminatorValue';
import {createWorkbookNamedItemFromDiscriminatorValue} from './createWorkbookNamedItemFromDiscriminatorValue';
import {createWorkbookOperationFromDiscriminatorValue} from './createWorkbookOperationFromDiscriminatorValue';
import {createWorkbookTableFromDiscriminatorValue} from './createWorkbookTableFromDiscriminatorValue';
import {createWorkbookWorksheetFromDiscriminatorValue} from './createWorkbookWorksheetFromDiscriminatorValue';
import {Entity, WorkbookApplication, WorkbookComment, WorkbookFunctions, WorkbookNamedItem, WorkbookOperation, WorkbookTable, WorkbookWorksheet} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Workbook extends Entity implements Parsable {
    /** The application property  */
    private _application?: WorkbookApplication | undefined;
    /** The comments property  */
    private _comments?: WorkbookComment[] | undefined;
    /** The functions property  */
    private _functions?: WorkbookFunctions | undefined;
    /** Represents a collection of workbooks scoped named items (named ranges and constants). Read-only.  */
    private _names?: WorkbookNamedItem[] | undefined;
    /** The status of workbook operations. Getting an operation collection is not supported, but you can get the status of a long-running operation if the Location header is returned in the response. Read-only.  */
    private _operations?: WorkbookOperation[] | undefined;
    /** Represents a collection of tables associated with the workbook. Read-only.  */
    private _tables?: WorkbookTable[] | undefined;
    /** Represents a collection of worksheets associated with the workbook. Read-only.  */
    private _worksheets?: WorkbookWorksheet[] | undefined;
    /**
     * Gets the application property value. The application property
     * @returns a workbookApplication
     */
    public get application() {
        return this._application;
    };
    /**
     * Sets the application property value. The application property
     * @param value Value to set for the application property.
     */
    public set application(value: WorkbookApplication | undefined) {
        this._application = value;
    };
    /**
     * Gets the comments property value. The comments property
     * @returns a workbookComment
     */
    public get comments() {
        return this._comments;
    };
    /**
     * Sets the comments property value. The comments property
     * @param value Value to set for the comments property.
     */
    public set comments(value: WorkbookComment[] | undefined) {
        this._comments = value;
    };
    /**
     * Instantiates a new workbook and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the functions property value. The functions property
     * @returns a workbookFunctions
     */
    public get functions() {
        return this._functions;
    };
    /**
     * Sets the functions property value. The functions property
     * @param value Value to set for the functions property.
     */
    public set functions(value: WorkbookFunctions | undefined) {
        this._functions = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "application": n => { this.application = n.getObjectValue<WorkbookApplication>(createWorkbookApplicationFromDiscriminatorValue); },
            "comments": n => { this.comments = n.getCollectionOfObjectValues<WorkbookComment>(createWorkbookCommentFromDiscriminatorValue); },
            "functions": n => { this.functions = n.getObjectValue<WorkbookFunctions>(createWorkbookFunctionsFromDiscriminatorValue); },
            "names": n => { this.names = n.getCollectionOfObjectValues<WorkbookNamedItem>(createWorkbookNamedItemFromDiscriminatorValue); },
            "operations": n => { this.operations = n.getCollectionOfObjectValues<WorkbookOperation>(createWorkbookOperationFromDiscriminatorValue); },
            "tables": n => { this.tables = n.getCollectionOfObjectValues<WorkbookTable>(createWorkbookTableFromDiscriminatorValue); },
            "worksheets": n => { this.worksheets = n.getCollectionOfObjectValues<WorkbookWorksheet>(createWorkbookWorksheetFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the names property value. Represents a collection of workbooks scoped named items (named ranges and constants). Read-only.
     * @returns a workbookNamedItem
     */
    public get names() {
        return this._names;
    };
    /**
     * Sets the names property value. Represents a collection of workbooks scoped named items (named ranges and constants). Read-only.
     * @param value Value to set for the names property.
     */
    public set names(value: WorkbookNamedItem[] | undefined) {
        this._names = value;
    };
    /**
     * Gets the operations property value. The status of workbook operations. Getting an operation collection is not supported, but you can get the status of a long-running operation if the Location header is returned in the response. Read-only.
     * @returns a workbookOperation
     */
    public get operations() {
        return this._operations;
    };
    /**
     * Sets the operations property value. The status of workbook operations. Getting an operation collection is not supported, but you can get the status of a long-running operation if the Location header is returned in the response. Read-only.
     * @param value Value to set for the operations property.
     */
    public set operations(value: WorkbookOperation[] | undefined) {
        this._operations = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeObjectValue<WorkbookApplication>("application", this.application);
        writer.writeCollectionOfObjectValues<WorkbookComment>("comments", this.comments);
        writer.writeObjectValue<WorkbookFunctions>("functions", this.functions);
        writer.writeCollectionOfObjectValues<WorkbookNamedItem>("names", this.names);
        writer.writeCollectionOfObjectValues<WorkbookOperation>("operations", this.operations);
        writer.writeCollectionOfObjectValues<WorkbookTable>("tables", this.tables);
        writer.writeCollectionOfObjectValues<WorkbookWorksheet>("worksheets", this.worksheets);
    };
    /**
     * Gets the tables property value. Represents a collection of tables associated with the workbook. Read-only.
     * @returns a workbookTable
     */
    public get tables() {
        return this._tables;
    };
    /**
     * Sets the tables property value. Represents a collection of tables associated with the workbook. Read-only.
     * @param value Value to set for the tables property.
     */
    public set tables(value: WorkbookTable[] | undefined) {
        this._tables = value;
    };
    /**
     * Gets the worksheets property value. Represents a collection of worksheets associated with the workbook. Read-only.
     * @returns a workbookWorksheet
     */
    public get worksheets() {
        return this._worksheets;
    };
    /**
     * Sets the worksheets property value. Represents a collection of worksheets associated with the workbook. Read-only.
     * @param value Value to set for the worksheets property.
     */
    public set worksheets(value: WorkbookWorksheet[] | undefined) {
        this._worksheets = value;
    };
}
