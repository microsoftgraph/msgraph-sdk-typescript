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

/** Provides operations to manage the drive singleton. */
export class WorkbookChartAxisImpl extends EntityImpl implements Parsable, WorkbookChartAxis {
    /** Represents the formatting of a chart object, which includes line and font formatting. Read-only. */
    public format?: WorkbookChartAxisFormat | undefined;
    /** Returns a gridlines object that represents the major gridlines for the specified axis. Read-only. */
    public majorGridlines?: WorkbookChartGridlines | undefined;
    /** Represents the interval between two major tick marks. Can be set to a numeric value or an empty string.  The returned value is always a number. */
    public majorUnit?: Json | undefined;
    /** Represents the maximum value on the value axis.  Can be set to a numeric value or an empty string (for automatic axis values).  The returned value is always a number. */
    public maximum?: Json | undefined;
    /** Represents the minimum value on the value axis. Can be set to a numeric value or an empty string (for automatic axis values).  The returned value is always a number. */
    public minimum?: Json | undefined;
    /** Returns a Gridlines object that represents the minor gridlines for the specified axis. Read-only. */
    public minorGridlines?: WorkbookChartGridlines | undefined;
    /** Represents the interval between two minor tick marks. 'Can be set to a numeric value or an empty string (for automatic axis values). The returned value is always a number. */
    public minorUnit?: Json | undefined;
    /** Represents the axis title. Read-only. */
    public title?: WorkbookChartAxisTitle | undefined;
    /**
     * Instantiates a new workbookChartAxis and sets the default values.
     * @param workbookChartAxisParameterValue 
     */
    public constructor(workbookChartAxisParameterValue?: WorkbookChartAxis | undefined) {
        super();
        this.format = workbookChartAxisParameterValue?.format ;
        this.majorGridlines = workbookChartAxisParameterValue?.majorGridlines ;
        this.majorUnit = workbookChartAxisParameterValue?.majorUnit ;
        this.maximum = workbookChartAxisParameterValue?.maximum ;
        this.minimum = workbookChartAxisParameterValue?.minimum ;
        this.minorGridlines = workbookChartAxisParameterValue?.minorGridlines ;
        this.minorUnit = workbookChartAxisParameterValue?.minorUnit ;
        this.title = workbookChartAxisParameterValue?.title ;
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
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.format){
        writer.writeObjectValue<WorkbookChartAxisFormatImpl>("format", new WorkbookChartAxisFormatImpl(this.format));
        }
        if(this.majorGridlines){
        writer.writeObjectValue<WorkbookChartGridlinesImpl>("majorGridlines", new WorkbookChartGridlinesImpl(this.majorGridlines));
        }
        if(this.majorUnit){
        writer.writeObjectValue<JsonImpl>("majorUnit", new JsonImpl(this.majorUnit));
        }
        if(this.maximum){
        writer.writeObjectValue<JsonImpl>("maximum", new JsonImpl(this.maximum));
        }
        if(this.minimum){
        writer.writeObjectValue<JsonImpl>("minimum", new JsonImpl(this.minimum));
        }
        if(this.minorGridlines){
        writer.writeObjectValue<WorkbookChartGridlinesImpl>("minorGridlines", new WorkbookChartGridlinesImpl(this.minorGridlines));
        }
        if(this.minorUnit){
        writer.writeObjectValue<JsonImpl>("minorUnit", new JsonImpl(this.minorUnit));
        }
        if(this.title){
        writer.writeObjectValue<WorkbookChartAxisTitleImpl>("title", new WorkbookChartAxisTitleImpl(this.title));
        }
    };
}
