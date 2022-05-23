import {createWorkbookChartTitleFormatFromDiscriminatorValue} from './createWorkbookChartTitleFormatFromDiscriminatorValue';
import {EntityImpl, WorkbookChartTitleFormatImpl} from './index';
import {WorkbookChartTitle} from './workbookChartTitle';
import {WorkbookChartTitleFormat} from './workbookChartTitleFormat';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the drive singleton. */
export class WorkbookChartTitleImpl extends EntityImpl implements Parsable, WorkbookChartTitle {
    /** Represents the formatting of a chart title, which includes fill and font formatting. Read-only. */
    public format?: WorkbookChartTitleFormat | undefined;
    /** Boolean value representing if the chart title will overlay the chart or not. */
    public overlay?: boolean | undefined;
    /** Represents the title text of a chart. */
    public text?: string | undefined;
    /** A boolean value the represents the visibility of a chart title object. */
    public visible?: boolean | undefined;
    /**
     * Instantiates a new workbookChartTitle and sets the default values.
     * @param workbookChartTitleParameterValue 
     */
    public constructor(workbookChartTitleParameterValue?: WorkbookChartTitle | undefined) {
        super();
        this.format = workbookChartTitleParameterValue?.format ;
        this.overlay = workbookChartTitleParameterValue?.overlay ;
        this.text = workbookChartTitleParameterValue?.text ;
        this.visible = workbookChartTitleParameterValue?.visible ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "format": n => { this.format = n.getObjectValue<WorkbookChartTitleFormatImpl>(createWorkbookChartTitleFormatFromDiscriminatorValue); },
            "overlay": n => { this.overlay = n.getBooleanValue(); },
            "text": n => { this.text = n.getStringValue(); },
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
        writer.writeObjectValue<WorkbookChartTitleFormatImpl>("format", new WorkbookChartTitleFormatImpl(this.format));
        }
        if(this.overlay){
        writer.writeBooleanValue("overlay", this.overlay);
        }
        if(this.text){
        writer.writeStringValue("text", this.text);
        }
        if(this.visible){
        writer.writeBooleanValue("visible", this.visible);
        }
    };
}
