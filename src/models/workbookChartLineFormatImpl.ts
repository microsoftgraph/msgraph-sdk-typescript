import {EntityImpl} from './index';
import {WorkbookChartLineFormat} from './workbookChartLineFormat';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the drive singleton. */
export class WorkbookChartLineFormatImpl extends EntityImpl implements Parsable, WorkbookChartLineFormat {
    /** HTML color code representing the color of lines in the chart. */
    public color?: string | undefined;
    /**
     * Instantiates a new workbookChartLineFormat and sets the default values.
     * @param workbookChartLineFormatParameterValue 
     */
    public constructor(workbookChartLineFormatParameterValue?: WorkbookChartLineFormat | undefined) {
        super();
        this.color = workbookChartLineFormatParameterValue?.color ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "color": n => { this.color = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.color){
        writer.writeStringValue("color", this.color);
        }
    };
}
