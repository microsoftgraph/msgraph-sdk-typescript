import {createWorkbookChartFromDiscriminatorValue} from './createWorkbookChartFromDiscriminatorValue';
import {createWorkbookNamedItemFromDiscriminatorValue} from './createWorkbookNamedItemFromDiscriminatorValue';
import {createWorkbookPivotTableFromDiscriminatorValue} from './createWorkbookPivotTableFromDiscriminatorValue';
import {createWorkbookTableFromDiscriminatorValue} from './createWorkbookTableFromDiscriminatorValue';
import {createWorkbookWorksheetProtectionFromDiscriminatorValue} from './createWorkbookWorksheetProtectionFromDiscriminatorValue';
import {EntityImpl, WorkbookChartImpl, WorkbookNamedItemImpl, WorkbookPivotTableImpl, WorkbookTableImpl, WorkbookWorksheetProtectionImpl} from './index';
import {WorkbookChart} from './workbookChart';
import {WorkbookNamedItem} from './workbookNamedItem';
import {WorkbookPivotTable} from './workbookPivotTable';
import {WorkbookTable} from './workbookTable';
import {WorkbookWorksheet} from './workbookWorksheet';
import {WorkbookWorksheetProtection} from './workbookWorksheetProtection';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the collection of application entities. */
export class WorkbookWorksheetImpl extends EntityImpl implements WorkbookWorksheet {
    /** Returns collection of charts that are part of the worksheet. Read-only. */
    private _charts?: WorkbookChart[] | undefined;
    /** The display name of the worksheet. */
    private _name?: string | undefined;
    /** Returns collection of names that are associated with the worksheet. Read-only. */
    private _names?: WorkbookNamedItem[] | undefined;
    /** Collection of PivotTables that are part of the worksheet. */
    private _pivotTables?: WorkbookPivotTable[] | undefined;
    /** The zero-based position of the worksheet within the workbook. */
    private _position?: number | undefined;
    /** Returns sheet protection object for a worksheet. Read-only. */
    private _protection?: WorkbookWorksheetProtection | undefined;
    /** Collection of tables that are part of the worksheet. Read-only. */
    private _tables?: WorkbookTable[] | undefined;
    /** The Visibility of the worksheet. The possible values are: Visible, Hidden, VeryHidden. */
    private _visibility?: string | undefined;
    /**
     * Gets the charts property value. Returns collection of charts that are part of the worksheet. Read-only.
     * @returns a WorkbookChartInterface
     */
    public get charts() {
        return this._charts;
    };
    /**
     * Sets the charts property value. Returns collection of charts that are part of the worksheet. Read-only.
     * @param value Value to set for the charts property.
     */
    public set charts(value: WorkbookChart[] | undefined) {
        if(value) {
            const chartsArrValue: WorkbookChartImpl[] = [];
            this.charts?.forEach(element => {
                chartsArrValue.push((element instanceof WorkbookChartImpl? element:new WorkbookChartImpl(element)));
            });
            this._charts = chartsArrValue;
        }
    };
    /**
     * Instantiates a new workbookWorksheet and sets the default values.
     * @param workbookWorksheetParameterValue 
     */
    public constructor(workbookWorksheetParameterValue?: WorkbookWorksheet | undefined) {
        super(workbookWorksheetParameterValue);
        this._charts = workbookWorksheetParameterValue?.charts;
        this._name = workbookWorksheetParameterValue?.name;
        this._names = workbookWorksheetParameterValue?.names;
        this._pivotTables = workbookWorksheetParameterValue?.pivotTables;
        this._position = workbookWorksheetParameterValue?.position;
        this._protection = workbookWorksheetParameterValue?.protection;
        this._tables = workbookWorksheetParameterValue?.tables;
        this._visibility = workbookWorksheetParameterValue?.visibility;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "charts": n => { this.charts = n.getCollectionOfObjectValues<WorkbookChartImpl>(createWorkbookChartFromDiscriminatorValue); },
            "name": n => { this.name = n.getStringValue(); },
            "names": n => { this.names = n.getCollectionOfObjectValues<WorkbookNamedItemImpl>(createWorkbookNamedItemFromDiscriminatorValue); },
            "pivotTables": n => { this.pivotTables = n.getCollectionOfObjectValues<WorkbookPivotTableImpl>(createWorkbookPivotTableFromDiscriminatorValue); },
            "position": n => { this.position = n.getNumberValue(); },
            "protection": n => { this.protection = n.getObjectValue<WorkbookWorksheetProtectionImpl>(createWorkbookWorksheetProtectionFromDiscriminatorValue); },
            "tables": n => { this.tables = n.getCollectionOfObjectValues<WorkbookTableImpl>(createWorkbookTableFromDiscriminatorValue); },
            "visibility": n => { this.visibility = n.getStringValue(); },
        };
    };
    /**
     * Gets the name property value. The display name of the worksheet.
     * @returns a string
     */
    public get name() {
        return this._name;
    };
    /**
     * Sets the name property value. The display name of the worksheet.
     * @param value Value to set for the name property.
     */
    public set name(value: string | undefined) {
        if(value) {
            this._name = value;
        }
    };
    /**
     * Gets the names property value. Returns collection of names that are associated with the worksheet. Read-only.
     * @returns a WorkbookNamedItemInterface
     */
    public get names() {
        return this._names;
    };
    /**
     * Sets the names property value. Returns collection of names that are associated with the worksheet. Read-only.
     * @param value Value to set for the names property.
     */
    public set names(value: WorkbookNamedItem[] | undefined) {
        if(value) {
            const namesArrValue: WorkbookNamedItemImpl[] = [];
            this.names?.forEach(element => {
                namesArrValue.push((element instanceof WorkbookNamedItemImpl? element:new WorkbookNamedItemImpl(element)));
            });
            this._names = namesArrValue;
        }
    };
    /**
     * Gets the pivotTables property value. Collection of PivotTables that are part of the worksheet.
     * @returns a WorkbookPivotTableInterface
     */
    public get pivotTables() {
        return this._pivotTables;
    };
    /**
     * Sets the pivotTables property value. Collection of PivotTables that are part of the worksheet.
     * @param value Value to set for the pivotTables property.
     */
    public set pivotTables(value: WorkbookPivotTable[] | undefined) {
        if(value) {
            const pivotTablesArrValue: WorkbookPivotTableImpl[] = [];
            this.pivotTables?.forEach(element => {
                pivotTablesArrValue.push((element instanceof WorkbookPivotTableImpl? element:new WorkbookPivotTableImpl(element)));
            });
            this._pivotTables = pivotTablesArrValue;
        }
    };
    /**
     * Gets the position property value. The zero-based position of the worksheet within the workbook.
     * @returns a integer
     */
    public get position() {
        return this._position;
    };
    /**
     * Sets the position property value. The zero-based position of the worksheet within the workbook.
     * @param value Value to set for the position property.
     */
    public set position(value: number | undefined) {
        if(value) {
            this._position = value;
        }
    };
    /**
     * Gets the protection property value. Returns sheet protection object for a worksheet. Read-only.
     * @returns a WorkbookWorksheetProtectionInterface
     */
    public get protection() {
        return this._protection;
    };
    /**
     * Sets the protection property value. Returns sheet protection object for a worksheet. Read-only.
     * @param value Value to set for the protection property.
     */
    public set protection(value: WorkbookWorksheetProtection | undefined) {
        if(value) {
            this._protection = value instanceof WorkbookWorksheetProtectionImpl? value : new WorkbookWorksheetProtectionImpl(value);
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.charts && this.charts.length != 0){        const chartsArrValue: WorkbookChartImpl[] = [];
        this.charts?.forEach(element => {
            chartsArrValue.push((element instanceof WorkbookChartImpl? element:new WorkbookChartImpl(element)));
        });
            writer.writeCollectionOfObjectValues<WorkbookChartImpl>("charts", chartsArrValue);
        }
        if(this.name){
            writer.writeStringValue("name", this.name);
        }
        if(this.names && this.names.length != 0){        const namesArrValue: WorkbookNamedItemImpl[] = [];
        this.names?.forEach(element => {
            namesArrValue.push((element instanceof WorkbookNamedItemImpl? element:new WorkbookNamedItemImpl(element)));
        });
            writer.writeCollectionOfObjectValues<WorkbookNamedItemImpl>("names", namesArrValue);
        }
        if(this.pivotTables && this.pivotTables.length != 0){        const pivotTablesArrValue: WorkbookPivotTableImpl[] = [];
        this.pivotTables?.forEach(element => {
            pivotTablesArrValue.push((element instanceof WorkbookPivotTableImpl? element:new WorkbookPivotTableImpl(element)));
        });
            writer.writeCollectionOfObjectValues<WorkbookPivotTableImpl>("pivotTables", pivotTablesArrValue);
        }
        if(this.position){
            writer.writeNumberValue("position", this.position);
        }
        if(this.protection){
            writer.writeObjectValue<WorkbookWorksheetProtectionImpl>("protection", (!this.protection || this.protection instanceof WorkbookWorksheetProtectionImpl? this.protection : new WorkbookWorksheetProtectionImpl(this.protection)));
        }
        if(this.tables && this.tables.length != 0){        const tablesArrValue: WorkbookTableImpl[] = [];
        this.tables?.forEach(element => {
            tablesArrValue.push((element instanceof WorkbookTableImpl? element:new WorkbookTableImpl(element)));
        });
            writer.writeCollectionOfObjectValues<WorkbookTableImpl>("tables", tablesArrValue);
        }
        if(this.visibility){
            writer.writeStringValue("visibility", this.visibility);
        }
    };
    /**
     * Gets the tables property value. Collection of tables that are part of the worksheet. Read-only.
     * @returns a WorkbookTableInterface
     */
    public get tables() {
        return this._tables;
    };
    /**
     * Sets the tables property value. Collection of tables that are part of the worksheet. Read-only.
     * @param value Value to set for the tables property.
     */
    public set tables(value: WorkbookTable[] | undefined) {
        if(value) {
            const tablesArrValue: WorkbookTableImpl[] = [];
            this.tables?.forEach(element => {
                tablesArrValue.push((element instanceof WorkbookTableImpl? element:new WorkbookTableImpl(element)));
            });
            this._tables = tablesArrValue;
        }
    };
    /**
     * Gets the visibility property value. The Visibility of the worksheet. The possible values are: Visible, Hidden, VeryHidden.
     * @returns a string
     */
    public get visibility() {
        return this._visibility;
    };
    /**
     * Sets the visibility property value. The Visibility of the worksheet. The possible values are: Visible, Hidden, VeryHidden.
     * @param value Value to set for the visibility property.
     */
    public set visibility(value: string | undefined) {
        if(value) {
            this._visibility = value;
        }
    };
}
