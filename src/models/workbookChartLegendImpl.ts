import {createWorkbookChartLegendFormatFromDiscriminatorValue} from './createWorkbookChartLegendFormatFromDiscriminatorValue';
import {EntityImpl, WorkbookChartLegendFormatImpl} from './index';
import {WorkbookChartLegend} from './workbookChartLegend';
import {WorkbookChartLegendFormat} from './workbookChartLegendFormat';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Casts the previous resource to user. */
export class WorkbookChartLegendImpl extends EntityImpl implements Parsable, WorkbookChartLegend {
    /** Represents the formatting of a chart legend, which includes fill and font formatting. Read-only. */
    public format?: WorkbookChartLegendFormat | undefined;
    /** Boolean value for whether the chart legend should overlap with the main body of the chart. */
    public overlay?: boolean | undefined;
    /** Represents the position of the legend on the chart. The possible values are: Top, Bottom, Left, Right, Corner, Custom. */
    public position?: string | undefined;
    /** A boolean value the represents the visibility of a ChartLegend object. */
    public visible?: boolean | undefined;
    /**
     * Instantiates a new workbookChartLegend and sets the default values.
     * @param workbookChartLegendParameterValue 
     */
    public constructor(workbookChartLegendParameterValue?: WorkbookChartLegend | undefined) {
        super();
        this.format = workbookChartLegendParameterValue?.format ;
        this.overlay = workbookChartLegendParameterValue?.overlay ;
        this.position = workbookChartLegendParameterValue?.position ;
        this.visible = workbookChartLegendParameterValue?.visible ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "format": n => { this.format = n.getObjectValue<WorkbookChartLegendFormatImpl>(createWorkbookChartLegendFormatFromDiscriminatorValue); },
            "overlay": n => { this.overlay = n.getBooleanValue(); },
            "position": n => { this.position = n.getStringValue(); },
            "visible": n => { this.visible = n.getBooleanValue(); },
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
        writer.writeObjectValue<WorkbookChartLegendFormatImpl>("format", new WorkbookChartLegendFormatImpl(this.format));
        }
        if(this.overlay){
        writer.writeBooleanValue("overlay", this.overlay);
        }
        if(this.position){
        writer.writeStringValue("position", this.position);
        }
        if(this.visible){
        writer.writeBooleanValue("visible", this.visible);
        }
    };
}
