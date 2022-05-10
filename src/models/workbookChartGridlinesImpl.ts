import {createWorkbookChartGridlinesFormatFromDiscriminatorValue} from './createWorkbookChartGridlinesFormatFromDiscriminatorValue';
import {EntityImpl, WorkbookChartGridlinesFormatImpl} from './index';
import {WorkbookChartGridlines} from './workbookChartGridlines';
import {WorkbookChartGridlinesFormat} from './workbookChartGridlinesFormat';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class WorkbookChartGridlinesImpl extends EntityImpl implements Parsable, WorkbookChartGridlines {
    /** Represents the formatting of chart gridlines. Read-only.  */
    format?: WorkbookChartGridlinesFormat | undefined;
    /** Boolean value representing if the axis gridlines are visible or not.  */
    visible?: boolean | undefined;
    /**
     * Instantiates a new workbookChartGridlines and sets the default values.
     * @param workbookChartGridlinesParameterValue 
     */
    public constructor(workbookChartGridlinesParameterValue?: WorkbookChartGridlines | undefined) {
        super();
        this.format = workbookChartGridlinesParameterValue?.format ;
        this.visible = workbookChartGridlinesParameterValue?.visible ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "format": n => { this.format = n.getObjectValue<WorkbookChartGridlinesFormatImpl>(createWorkbookChartGridlinesFormatFromDiscriminatorValue); },
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
        if(this.format)
        writer.writeObjectValue<WorkbookChartGridlinesFormatImpl>("format", new WorkbookChartGridlinesFormatImpl(this.format));
        }
        if(this.visible){
        if(this.visible)
        writer.writeBooleanValue("visible", this.visible);
        }
    };
}
