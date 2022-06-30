import {createWorkbookChartAxisFromDiscriminatorValue} from './createWorkbookChartAxisFromDiscriminatorValue';
import {EntityImpl, WorkbookChartAxisImpl} from './index';
import {WorkbookChartAxes} from './workbookChartAxes';
import {WorkbookChartAxis} from './workbookChartAxis';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the collection of application entities. */
export class WorkbookChartAxesImpl extends EntityImpl implements WorkbookChartAxes {
    /** Represents the category axis in a chart. Read-only. */
    private _categoryAxis?: WorkbookChartAxis | undefined;
    /** Represents the series axis of a 3-dimensional chart. Read-only. */
    private _seriesAxis?: WorkbookChartAxis | undefined;
    /** Represents the value axis in an axis. Read-only. */
    private _valueAxis?: WorkbookChartAxis | undefined;
    /**
     * Gets the categoryAxis property value. Represents the category axis in a chart. Read-only.
     * @returns a WorkbookChartAxisInterface
     */
    public get categoryAxis() {
        return this._categoryAxis;
    };
    /**
     * Sets the categoryAxis property value. Represents the category axis in a chart. Read-only.
     * @param value Value to set for the categoryAxis property.
     */
    public set categoryAxis(value: WorkbookChartAxis | undefined) {
        if(value) {
            this._categoryAxis = value instanceof WorkbookChartAxisImpl? value : new WorkbookChartAxisImpl(value);
        }
    };
    /**
     * Instantiates a new workbookChartAxes and sets the default values.
     * @param workbookChartAxesParameterValue 
     */
    public constructor(workbookChartAxesParameterValue?: WorkbookChartAxes | undefined) {
        super(workbookChartAxesParameterValue);
        this._categoryAxis = workbookChartAxesParameterValue?.categoryAxis;
        this._seriesAxis = workbookChartAxesParameterValue?.seriesAxis;
        this._valueAxis = workbookChartAxesParameterValue?.valueAxis;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "categoryAxis": n => { this.categoryAxis = n.getObjectValue<WorkbookChartAxisImpl>(createWorkbookChartAxisFromDiscriminatorValue); },
            "seriesAxis": n => { this.seriesAxis = n.getObjectValue<WorkbookChartAxisImpl>(createWorkbookChartAxisFromDiscriminatorValue); },
            "valueAxis": n => { this.valueAxis = n.getObjectValue<WorkbookChartAxisImpl>(createWorkbookChartAxisFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.categoryAxis){
            writer.writeObjectValue<WorkbookChartAxisImpl>("categoryAxis", (!this.categoryAxis || this.categoryAxis instanceof WorkbookChartAxisImpl? this.categoryAxis : new WorkbookChartAxisImpl(this.categoryAxis)));
        }
        if(this.seriesAxis){
            writer.writeObjectValue<WorkbookChartAxisImpl>("seriesAxis", (!this.seriesAxis || this.seriesAxis instanceof WorkbookChartAxisImpl? this.seriesAxis : new WorkbookChartAxisImpl(this.seriesAxis)));
        }
        if(this.valueAxis){
            writer.writeObjectValue<WorkbookChartAxisImpl>("valueAxis", (!this.valueAxis || this.valueAxis instanceof WorkbookChartAxisImpl? this.valueAxis : new WorkbookChartAxisImpl(this.valueAxis)));
        }
    };
    /**
     * Gets the seriesAxis property value. Represents the series axis of a 3-dimensional chart. Read-only.
     * @returns a WorkbookChartAxisInterface
     */
    public get seriesAxis() {
        return this._seriesAxis;
    };
    /**
     * Sets the seriesAxis property value. Represents the series axis of a 3-dimensional chart. Read-only.
     * @param value Value to set for the seriesAxis property.
     */
    public set seriesAxis(value: WorkbookChartAxis | undefined) {
        if(value) {
            this._seriesAxis = value instanceof WorkbookChartAxisImpl? value : new WorkbookChartAxisImpl(value);
        }
    };
    /**
     * Gets the valueAxis property value. Represents the value axis in an axis. Read-only.
     * @returns a WorkbookChartAxisInterface
     */
    public get valueAxis() {
        return this._valueAxis;
    };
    /**
     * Sets the valueAxis property value. Represents the value axis in an axis. Read-only.
     * @param value Value to set for the valueAxis property.
     */
    public set valueAxis(value: WorkbookChartAxis | undefined) {
        if(value) {
            this._valueAxis = value instanceof WorkbookChartAxisImpl? value : new WorkbookChartAxisImpl(value);
        }
    };
}
