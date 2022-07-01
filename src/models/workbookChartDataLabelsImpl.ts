import {createWorkbookChartDataLabelFormatFromDiscriminatorValue} from './createWorkbookChartDataLabelFormatFromDiscriminatorValue';
import {EntityImpl, WorkbookChartDataLabelFormatImpl} from './index';
import {WorkbookChartDataLabelFormat} from './workbookChartDataLabelFormat';
import {WorkbookChartDataLabels} from './workbookChartDataLabels';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the collection of application entities. */
export class WorkbookChartDataLabelsImpl extends EntityImpl implements WorkbookChartDataLabels {
    /** Represents the format of chart data labels, which includes fill and font formatting. Read-only. */
    private _format?: WorkbookChartDataLabelFormat | undefined;
    /** DataLabelPosition value that represents the position of the data label. The possible values are: None, Center, InsideEnd, InsideBase, OutsideEnd, Left, Right, Top, Bottom, BestFit, Callout. */
    private _position?: string | undefined;
    /** String representing the separator used for the data labels on a chart. */
    private _separator?: string | undefined;
    /** Boolean value representing if the data label bubble size is visible or not. */
    private _showBubbleSize?: boolean | undefined;
    /** Boolean value representing if the data label category name is visible or not. */
    private _showCategoryName?: boolean | undefined;
    /** Boolean value representing if the data label legend key is visible or not. */
    private _showLegendKey?: boolean | undefined;
    /** Boolean value representing if the data label percentage is visible or not. */
    private _showPercentage?: boolean | undefined;
    /** Boolean value representing if the data label series name is visible or not. */
    private _showSeriesName?: boolean | undefined;
    /** Boolean value representing if the data label value is visible or not. */
    private _showValue?: boolean | undefined;
    /**
     * Instantiates a new workbookChartDataLabels and sets the default values.
     * @param workbookChartDataLabelsParameterValue 
     */
    public constructor(workbookChartDataLabelsParameterValue?: WorkbookChartDataLabels | undefined) {
        super(workbookChartDataLabelsParameterValue);
        this._format = workbookChartDataLabelsParameterValue?.format;
        this._position = workbookChartDataLabelsParameterValue?.position;
        this._separator = workbookChartDataLabelsParameterValue?.separator;
        this._showBubbleSize = workbookChartDataLabelsParameterValue?.showBubbleSize;
        this._showCategoryName = workbookChartDataLabelsParameterValue?.showCategoryName;
        this._showLegendKey = workbookChartDataLabelsParameterValue?.showLegendKey;
        this._showPercentage = workbookChartDataLabelsParameterValue?.showPercentage;
        this._showSeriesName = workbookChartDataLabelsParameterValue?.showSeriesName;
        this._showValue = workbookChartDataLabelsParameterValue?.showValue;
    };
    /**
     * Gets the format property value. Represents the format of chart data labels, which includes fill and font formatting. Read-only.
     * @returns a WorkbookChartDataLabelFormatInterface
     */
    public get format() {
        return this._format;
    };
    /**
     * Sets the format property value. Represents the format of chart data labels, which includes fill and font formatting. Read-only.
     * @param value Value to set for the format property.
     */
    public set format(value: WorkbookChartDataLabelFormat | undefined) {
        if(value) {
            this._format = value instanceof WorkbookChartDataLabelFormatImpl? value as WorkbookChartDataLabelFormatImpl: new WorkbookChartDataLabelFormatImpl(value);
        }
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
     * Gets the position property value. DataLabelPosition value that represents the position of the data label. The possible values are: None, Center, InsideEnd, InsideBase, OutsideEnd, Left, Right, Top, Bottom, BestFit, Callout.
     * @returns a string
     */
    public get position() {
        return this._position;
    };
    /**
     * Sets the position property value. DataLabelPosition value that represents the position of the data label. The possible values are: None, Center, InsideEnd, InsideBase, OutsideEnd, Left, Right, Top, Bottom, BestFit, Callout.
     * @param value Value to set for the position property.
     */
    public set position(value: string | undefined) {
        if(value) {
            this._position = value;
        }
    };
    /**
     * Gets the separator property value. String representing the separator used for the data labels on a chart.
     * @returns a string
     */
    public get separator() {
        return this._separator;
    };
    /**
     * Sets the separator property value. String representing the separator used for the data labels on a chart.
     * @param value Value to set for the separator property.
     */
    public set separator(value: string | undefined) {
        if(value) {
            this._separator = value;
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
            writer.writeObjectValue<WorkbookChartDataLabelFormatImpl>("format", (this.format instanceof WorkbookChartDataLabelFormatImpl? this.format as WorkbookChartDataLabelFormatImpl: new WorkbookChartDataLabelFormatImpl(this.format)));
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
    /**
     * Gets the showBubbleSize property value. Boolean value representing if the data label bubble size is visible or not.
     * @returns a boolean
     */
    public get showBubbleSize() {
        return this._showBubbleSize;
    };
    /**
     * Sets the showBubbleSize property value. Boolean value representing if the data label bubble size is visible or not.
     * @param value Value to set for the showBubbleSize property.
     */
    public set showBubbleSize(value: boolean | undefined) {
        if(value) {
            this._showBubbleSize = value;
        }
    };
    /**
     * Gets the showCategoryName property value. Boolean value representing if the data label category name is visible or not.
     * @returns a boolean
     */
    public get showCategoryName() {
        return this._showCategoryName;
    };
    /**
     * Sets the showCategoryName property value. Boolean value representing if the data label category name is visible or not.
     * @param value Value to set for the showCategoryName property.
     */
    public set showCategoryName(value: boolean | undefined) {
        if(value) {
            this._showCategoryName = value;
        }
    };
    /**
     * Gets the showLegendKey property value. Boolean value representing if the data label legend key is visible or not.
     * @returns a boolean
     */
    public get showLegendKey() {
        return this._showLegendKey;
    };
    /**
     * Sets the showLegendKey property value. Boolean value representing if the data label legend key is visible or not.
     * @param value Value to set for the showLegendKey property.
     */
    public set showLegendKey(value: boolean | undefined) {
        if(value) {
            this._showLegendKey = value;
        }
    };
    /**
     * Gets the showPercentage property value. Boolean value representing if the data label percentage is visible or not.
     * @returns a boolean
     */
    public get showPercentage() {
        return this._showPercentage;
    };
    /**
     * Sets the showPercentage property value. Boolean value representing if the data label percentage is visible or not.
     * @param value Value to set for the showPercentage property.
     */
    public set showPercentage(value: boolean | undefined) {
        if(value) {
            this._showPercentage = value;
        }
    };
    /**
     * Gets the showSeriesName property value. Boolean value representing if the data label series name is visible or not.
     * @returns a boolean
     */
    public get showSeriesName() {
        return this._showSeriesName;
    };
    /**
     * Sets the showSeriesName property value. Boolean value representing if the data label series name is visible or not.
     * @param value Value to set for the showSeriesName property.
     */
    public set showSeriesName(value: boolean | undefined) {
        if(value) {
            this._showSeriesName = value;
        }
    };
    /**
     * Gets the showValue property value. Boolean value representing if the data label value is visible or not.
     * @returns a boolean
     */
    public get showValue() {
        return this._showValue;
    };
    /**
     * Sets the showValue property value. Boolean value representing if the data label value is visible or not.
     * @param value Value to set for the showValue property.
     */
    public set showValue(value: boolean | undefined) {
        if(value) {
            this._showValue = value;
        }
    };
}
