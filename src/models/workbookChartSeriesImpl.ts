import {createWorkbookChartPointFromDiscriminatorValue} from './createWorkbookChartPointFromDiscriminatorValue';
import {createWorkbookChartSeriesFormatFromDiscriminatorValue} from './createWorkbookChartSeriesFormatFromDiscriminatorValue';
import {EntityImpl, WorkbookChartPointImpl, WorkbookChartSeriesFormatImpl} from './index';
import {WorkbookChartPoint} from './workbookChartPoint';
import {WorkbookChartSeries} from './workbookChartSeries';
import {WorkbookChartSeriesFormat} from './workbookChartSeriesFormat';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the drive singleton. */
export class WorkbookChartSeriesImpl extends EntityImpl implements Parsable, WorkbookChartSeries {
    /** Represents the formatting of a chart series, which includes fill and line formatting. Read-only. */
    public format?: WorkbookChartSeriesFormat | undefined;
    /** Represents the name of a series in a chart. */
    public name?: string | undefined;
    /** Represents a collection of all points in the series. Read-only. */
    public points?: WorkbookChartPoint[] | undefined;
    /**
     * Instantiates a new workbookChartSeries and sets the default values.
     * @param workbookChartSeriesParameterValue 
     */
    public constructor(workbookChartSeriesParameterValue?: WorkbookChartSeries | undefined) {
        super();
        this.format = workbookChartSeriesParameterValue?.format ;
        this.name = workbookChartSeriesParameterValue?.name ;
        this.points = workbookChartSeriesParameterValue?.points ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "format": n => { this.format = n.getObjectValue<WorkbookChartSeriesFormatImpl>(createWorkbookChartSeriesFormatFromDiscriminatorValue); },
            "name": n => { this.name = n.getStringValue(); },
            "points": n => { this.points = n.getCollectionOfObjectValues<WorkbookChartPointImpl>(createWorkbookChartPointFromDiscriminatorValue); },
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
        writer.writeObjectValue<WorkbookChartSeriesFormatImpl>("format", new WorkbookChartSeriesFormatImpl(this.format));
        }
        if(this.name){
        writer.writeStringValue("name", this.name);
        }
        if(this.points && this.points.length != 0){        const pointsArrValue: WorkbookChartPointImpl[] = []; this.points?.forEach(element => {pointsArrValue.push(new WorkbookChartPointImpl(element));});
        writer.writeCollectionOfObjectValues<WorkbookChartPointImpl>("points", pointsArrValue);
        }
    };
}
