import {createWorkbookChartLineFormatFromDiscriminatorValue} from './createWorkbookChartLineFormatFromDiscriminatorValue';
import {EntityImpl, WorkbookChartLineFormatImpl} from './index';
import {WorkbookChartGridlinesFormat} from './workbookChartGridlinesFormat';
import {WorkbookChartLineFormat} from './workbookChartLineFormat';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Casts the previous resource to user. */
export class WorkbookChartGridlinesFormatImpl extends EntityImpl implements Parsable, WorkbookChartGridlinesFormat {
    /** Represents chart line formatting. Read-only. */
    public line?: WorkbookChartLineFormat | undefined;
    /**
     * Instantiates a new workbookChartGridlinesFormat and sets the default values.
     * @param workbookChartGridlinesFormatParameterValue 
     */
    public constructor(workbookChartGridlinesFormatParameterValue?: WorkbookChartGridlinesFormat | undefined) {
        super();
        this.line = workbookChartGridlinesFormatParameterValue?.line ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
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
        if(this.line){
        writer.writeObjectValue<WorkbookChartLineFormatImpl>("line", new WorkbookChartLineFormatImpl(this.line));
        }
    };
}
