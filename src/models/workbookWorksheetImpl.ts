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

export class WorkbookWorksheetImpl extends EntityImpl implements Parsable, WorkbookWorksheet {
    /** Returns collection of charts that are part of the worksheet. Read-only.  */
    charts?: WorkbookChart[] | undefined;
    /** The display name of the worksheet.  */
    name?: string | undefined;
    /** Returns collection of names that are associated with the worksheet. Read-only.  */
    names?: WorkbookNamedItem[] | undefined;
    /** Collection of PivotTables that are part of the worksheet.  */
    pivotTables?: WorkbookPivotTable[] | undefined;
    /** The zero-based position of the worksheet within the workbook.  */
    position?: number | undefined;
    /** Returns sheet protection object for a worksheet. Read-only.  */
    protection?: WorkbookWorksheetProtection | undefined;
    /** Collection of tables that are part of the worksheet. Read-only.  */
    tables?: WorkbookTable[] | undefined;
    /** The Visibility of the worksheet. The possible values are: Visible, Hidden, VeryHidden.  */
    visibility?: string | undefined;
    /**
     * Instantiates a new workbookWorksheet and sets the default values.
     * @param workbookWorksheetParameterValue 
     */
    public constructor(workbookWorksheetParameterValue?: WorkbookWorksheet | undefined) {
        super();
        this.charts = workbookWorksheetParameterValue?.charts ;
        this.name = workbookWorksheetParameterValue?.name ;
        this.names = workbookWorksheetParameterValue?.names ;
        this.pivotTables = workbookWorksheetParameterValue?.pivotTables ;
        this.position = workbookWorksheetParameterValue?.position ;
        this.protection = workbookWorksheetParameterValue?.protection ;
        this.tables = workbookWorksheetParameterValue?.tables ;
        this.visibility = workbookWorksheetParameterValue?.visibility ;
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
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.charts){
        const chartsArrValue: WorkbookChartImpl[] = []; this.charts?.forEach(element => {chartsArrValue.push(new WorkbookChartImpl(element));});
        writer.writeCollectionOfObjectValues<WorkbookChartImpl>("charts", chartsArrValue);
        }
        if(this.name){
        if(this.name)
        writer.writeStringValue("name", this.name);
        }
        if(this.names){
        const namesArrValue: WorkbookNamedItemImpl[] = []; this.names?.forEach(element => {namesArrValue.push(new WorkbookNamedItemImpl(element));});
        writer.writeCollectionOfObjectValues<WorkbookNamedItemImpl>("names", namesArrValue);
        }
        if(this.pivotTables){
        const pivotTablesArrValue: WorkbookPivotTableImpl[] = []; this.pivotTables?.forEach(element => {pivotTablesArrValue.push(new WorkbookPivotTableImpl(element));});
        writer.writeCollectionOfObjectValues<WorkbookPivotTableImpl>("pivotTables", pivotTablesArrValue);
        }
        if(this.position){
        if(this.position)
        writer.writeNumberValue("position", this.position);
        }
        if(this.protection){
        if(this.protection)
        writer.writeObjectValue<WorkbookWorksheetProtectionImpl>("protection", new WorkbookWorksheetProtectionImpl(this.protection));
        }
        if(this.tables){
        const tablesArrValue: WorkbookTableImpl[] = []; this.tables?.forEach(element => {tablesArrValue.push(new WorkbookTableImpl(element));});
        writer.writeCollectionOfObjectValues<WorkbookTableImpl>("tables", tablesArrValue);
        }
        if(this.visibility){
        if(this.visibility)
        writer.writeStringValue("visibility", this.visibility);
        }
    };
}
