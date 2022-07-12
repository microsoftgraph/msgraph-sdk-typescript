import {AdminMember1, Entity, WorkbookChartAxis} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class WorkbookChartAxes extends Entity implements Parsable {
    /** Represents the category axis in a chart. Read-only. */
    private _categoryAxis?: WorkbookChartAxis | AdminMember1 | undefined;
    /** Represents the series axis of a 3-dimensional chart. Read-only. */
    private _seriesAxis?: WorkbookChartAxis | AdminMember1 | undefined;
    /** Represents the value axis in an axis. Read-only. */
    private _valueAxis?: WorkbookChartAxis | AdminMember1 | undefined;
    /**
     * Gets the categoryAxis property value. Represents the category axis in a chart. Read-only.
     * @returns a admin
     */
    public get categoryAxis() {
        return this._categoryAxis;
    };
    /**
     * Sets the categoryAxis property value. Represents the category axis in a chart. Read-only.
     * @param value Value to set for the categoryAxis property.
     */
    public set categoryAxis(value: WorkbookChartAxis | AdminMember1 | undefined) {
        this._categoryAxis = value;
    };
    /**
     * Instantiates a new workbookChartAxes and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "categoryAxis": n => { this.categoryAxis = n.getObjectValue<WorkbookChartAxis>(createWorkbookChartAxisFromDiscriminatorValue); },
            "seriesAxis": n => { this.seriesAxis = n.getObjectValue<WorkbookChartAxis>(createWorkbookChartAxisFromDiscriminatorValue); },
            "valueAxis": n => { this.valueAxis = n.getObjectValue<WorkbookChartAxis>(createWorkbookChartAxisFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeObjectValue<WorkbookChartAxis>("categoryAxis", this.categoryAxis);
        writer.writeObjectValue<WorkbookChartAxis>("seriesAxis", this.seriesAxis);
        writer.writeObjectValue<WorkbookChartAxis>("valueAxis", this.valueAxis);
    };
    /**
     * Gets the seriesAxis property value. Represents the series axis of a 3-dimensional chart. Read-only.
     * @returns a admin
     */
    public get seriesAxis() {
        return this._seriesAxis;
    };
    /**
     * Sets the seriesAxis property value. Represents the series axis of a 3-dimensional chart. Read-only.
     * @param value Value to set for the seriesAxis property.
     */
    public set seriesAxis(value: WorkbookChartAxis | AdminMember1 | undefined) {
        this._seriesAxis = value;
    };
    /**
     * Gets the valueAxis property value. Represents the value axis in an axis. Read-only.
     * @returns a admin
     */
    public get valueAxis() {
        return this._valueAxis;
    };
    /**
     * Sets the valueAxis property value. Represents the value axis in an axis. Read-only.
     * @param value Value to set for the valueAxis property.
     */
    public set valueAxis(value: WorkbookChartAxis | AdminMember1 | undefined) {
        this._valueAxis = value;
    };
}
