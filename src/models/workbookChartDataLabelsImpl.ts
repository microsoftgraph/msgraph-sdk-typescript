import {createWorkbookChartDataLabelFormatFromDiscriminatorValue} from './createWorkbookChartDataLabelFormatFromDiscriminatorValue';
import {EntityImpl, WorkbookChartDataLabelFormatImpl} from './index';
import {WorkbookChartDataLabelFormat} from './workbookChartDataLabelFormat';
import {WorkbookChartDataLabels} from './workbookChartDataLabels';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the drive singleton. */
export class WorkbookChartDataLabelsImpl extends EntityImpl implements Parsable, WorkbookChartDataLabels {
    /** Represents the format of chart data labels, which includes fill and font formatting. Read-only. */
    public format?: WorkbookChartDataLabelFormat | undefined;
    /** DataLabelPosition value that represents the position of the data label. The possible values are: None, Center, InsideEnd, InsideBase, OutsideEnd, Left, Right, Top, Bottom, BestFit, Callout. */
    public position?: string | undefined;
    /** String representing the separator used for the data labels on a chart. */
    public separator?: string | undefined;
    /** Boolean value representing if the data label bubble size is visible or not. */
    public showBubbleSize?: boolean | undefined;
    /** Boolean value representing if the data label category name is visible or not. */
    public showCategoryName?: boolean | undefined;
    /** Boolean value representing if the data label legend key is visible or not. */
    public showLegendKey?: boolean | undefined;
    /** Boolean value representing if the data label percentage is visible or not. */
    public showPercentage?: boolean | undefined;
    /** Boolean value representing if the data label series name is visible or not. */
    public showSeriesName?: boolean | undefined;
    /** Boolean value representing if the data label value is visible or not. */
    public showValue?: boolean | undefined;
    /**
     * Instantiates a new workbookChartDataLabels and sets the default values.
     * @param workbookChartDataLabelsParameterValue 
     */
    public constructor(workbookChartDataLabelsParameterValue?: WorkbookChartDataLabels | undefined) {
        super();
        this.format = workbookChartDataLabelsParameterValue?.format ;
        this.position = workbookChartDataLabelsParameterValue?.position ;
        this.separator = workbookChartDataLabelsParameterValue?.separator ;
        this.showBubbleSize = workbookChartDataLabelsParameterValue?.showBubbleSize ;
        this.showCategoryName = workbookChartDataLabelsParameterValue?.showCategoryName ;
        this.showLegendKey = workbookChartDataLabelsParameterValue?.showLegendKey ;
        this.showPercentage = workbookChartDataLabelsParameterValue?.showPercentage ;
        this.showSeriesName = workbookChartDataLabelsParameterValue?.showSeriesName ;
        this.showValue = workbookChartDataLabelsParameterValue?.showValue ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "format": n => { this.format = n.getObjectValue<WorkbookChartDataLabelFormatImpl>(createWorkbookChartDataLabelFormatFromDiscriminatorValue); },
            "position": n => { this.position = n.getStringValue(); },
            "separator": n => { this.separator = n.getStringValue(); },
            "showBubbleSize": n => { this.showBubbleSize = n.getBooleanValue(); },
            "showCategoryName": n => { this.showCategoryName = n.getBooleanValue(); },
            "showLegendKey": n => { this.showLegendKey = n.getBooleanValue(); },
            "showPercentage": n => { this.showPercentage = n.getBooleanValue(); },
            "showSeriesName": n => { this.showSeriesName = n.getBooleanValue(); },
            "showValue": n => { this.showValue = n.getBooleanValue(); },
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
        writer.writeObjectValue<WorkbookChartDataLabelFormatImpl>("format", new WorkbookChartDataLabelFormatImpl(this.format));
        }
        if(this.position){
        writer.writeStringValue("position", this.position);
        }
        if(this.separator){
        writer.writeStringValue("separator", this.separator);
        }
        if(this.showBubbleSize){
        writer.writeBooleanValue("showBubbleSize", this.showBubbleSize);
        }
        if(this.showCategoryName){
        writer.writeBooleanValue("showCategoryName", this.showCategoryName);
        }
        if(this.showLegendKey){
        writer.writeBooleanValue("showLegendKey", this.showLegendKey);
        }
        if(this.showPercentage){
        writer.writeBooleanValue("showPercentage", this.showPercentage);
        }
        if(this.showSeriesName){
        writer.writeBooleanValue("showSeriesName", this.showSeriesName);
        }
        if(this.showValue){
        writer.writeBooleanValue("showValue", this.showValue);
        }
    };
}
