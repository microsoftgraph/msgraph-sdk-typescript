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

/** Casts the previous resource to user. */
export class WorkbookTableImpl extends EntityImpl implements Parsable, WorkbookTable {
    /** Represents a collection of all the columns in the table. Read-only. */
    public columns?: WorkbookTableColumn[] | undefined;
    /** Indicates whether the first column contains special formatting. */
    public highlightFirstColumn?: boolean | undefined;
    /** Indicates whether the last column contains special formatting. */
    public highlightLastColumn?: boolean | undefined;
    /** Legacy Id used in older Excle clients. The value of the identifier remains the same even when the table is renamed. This property should be interpreted as an opaque string value and should not be parsed to any other type. Read-only. */
    public legacyId?: string | undefined;
    /** Name of the table. */
    public name?: string | undefined;
    /** Represents a collection of all the rows in the table. Read-only. */
    public rows?: WorkbookTableRow[] | undefined;
    /** Indicates whether the columns show banded formatting in which odd columns are highlighted differently from even ones to make reading the table easier. */
    public showBandedColumns?: boolean | undefined;
    /** Indicates whether the rows show banded formatting in which odd rows are highlighted differently from even ones to make reading the table easier. */
    public showBandedRows?: boolean | undefined;
    /** Indicates whether the filter buttons are visible at the top of each column header. Setting this is only allowed if the table contains a header row. */
    public showFilterButton?: boolean | undefined;
    /** Indicates whether the header row is visible or not. This value can be set to show or remove the header row. */
    public showHeaders?: boolean | undefined;
    /** Indicates whether the total row is visible or not. This value can be set to show or remove the total row. */
    public showTotals?: boolean | undefined;
    /** Represents the sorting for the table. Read-only. */
    public sort?: WorkbookTableSort | undefined;
    /** Constant value that represents the Table style. Possible values are: TableStyleLight1 thru TableStyleLight21, TableStyleMedium1 thru TableStyleMedium28, TableStyleStyleDark1 thru TableStyleStyleDark11. A custom user-defined style present in the workbook can also be specified. */
    public style?: string | undefined;
    /** The worksheet containing the current table. Read-only. */
    public worksheet?: WorkbookWorksheet | undefined;
    /**
     * Instantiates a new workbookTable and sets the default values.
     * @param workbookTableParameterValue 
     */
    public constructor(workbookTableParameterValue?: WorkbookTable | undefined) {
        super();
        this.columns = workbookTableParameterValue?.columns ;
        this.highlightFirstColumn = workbookTableParameterValue?.highlightFirstColumn ;
        this.highlightLastColumn = workbookTableParameterValue?.highlightLastColumn ;
        this.legacyId = workbookTableParameterValue?.legacyId ;
        this.name = workbookTableParameterValue?.name ;
        this.rows = workbookTableParameterValue?.rows ;
        this.showBandedColumns = workbookTableParameterValue?.showBandedColumns ;
        this.showBandedRows = workbookTableParameterValue?.showBandedRows ;
        this.showFilterButton = workbookTableParameterValue?.showFilterButton ;
        this.showHeaders = workbookTableParameterValue?.showHeaders ;
        this.showTotals = workbookTableParameterValue?.showTotals ;
        this.sort = workbookTableParameterValue?.sort ;
        this.style = workbookTableParameterValue?.style ;
        this.worksheet = workbookTableParameterValue?.worksheet ;
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
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.columns && this.columns.length != 0){        const columnsArrValue: WorkbookTableColumnImpl[] = []; this.columns?.forEach(element => {columnsArrValue.push(new WorkbookTableColumnImpl(element));});
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
        if(this.rows && this.rows.length != 0){        const rowsArrValue: WorkbookTableRowImpl[] = []; this.rows?.forEach(element => {rowsArrValue.push(new WorkbookTableRowImpl(element));});
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
        writer.writeObjectValue<WorkbookTableSortImpl>("sort", new WorkbookTableSortImpl(this.sort));
        }
        if(this.style){
        writer.writeStringValue("style", this.style);
        }
        if(this.worksheet){
        writer.writeObjectValue<WorkbookWorksheetImpl>("worksheet", new WorkbookWorksheetImpl(this.worksheet));
        }
    };
}
