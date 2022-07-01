import {createWorkbookChartFillFromDiscriminatorValue} from './createWorkbookChartFillFromDiscriminatorValue';
import {createWorkbookChartLineFormatFromDiscriminatorValue} from './createWorkbookChartLineFormatFromDiscriminatorValue';
import {EntityImpl, WorkbookChartFillImpl, WorkbookChartLineFormatImpl} from './index';
import {WorkbookChartFill} from './workbookChartFill';
import {WorkbookChartLineFormat} from './workbookChartLineFormat';
import {WorkbookChartSeriesFormat} from './workbookChartSeriesFormat';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the collection of application entities. */
export class WorkbookChartSeriesFormatImpl extends EntityImpl implements WorkbookChartSeriesFormat {
    /** Represents the fill format of a chart series, which includes background formating information. Read-only. */
    private _fill?: WorkbookChartFill | undefined;
    /** Represents line formatting. Read-only. */
    private _line?: WorkbookChartLineFormat | undefined;
    /**
     * Instantiates a new workbookChartSeriesFormat and sets the default values.
     * @param workbookChartSeriesFormatParameterValue 
     */
    public constructor(workbookChartSeriesFormatParameterValue?: WorkbookChartSeriesFormat | undefined) {
        super(workbookChartSeriesFormatParameterValue);
        this._fill = workbookChartSeriesFormatParameterValue?.fill;
        this._line = workbookChartSeriesFormatParameterValue?.line;
    };
    /**
     * Gets the fill property value. Represents the fill format of a chart series, which includes background formating information. Read-only.
     * @returns a WorkbookChartFillInterface
     */
    public get fill() {
        return this._fill;
    };
    /**
     * Sets the fill property value. Represents the fill format of a chart series, which includes background formating information. Read-only.
     * @param value Value to set for the fill property.
     */
    public set fill(value: WorkbookChartFill | undefined) {
        if(value) {
            this._fill = value instanceof WorkbookChartFillImpl? value as WorkbookChartFillImpl: new WorkbookChartFillImpl(value);
        }
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "fill": n => { this.fill = n.getObjectValue<WorkbookChartFillImpl>(createWorkbookChartFillFromDiscriminatorValue); },
            "line": n => { this.line = n.getObjectValue<WorkbookChartLineFormatImpl>(createWorkbookChartLineFormatFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the line property value. Represents line formatting. Read-only.
     * @returns a WorkbookChartLineFormatInterface
     */
    public get line() {
        return this._line;
    };
    /**
     * Sets the line property value. Represents line formatting. Read-only.
     * @param value Value to set for the line property.
     */
    public set line(value: WorkbookChartLineFormat | undefined) {
        if(value) {
            this._line = value instanceof WorkbookChartLineFormatImpl? value as WorkbookChartLineFormatImpl: new WorkbookChartLineFormatImpl(value);
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.fill){
            writer.writeObjectValue<WorkbookChartFillImpl>("fill", (this.fill instanceof WorkbookChartFillImpl? this.fill as WorkbookChartFillImpl: new WorkbookChartFillImpl(this.fill)));
        }
        if(this.line){
            writer.writeObjectValue<WorkbookChartLineFormatImpl>("line", (this.line instanceof WorkbookChartLineFormatImpl? this.line as WorkbookChartLineFormatImpl: new WorkbookChartLineFormatImpl(this.line)));
        }
    };
}
