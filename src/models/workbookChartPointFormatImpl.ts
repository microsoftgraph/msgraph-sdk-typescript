import {createWorkbookChartFillFromDiscriminatorValue} from './createWorkbookChartFillFromDiscriminatorValue';
import {EntityImpl, WorkbookChartFillImpl} from './index';
import {WorkbookChartFill} from './workbookChartFill';
import {WorkbookChartPointFormat} from './workbookChartPointFormat';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the drive singleton. */
export class WorkbookChartPointFormatImpl extends EntityImpl implements Parsable, WorkbookChartPointFormat {
    /** Represents the fill format of a chart, which includes background formating information. Read-only. */
    public fill?: WorkbookChartFill | undefined;
    /**
     * Instantiates a new workbookChartPointFormat and sets the default values.
     * @param workbookChartPointFormatParameterValue 
     */
    public constructor(workbookChartPointFormatParameterValue?: WorkbookChartPointFormat | undefined) {
        super();
        this.fill = workbookChartPointFormatParameterValue?.fill ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "fill": n => { this.fill = n.getObjectValue<WorkbookChartFillImpl>(createWorkbookChartFillFromDiscriminatorValue); },
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
    };
}
