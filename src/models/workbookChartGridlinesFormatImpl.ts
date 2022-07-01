import {createWorkbookChartLineFormatFromDiscriminatorValue} from './createWorkbookChartLineFormatFromDiscriminatorValue';
import {EntityImpl, WorkbookChartLineFormatImpl} from './index';
import {WorkbookChartGridlinesFormat} from './workbookChartGridlinesFormat';
import {WorkbookChartLineFormat} from './workbookChartLineFormat';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the collection of application entities. */
export class WorkbookChartGridlinesFormatImpl extends EntityImpl implements WorkbookChartGridlinesFormat {
    /** Represents chart line formatting. Read-only. */
    private _line?: WorkbookChartLineFormat | undefined;
    /**
     * Instantiates a new workbookChartGridlinesFormat and sets the default values.
     * @param workbookChartGridlinesFormatParameterValue 
     */
    public constructor(workbookChartGridlinesFormatParameterValue?: WorkbookChartGridlinesFormat | undefined) {
        super(workbookChartGridlinesFormatParameterValue);
        this._line = workbookChartGridlinesFormatParameterValue?.line;
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
     * Gets the line property value. Represents chart line formatting. Read-only.
     * @returns a WorkbookChartLineFormatInterface
     */
    public get line() {
        return this._line;
    };
    /**
     * Sets the line property value. Represents chart line formatting. Read-only.
     * @param value Value to set for the line property.
     */
    public set line(value: WorkbookChartLineFormat | undefined) {
        if(value) {
            this._line = value instanceof WorkbookChartLineFormatImpl? value as WorkbookChartLineFormatImpl: new WorkbookChartLineFormatImpl(value);
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.line){
            writer.writeObjectValue<WorkbookChartLineFormatImpl>("line", (this.line instanceof WorkbookChartLineFormatImpl? this.line as WorkbookChartLineFormatImpl: new WorkbookChartLineFormatImpl(this.line)));
        }
    };
}
