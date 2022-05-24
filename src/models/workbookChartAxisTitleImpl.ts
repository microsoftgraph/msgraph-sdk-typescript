import {createWorkbookChartAxisTitleFormatFromDiscriminatorValue} from './createWorkbookChartAxisTitleFormatFromDiscriminatorValue';
import {EntityImpl, WorkbookChartAxisTitleFormatImpl} from './index';
import {WorkbookChartAxisTitle} from './workbookChartAxisTitle';
import {WorkbookChartAxisTitleFormat} from './workbookChartAxisTitleFormat';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Casts the previous resource to user. */
export class WorkbookChartAxisTitleImpl extends EntityImpl implements Parsable, WorkbookChartAxisTitle {
    /** Represents the formatting of chart axis title. Read-only. */
    public format?: WorkbookChartAxisTitleFormat | undefined;
    /** Represents the axis title. */
    public text?: string | undefined;
    /** A boolean that specifies the visibility of an axis title. */
    public visible?: boolean | undefined;
    /**
     * Instantiates a new workbookChartAxisTitle and sets the default values.
     * @param workbookChartAxisTitleParameterValue 
     */
    public constructor(workbookChartAxisTitleParameterValue?: WorkbookChartAxisTitle | undefined) {
        super();
        this.format = workbookChartAxisTitleParameterValue?.format ;
        this.text = workbookChartAxisTitleParameterValue?.text ;
        this.visible = workbookChartAxisTitleParameterValue?.visible ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "format": n => { this.format = n.getObjectValue<WorkbookChartAxisTitleFormatImpl>(createWorkbookChartAxisTitleFormatFromDiscriminatorValue); },
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
        writer.writeObjectValue<WorkbookChartAxisTitleFormatImpl>("format", new WorkbookChartAxisTitleFormatImpl(this.format));
        }
        if(this.text){
        writer.writeStringValue("text", this.text);
        }
        if(this.visible){
        writer.writeBooleanValue("visible", this.visible);
        }
    };
}
