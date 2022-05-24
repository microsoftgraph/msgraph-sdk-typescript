import {createWorkbookChartAxisFromDiscriminatorValue} from './createWorkbookChartAxisFromDiscriminatorValue';
import {EntityImpl, WorkbookChartAxisImpl} from './index';
import {WorkbookChartAxes} from './workbookChartAxes';
import {WorkbookChartAxis} from './workbookChartAxis';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Casts the previous resource to user. */
export class WorkbookChartAxesImpl extends EntityImpl implements Parsable, WorkbookChartAxes {
    /** Represents the category axis in a chart. Read-only. */
    public categoryAxis?: WorkbookChartAxis | undefined;
    /** Represents the series axis of a 3-dimensional chart. Read-only. */
    public seriesAxis?: WorkbookChartAxis | undefined;
    /** Represents the value axis in an axis. Read-only. */
    public valueAxis?: WorkbookChartAxis | undefined;
    /**
     * Instantiates a new workbookChartAxes and sets the default values.
     * @param workbookChartAxesParameterValue 
     */
    public constructor(workbookChartAxesParameterValue?: WorkbookChartAxes | undefined) {
        super();
        this.categoryAxis = workbookChartAxesParameterValue?.categoryAxis ;
        this.seriesAxis = workbookChartAxesParameterValue?.seriesAxis ;
        this.valueAxis = workbookChartAxesParameterValue?.valueAxis ;
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
        writer.writeObjectValue<WorkbookChartAxisImpl>("categoryAxis", new WorkbookChartAxisImpl(this.categoryAxis));
        }
        if(this.seriesAxis){
        writer.writeObjectValue<WorkbookChartAxisImpl>("seriesAxis", new WorkbookChartAxisImpl(this.seriesAxis));
        }
        if(this.valueAxis){
        writer.writeObjectValue<WorkbookChartAxisImpl>("valueAxis", new WorkbookChartAxisImpl(this.valueAxis));
        }
    };
}
