import {createWorkbookChartLineFormatFromDiscriminatorValue} from './createWorkbookChartLineFormatFromDiscriminatorValue';
import {Entity, WorkbookChartLineFormat} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the collection of agreement entities. */
export class WorkbookChartGridlinesFormat extends Entity implements Parsable {
    /** Represents chart line formatting. Read-only. */
    private _line?: WorkbookChartLineFormat | undefined;
    /**
     * Instantiates a new workbookChartGridlinesFormat and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "line": n => { this.line = n.getObjectValue<WorkbookChartLineFormat>(createWorkbookChartLineFormatFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the line property value. Represents chart line formatting. Read-only.
     * @returns a workbookChartLineFormat
     */
    public get line() {
        return this._line;
    };
    /**
     * Sets the line property value. Represents chart line formatting. Read-only.
     * @param value Value to set for the line property.
     */
    public set line(value: WorkbookChartLineFormat | undefined) {
        this._line = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeObjectValue<WorkbookChartLineFormat>("line", this.line);
    };
}
