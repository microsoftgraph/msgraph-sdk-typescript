import {createWorkbookTableColumnFromDiscriminatorValue} from './createWorkbookTableColumnFromDiscriminatorValue';
import {createWorkbookTableRowFromDiscriminatorValue} from './createWorkbookTableRowFromDiscriminatorValue';
import {createWorkbookTableSortFromDiscriminatorValue} from './createWorkbookTableSortFromDiscriminatorValue';
import {createWorkbookWorksheetFromDiscriminatorValue} from './createWorkbookWorksheetFromDiscriminatorValue';
import {EntityImpl, WorkbookTableColumnImpl, WorkbookTableRowImpl, WorkbookTableSortImpl, WorkbookWorksheetImpl} from './index';
import {WorkbookTable} from './workbookTable';
import {WorkbookTableColumn} from './workbookTableColumn';
import {WorkbookTableRow} from './workbookTableRow';
import {WorkbookTableSort} from './workbookTableSort';
import {WorkbookWorksheet} from './workbookWorksheet';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the collection of application entities. */
export class WorkbookTableImpl extends EntityImpl implements WorkbookTable {
    /** Represents a collection of all the columns in the table. Read-only. */
    private _columns?: WorkbookTableColumn[] | undefined;
    /** Indicates whether the first column contains special formatting. */
    private _highlightFirstColumn?: boolean | undefined;
    /** Indicates whether the last column contains special formatting. */
    private _highlightLastColumn?: boolean | undefined;
    /** Legacy Id used in older Excle clients. The value of the identifier remains the same even when the table is renamed. This property should be interpreted as an opaque string value and should not be parsed to any other type. Read-only. */
    private _legacyId?: string | undefined;
    /** Name of the table. */
    private _name?: string | undefined;
    /** Represents a collection of all the rows in the table. Read-only. */
    private _rows?: WorkbookTableRow[] | undefined;
    /** Indicates whether the columns show banded formatting in which odd columns are highlighted differently from even ones to make reading the table easier. */
    private _showBandedColumns?: boolean | undefined;
    /** Indicates whether the rows show banded formatting in which odd rows are highlighted differently from even ones to make reading the table easier. */
    private _showBandedRows?: boolean | undefined;
    /** Indicates whether the filter buttons are visible at the top of each column header. Setting this is only allowed if the table contains a header row. */
    private _showFilterButton?: boolean | undefined;
    /** Indicates whether the header row is visible or not. This value can be set to show or remove the header row. */
    private _showHeaders?: boolean | undefined;
    /** Indicates whether the total row is visible or not. This value can be set to show or remove the total row. */
    private _showTotals?: boolean | undefined;
    /** Represents the sorting for the table. Read-only. */
    private _sort?: WorkbookTableSort | undefined;
    /** Constant value that represents the Table style. Possible values are: TableStyleLight1 thru TableStyleLight21, TableStyleMedium1 thru TableStyleMedium28, TableStyleStyleDark1 thru TableStyleStyleDark11. A custom user-defined style present in the workbook can also be specified. */
    private _style?: string | undefined;
    /** The worksheet containing the current table. Read-only. */
    private _worksheet?: WorkbookWorksheet | undefined;
    /**
     * Gets the columns property value. Represents a collection of all the columns in the table. Read-only.
     * @returns a WorkbookTableColumnInterface
     */
    public get columns() {
        return this._columns;
    };
    /**
     * Sets the columns property value. Represents a collection of all the columns in the table. Read-only.
     * @param value Value to set for the columns property.
     */
    public set columns(value: WorkbookTableColumn[] | undefined) {
        if(value) {
            const columnsArrValue: WorkbookTableColumnImpl[] = [];
            this.columns?.forEach(element => {
                columnsArrValue.push((element instanceof WorkbookTableColumnImpl? element as WorkbookTableColumnImpl:new WorkbookTableColumnImpl(element)));
            });
            this._columns = columnsArrValue;
        }
    };
    /**
     * Instantiates a new workbookTable and sets the default values.
     * @param workbookTableParameterValue 
     */
    public constructor(workbookTableParameterValue?: WorkbookTable | undefined) {
        super(workbookTableParameterValue);
        this._columns = workbookTableParameterValue?.columns;
        this._highlightFirstColumn = workbookTableParameterValue?.highlightFirstColumn;
        this._highlightLastColumn = workbookTableParameterValue?.highlightLastColumn;
        this._legacyId = workbookTableParameterValue?.legacyId;
        this._name = workbookTableParameterValue?.name;
        this._rows = workbookTableParameterValue?.rows;
        this._showBandedColumns = workbookTableParameterValue?.showBandedColumns;
        this._showBandedRows = workbookTableParameterValue?.showBandedRows;
        this._showFilterButton = workbookTableParameterValue?.showFilterButton;
        this._showHeaders = workbookTableParameterValue?.showHeaders;
        this._showTotals = workbookTableParameterValue?.showTotals;
        this._sort = workbookTableParameterValue?.sort;
        this._style = workbookTableParameterValue?.style;
        this._worksheet = workbookTableParameterValue?.worksheet;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "columns": n => { this.columns = n.getCollectionOfObjectValues<WorkbookTableColumnImpl>(createWorkbookTableColumnFromDiscriminatorValue); },
            "highlightFirstColumn": n => { this.highlightFirstColumn = n.getBooleanValue(); },
            "highlightLastColumn": n => { this.highlightLastColumn = n.getBooleanValue(); },
            "legacyId": n => { this.legacyId = n.getStringValue(); },
            "name": n => { this.name = n.getStringValue(); },
            "rows": n => { this.rows = n.getCollectionOfObjectValues<WorkbookTableRowImpl>(createWorkbookTableRowFromDiscriminatorValue); },
            "showBandedColumns": n => { this.showBandedColumns = n.getBooleanValue(); },
            "showBandedRows": n => { this.showBandedRows = n.getBooleanValue(); },
            "showFilterButton": n => { this.showFilterButton = n.getBooleanValue(); },
            "showHeaders": n => { this.showHeaders = n.getBooleanValue(); },
            "showTotals": n => { this.showTotals = n.getBooleanValue(); },
            "sort": n => { this.sort = n.getObjectValue<WorkbookTableSortImpl>(createWorkbookTableSortFromDiscriminatorValue); },
            "style": n => { this.style = n.getStringValue(); },
            "worksheet": n => { this.worksheet = n.getObjectValue<WorkbookWorksheetImpl>(createWorkbookWorksheetFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the highlightFirstColumn property value. Indicates whether the first column contains special formatting.
     * @returns a boolean
     */
    public get highlightFirstColumn() {
        return this._highlightFirstColumn;
    };
    /**
     * Sets the highlightFirstColumn property value. Indicates whether the first column contains special formatting.
     * @param value Value to set for the highlightFirstColumn property.
     */
    public set highlightFirstColumn(value: boolean | undefined) {
        if(value) {
            this._highlightFirstColumn = value;
        }
    };
    /**
     * Gets the highlightLastColumn property value. Indicates whether the last column contains special formatting.
     * @returns a boolean
     */
    public get highlightLastColumn() {
        return this._highlightLastColumn;
    };
    /**
     * Sets the highlightLastColumn property value. Indicates whether the last column contains special formatting.
     * @param value Value to set for the highlightLastColumn property.
     */
    public set highlightLastColumn(value: boolean | undefined) {
        if(value) {
            this._highlightLastColumn = value;
        }
    };
    /**
     * Gets the legacyId property value. Legacy Id used in older Excle clients. The value of the identifier remains the same even when the table is renamed. This property should be interpreted as an opaque string value and should not be parsed to any other type. Read-only.
     * @returns a string
     */
    public get legacyId() {
        return this._legacyId;
    };
    /**
     * Sets the legacyId property value. Legacy Id used in older Excle clients. The value of the identifier remains the same even when the table is renamed. This property should be interpreted as an opaque string value and should not be parsed to any other type. Read-only.
     * @param value Value to set for the legacyId property.
     */
    public set legacyId(value: string | undefined) {
        if(value) {
            this._legacyId = value;
        }
    };
    /**
     * Gets the name property value. Name of the table.
     * @returns a string
     */
    public get name() {
        return this._name;
    };
    /**
     * Sets the name property value. Name of the table.
     * @param value Value to set for the name property.
     */
    public set name(value: string | undefined) {
        if(value) {
            this._name = value;
        }
    };
    /**
     * Gets the rows property value. Represents a collection of all the rows in the table. Read-only.
     * @returns a WorkbookTableRowInterface
     */
    public get rows() {
        return this._rows;
    };
    /**
     * Sets the rows property value. Represents a collection of all the rows in the table. Read-only.
     * @param value Value to set for the rows property.
     */
    public set rows(value: WorkbookTableRow[] | undefined) {
        if(value) {
            const rowsArrValue: WorkbookTableRowImpl[] = [];
            this.rows?.forEach(element => {
                rowsArrValue.push((element instanceof WorkbookTableRowImpl? element as WorkbookTableRowImpl:new WorkbookTableRowImpl(element)));
            });
            this._rows = rowsArrValue;
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.columns && this.columns.length != 0){        const columnsArrValue: WorkbookTableColumnImpl[] = [];
        this.columns?.forEach(element => {
            columnsArrValue.push((element instanceof WorkbookTableColumnImpl? element as WorkbookTableColumnImpl:new WorkbookTableColumnImpl(element)));
        });
            writer.writeCollectionOfObjectValues<WorkbookTableColumnImpl>("columns", columnsArrValue);
        }
        if(this.highlightFirstColumn){
            writer.writeBooleanValue("highlightFirstColumn", this.highlightFirstColumn);
        }
        if(this.highlightLastColumn){
            writer.writeBooleanValue("highlightLastColumn", this.highlightLastColumn);
        }
        if(this.legacyId){
            writer.writeStringValue("legacyId", this.legacyId);
        }
        if(this.name){
            writer.writeStringValue("name", this.name);
        }
        if(this.rows && this.rows.length != 0){        const rowsArrValue: WorkbookTableRowImpl[] = [];
        this.rows?.forEach(element => {
            rowsArrValue.push((element instanceof WorkbookTableRowImpl? element as WorkbookTableRowImpl:new WorkbookTableRowImpl(element)));
        });
            writer.writeCollectionOfObjectValues<WorkbookTableRowImpl>("rows", rowsArrValue);
        }
        if(this.showBandedColumns){
            writer.writeBooleanValue("showBandedColumns", this.showBandedColumns);
        }
        if(this.showBandedRows){
            writer.writeBooleanValue("showBandedRows", this.showBandedRows);
        }
        if(this.showFilterButton){
            writer.writeBooleanValue("showFilterButton", this.showFilterButton);
        }
        if(this.showHeaders){
            writer.writeBooleanValue("showHeaders", this.showHeaders);
        }
        if(this.showTotals){
            writer.writeBooleanValue("showTotals", this.showTotals);
        }
        if(this.sort){
            writer.writeObjectValue<WorkbookTableSortImpl>("sort", (this.sort instanceof WorkbookTableSortImpl? this.sort as WorkbookTableSortImpl: new WorkbookTableSortImpl(this.sort)));
        }
        if(this.style){
            writer.writeStringValue("style", this.style);
        }
        if(this.worksheet){
            writer.writeObjectValue<WorkbookWorksheetImpl>("worksheet", (this.worksheet instanceof WorkbookWorksheetImpl? this.worksheet as WorkbookWorksheetImpl: new WorkbookWorksheetImpl(this.worksheet)));
        }
    };
    /**
     * Gets the showBandedColumns property value. Indicates whether the columns show banded formatting in which odd columns are highlighted differently from even ones to make reading the table easier.
     * @returns a boolean
     */
    public get showBandedColumns() {
        return this._showBandedColumns;
    };
    /**
     * Sets the showBandedColumns property value. Indicates whether the columns show banded formatting in which odd columns are highlighted differently from even ones to make reading the table easier.
     * @param value Value to set for the showBandedColumns property.
     */
    public set showBandedColumns(value: boolean | undefined) {
        if(value) {
            this._showBandedColumns = value;
        }
    };
    /**
     * Gets the showBandedRows property value. Indicates whether the rows show banded formatting in which odd rows are highlighted differently from even ones to make reading the table easier.
     * @returns a boolean
     */
    public get showBandedRows() {
        return this._showBandedRows;
    };
    /**
     * Sets the showBandedRows property value. Indicates whether the rows show banded formatting in which odd rows are highlighted differently from even ones to make reading the table easier.
     * @param value Value to set for the showBandedRows property.
     */
    public set showBandedRows(value: boolean | undefined) {
        if(value) {
            this._showBandedRows = value;
        }
    };
    /**
     * Gets the showFilterButton property value. Indicates whether the filter buttons are visible at the top of each column header. Setting this is only allowed if the table contains a header row.
     * @returns a boolean
     */
    public get showFilterButton() {
        return this._showFilterButton;
    };
    /**
     * Sets the showFilterButton property value. Indicates whether the filter buttons are visible at the top of each column header. Setting this is only allowed if the table contains a header row.
     * @param value Value to set for the showFilterButton property.
     */
    public set showFilterButton(value: boolean | undefined) {
        if(value) {
            this._showFilterButton = value;
        }
    };
    /**
     * Gets the showHeaders property value. Indicates whether the header row is visible or not. This value can be set to show or remove the header row.
     * @returns a boolean
     */
    public get showHeaders() {
        return this._showHeaders;
    };
    /**
     * Sets the showHeaders property value. Indicates whether the header row is visible or not. This value can be set to show or remove the header row.
     * @param value Value to set for the showHeaders property.
     */
    public set showHeaders(value: boolean | undefined) {
        if(value) {
            this._showHeaders = value;
        }
    };
    /**
     * Gets the showTotals property value. Indicates whether the total row is visible or not. This value can be set to show or remove the total row.
     * @returns a boolean
     */
    public get showTotals() {
        return this._showTotals;
    };
    /**
     * Sets the showTotals property value. Indicates whether the total row is visible or not. This value can be set to show or remove the total row.
     * @param value Value to set for the showTotals property.
     */
    public set showTotals(value: boolean | undefined) {
        if(value) {
            this._showTotals = value;
        }
    };
    /**
     * Gets the sort property value. Represents the sorting for the table. Read-only.
     * @returns a WorkbookTableSortInterface
     */
    public get sort() {
        return this._sort;
    };
    /**
     * Sets the sort property value. Represents the sorting for the table. Read-only.
     * @param value Value to set for the sort property.
     */
    public set sort(value: WorkbookTableSort | undefined) {
        if(value) {
            this._sort = value instanceof WorkbookTableSortImpl? value as WorkbookTableSortImpl: new WorkbookTableSortImpl(value);
        }
    };
    /**
     * Gets the style property value. Constant value that represents the Table style. Possible values are: TableStyleLight1 thru TableStyleLight21, TableStyleMedium1 thru TableStyleMedium28, TableStyleStyleDark1 thru TableStyleStyleDark11. A custom user-defined style present in the workbook can also be specified.
     * @returns a string
     */
    public get style() {
        return this._style;
    };
    /**
     * Sets the style property value. Constant value that represents the Table style. Possible values are: TableStyleLight1 thru TableStyleLight21, TableStyleMedium1 thru TableStyleMedium28, TableStyleStyleDark1 thru TableStyleStyleDark11. A custom user-defined style present in the workbook can also be specified.
     * @param value Value to set for the style property.
     */
    public set style(value: string | undefined) {
        if(value) {
            this._style = value;
        }
    };
    /**
     * Gets the worksheet property value. The worksheet containing the current table. Read-only.
     * @returns a WorkbookWorksheetInterface
     */
    public get worksheet() {
        return this._worksheet;
    };
    /**
     * Sets the worksheet property value. The worksheet containing the current table. Read-only.
     * @param value Value to set for the worksheet property.
     */
    public set worksheet(value: WorkbookWorksheet | undefined) {
        if(value) {
            this._worksheet = value instanceof WorkbookWorksheetImpl? value as WorkbookWorksheetImpl: new WorkbookWorksheetImpl(value);
        }
    };
}
