import {createWorkbookChartFillFromDiscriminatorValue} from './createWorkbookChartFillFromDiscriminatorValue';
import {createWorkbookChartLineFormatFromDiscriminatorValue} from './createWorkbookChartLineFormatFromDiscriminatorValue';
import {EntityImpl, WorkbookChartFillImpl, WorkbookChartLineFormatImpl} from './index';
import {WorkbookChartFill} from './workbookChartFill';
import {WorkbookChartLineFormat} from './workbookChartLineFormat';
import {WorkbookChartSeriesFormat} from './workbookChartSeriesFormat';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Casts the previous resource to user. */
export class WorkbookChartSeriesFormatImpl extends EntityImpl implements Parsable, WorkbookChartSeriesFormat {
    /** Represents the fill format of a chart series, which includes background formating information. Read-only. */
    public fill?: WorkbookChartFill | undefined;
    /** Represents line formatting. Read-only. */
    public line?: WorkbookChartLineFormat | undefined;
    /**
     * Instantiates a new workbookChartSeriesFormat and sets the default values.
     * @param workbookChartSeriesFormatParameterValue 
     */
    public constructor(workbookChartSeriesFormatParameterValue?: WorkbookChartSeriesFormat | undefined) {
        super();
        this.fill = workbookChartSeriesFormatParameterValue?.fill ;
        this.line = workbookChartSeriesFormatParameterValue?.line ;
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
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.fill){
        writer.writeObjectValue<WorkbookChartFillImpl>("fill", new WorkbookChartFillImpl(this.fill));
        }
        if(this.line){
        writer.writeObjectValue<WorkbookChartLineFormatImpl>("line", new WorkbookChartLineFormatImpl(this.line));
        }
    };
}
