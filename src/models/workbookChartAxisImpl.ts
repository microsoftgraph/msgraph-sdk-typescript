import {createJsonFromDiscriminatorValue} from './createJsonFromDiscriminatorValue';
import {createWorkbookChartAxisFormatFromDiscriminatorValue} from './createWorkbookChartAxisFormatFromDiscriminatorValue';
import {createWorkbookChartAxisTitleFromDiscriminatorValue} from './createWorkbookChartAxisTitleFromDiscriminatorValue';
import {createWorkbookChartGridlinesFromDiscriminatorValue} from './createWorkbookChartGridlinesFromDiscriminatorValue';
import {EntityImpl, JsonImpl, WorkbookChartAxisFormatImpl, WorkbookChartAxisTitleImpl, WorkbookChartGridlinesImpl} from './index';
import {Json} from './json';
import {WorkbookChartAxis} from './workbookChartAxis';
import {WorkbookChartAxisFormat} from './workbookChartAxisFormat';
import {WorkbookChartAxisTitle} from './workbookChartAxisTitle';
import {WorkbookChartGridlines} from './workbookChartGridlines';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the collection of application entities. */
export class WorkbookChartAxisImpl extends EntityImpl implements WorkbookChartAxis {
    /** Represents the formatting of a chart object, which includes line and font formatting. Read-only. */
    private _format?: WorkbookChartAxisFormat | undefined;
    /** Returns a gridlines object that represents the major gridlines for the specified axis. Read-only. */
    private _majorGridlines?: WorkbookChartGridlines | undefined;
    /** Represents the interval between two major tick marks. Can be set to a numeric value or an empty string.  The returned value is always a number. */
    private _majorUnit?: Json | undefined;
    /** Represents the maximum value on the value axis.  Can be set to a numeric value or an empty string (for automatic axis values).  The returned value is always a number. */
    private _maximum?: Json | undefined;
    /** Represents the minimum value on the value axis. Can be set to a numeric value or an empty string (for automatic axis values).  The returned value is always a number. */
    private _minimum?: Json | undefined;
    /** Returns a Gridlines object that represents the minor gridlines for the specified axis. Read-only. */
    private _minorGridlines?: WorkbookChartGridlines | undefined;
    /** Represents the interval between two minor tick marks. 'Can be set to a numeric value or an empty string (for automatic axis values). The returned value is always a number. */
    private _minorUnit?: Json | undefined;
    /** Represents the axis title. Read-only. */
    private _title?: WorkbookChartAxisTitle | undefined;
    /**
     * Instantiates a new workbookChartAxis and sets the default values.
     * @param workbookChartAxisParameterValue 
     */
    public constructor(workbookChartAxisParameterValue?: WorkbookChartAxis | undefined) {
        super(workbookChartAxisParameterValue);
        this._format = workbookChartAxisParameterValue?.format;
        this._majorGridlines = workbookChartAxisParameterValue?.majorGridlines;
        this._majorUnit = workbookChartAxisParameterValue?.majorUnit;
        this._maximum = workbookChartAxisParameterValue?.maximum;
        this._minimum = workbookChartAxisParameterValue?.minimum;
        this._minorGridlines = workbookChartAxisParameterValue?.minorGridlines;
        this._minorUnit = workbookChartAxisParameterValue?.minorUnit;
        this._title = workbookChartAxisParameterValue?.title;
    };
    /**
     * Gets the format property value. Represents the formatting of a chart object, which includes line and font formatting. Read-only.
     * @returns a WorkbookChartAxisFormatInterface
     */
    public get format() {
        return this._format;
    };
    /**
     * Sets the format property value. Represents the formatting of a chart object, which includes line and font formatting. Read-only.
     * @param value Value to set for the format property.
     */
    public set format(value: WorkbookChartAxisFormat | undefined) {
        if(value) {
            this._format = value instanceof WorkbookChartAxisFormatImpl? value as WorkbookChartAxisFormatImpl: new WorkbookChartAxisFormatImpl(value);
        }
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "format": n => { this.format = n.getObjectValue<WorkbookChartAxisFormatImpl>(createWorkbookChartAxisFormatFromDiscriminatorValue); },
            "majorGridlines": n => { this.majorGridlines = n.getObjectValue<WorkbookChartGridlinesImpl>(createWorkbookChartGridlinesFromDiscriminatorValue); },
            "majorUnit": n => { this.majorUnit = n.getObjectValue<JsonImpl>(createJsonFromDiscriminatorValue); },
            "maximum": n => { this.maximum = n.getObjectValue<JsonImpl>(createJsonFromDiscriminatorValue); },
            "minimum": n => { this.minimum = n.getObjectValue<JsonImpl>(createJsonFromDiscriminatorValue); },
            "minorGridlines": n => { this.minorGridlines = n.getObjectValue<WorkbookChartGridlinesImpl>(createWorkbookChartGridlinesFromDiscriminatorValue); },
            "minorUnit": n => { this.minorUnit = n.getObjectValue<JsonImpl>(createJsonFromDiscriminatorValue); },
            "title": n => { this.title = n.getObjectValue<WorkbookChartAxisTitleImpl>(createWorkbookChartAxisTitleFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the majorGridlines property value. Returns a gridlines object that represents the major gridlines for the specified axis. Read-only.
     * @returns a WorkbookChartGridlinesInterface
     */
    public get majorGridlines() {
        return this._majorGridlines;
    };
    /**
     * Sets the majorGridlines property value. Returns a gridlines object that represents the major gridlines for the specified axis. Read-only.
     * @param value Value to set for the majorGridlines property.
     */
    public set majorGridlines(value: WorkbookChartGridlines | undefined) {
        if(value) {
            this._majorGridlines = value instanceof WorkbookChartGridlinesImpl? value as WorkbookChartGridlinesImpl: new WorkbookChartGridlinesImpl(value);
        }
    };
    /**
     * Gets the majorUnit property value. Represents the interval between two major tick marks. Can be set to a numeric value or an empty string.  The returned value is always a number.
     * @returns a JsonInterface
     */
    public get majorUnit() {
        return this._majorUnit;
    };
    /**
     * Sets the majorUnit property value. Represents the interval between two major tick marks. Can be set to a numeric value or an empty string.  The returned value is always a number.
     * @param value Value to set for the majorUnit property.
     */
    public set majorUnit(value: Json | undefined) {
        if(value) {
            this._majorUnit = value instanceof JsonImpl? value as JsonImpl: new JsonImpl(value);
        }
    };
    /**
     * Gets the maximum property value. Represents the maximum value on the value axis.  Can be set to a numeric value or an empty string (for automatic axis values).  The returned value is always a number.
     * @returns a JsonInterface
     */
    public get maximum() {
        return this._maximum;
    };
    /**
     * Sets the maximum property value. Represents the maximum value on the value axis.  Can be set to a numeric value or an empty string (for automatic axis values).  The returned value is always a number.
     * @param value Value to set for the maximum property.
     */
    public set maximum(value: Json | undefined) {
        if(value) {
            this._maximum = value instanceof JsonImpl? value as JsonImpl: new JsonImpl(value);
        }
    };
    /**
     * Gets the minimum property value. Represents the minimum value on the value axis. Can be set to a numeric value or an empty string (for automatic axis values).  The returned value is always a number.
     * @returns a JsonInterface
     */
    public get minimum() {
        return this._minimum;
    };
    /**
     * Sets the minimum property value. Represents the minimum value on the value axis. Can be set to a numeric value or an empty string (for automatic axis values).  The returned value is always a number.
     * @param value Value to set for the minimum property.
     */
    public set minimum(value: Json | undefined) {
        if(value) {
            this._minimum = value instanceof JsonImpl? value as JsonImpl: new JsonImpl(value);
        }
    };
    /**
     * Gets the minorGridlines property value. Returns a Gridlines object that represents the minor gridlines for the specified axis. Read-only.
     * @returns a WorkbookChartGridlinesInterface
     */
    public get minorGridlines() {
        return this._minorGridlines;
    };
    /**
     * Sets the minorGridlines property value. Returns a Gridlines object that represents the minor gridlines for the specified axis. Read-only.
     * @param value Value to set for the minorGridlines property.
     */
    public set minorGridlines(value: WorkbookChartGridlines | undefined) {
        if(value) {
            this._minorGridlines = value instanceof WorkbookChartGridlinesImpl? value as WorkbookChartGridlinesImpl: new WorkbookChartGridlinesImpl(value);
        }
    };
    /**
     * Gets the minorUnit property value. Represents the interval between two minor tick marks. 'Can be set to a numeric value or an empty string (for automatic axis values). The returned value is always a number.
     * @returns a JsonInterface
     */
    public get minorUnit() {
        return this._minorUnit;
    };
    /**
     * Sets the minorUnit property value. Represents the interval between two minor tick marks. 'Can be set to a numeric value or an empty string (for automatic axis values). The returned value is always a number.
     * @param value Value to set for the minorUnit property.
     */
    public set minorUnit(value: Json | undefined) {
        if(value) {
            this._minorUnit = value instanceof JsonImpl? value as JsonImpl: new JsonImpl(value);
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.format){
            writer.writeObjectValue<WorkbookChartAxisFormatImpl>("format", (this.format instanceof WorkbookChartAxisFormatImpl? this.format as WorkbookChartAxisFormatImpl: new WorkbookChartAxisFormatImpl(this.format)));
        }
        if(this.majorGridlines){
            writer.writeObjectValue<WorkbookChartGridlinesImpl>("majorGridlines", (this.majorGridlines instanceof WorkbookChartGridlinesImpl? this.majorGridlines as WorkbookChartGridlinesImpl: new WorkbookChartGridlinesImpl(this.majorGridlines)));
        }
        if(this.majorUnit){
            writer.writeObjectValue<JsonImpl>("majorUnit", (this.majorUnit instanceof JsonImpl? this.majorUnit as JsonImpl: new JsonImpl(this.majorUnit)));
        }
        if(this.maximum){
            writer.writeObjectValue<JsonImpl>("maximum", (this.maximum instanceof JsonImpl? this.maximum as JsonImpl: new JsonImpl(this.maximum)));
        }
        if(this.minimum){
            writer.writeObjectValue<JsonImpl>("minimum", (this.minimum instanceof JsonImpl? this.minimum as JsonImpl: new JsonImpl(this.minimum)));
        }
        if(this.minorGridlines){
            writer.writeObjectValue<WorkbookChartGridlinesImpl>("minorGridlines", (this.minorGridlines instanceof WorkbookChartGridlinesImpl? this.minorGridlines as WorkbookChartGridlinesImpl: new WorkbookChartGridlinesImpl(this.minorGridlines)));
        }
        if(this.minorUnit){
            writer.writeObjectValue<JsonImpl>("minorUnit", (this.minorUnit instanceof JsonImpl? this.minorUnit as JsonImpl: new JsonImpl(this.minorUnit)));
        }
        if(this.title){
            writer.writeObjectValue<WorkbookChartAxisTitleImpl>("title", (this.title instanceof WorkbookChartAxisTitleImpl? this.title as WorkbookChartAxisTitleImpl: new WorkbookChartAxisTitleImpl(this.title)));
        }
    };
    /**
     * Gets the title property value. Represents the axis title. Read-only.
     * @returns a WorkbookChartAxisTitleInterface
     */
    public get title() {
        return this._title;
    };
    /**
     * Sets the title property value. Represents the axis title. Read-only.
     * @param value Value to set for the title property.
     */
    public set title(value: WorkbookChartAxisTitle | undefined) {
        if(value) {
            this._title = value instanceof WorkbookChartAxisTitleImpl? value as WorkbookChartAxisTitleImpl: new WorkbookChartAxisTitleImpl(value);
        }
    };
}
