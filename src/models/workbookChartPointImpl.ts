import {createJsonFromDiscriminatorValue} from './createJsonFromDiscriminatorValue';
import {createWorkbookChartPointFormatFromDiscriminatorValue} from './createWorkbookChartPointFormatFromDiscriminatorValue';
import {EntityImpl, JsonImpl, WorkbookChartPointFormatImpl} from './index';
import {Json} from './json';
import {WorkbookChartPoint} from './workbookChartPoint';
import {WorkbookChartPointFormat} from './workbookChartPointFormat';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the collection of application entities. */
export class WorkbookChartPointImpl extends EntityImpl implements WorkbookChartPoint {
    /** Encapsulates the format properties chart point. Read-only. */
    private _format?: WorkbookChartPointFormat | undefined;
    /** Returns the value of a chart point. Read-only. */
    private _value?: Json | undefined;
    /**
     * Instantiates a new workbookChartPoint and sets the default values.
     * @param workbookChartPointParameterValue 
     */
    public constructor(workbookChartPointParameterValue?: WorkbookChartPoint | undefined) {
        super(workbookChartPointParameterValue);
        this._format = workbookChartPointParameterValue?.format;
        this._value = workbookChartPointParameterValue?.value;
    };
    /**
     * Gets the format property value. Encapsulates the format properties chart point. Read-only.
     * @returns a WorkbookChartPointFormatInterface
     */
    public get format() {
        return this._format;
    };
    /**
     * Sets the format property value. Encapsulates the format properties chart point. Read-only.
     * @param value Value to set for the format property.
     */
    public set format(value: WorkbookChartPointFormat | undefined) {
        if(value) {
            this._format = value instanceof WorkbookChartPointFormatImpl? value as WorkbookChartPointFormatImpl: new WorkbookChartPointFormatImpl(value);
        }
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "format": n => { this.format = n.getObjectValue<WorkbookChartPointFormatImpl>(createWorkbookChartPointFormatFromDiscriminatorValue); },
            "value": n => { this.value = n.getObjectValue<JsonImpl>(createJsonFromDiscriminatorValue); },
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
            writer.writeObjectValue<WorkbookChartPointFormatImpl>("format", (this.format instanceof WorkbookChartPointFormatImpl? this.format as WorkbookChartPointFormatImpl: new WorkbookChartPointFormatImpl(this.format)));
        }
        if(this.value){
            writer.writeObjectValue<JsonImpl>("value", (this.value instanceof JsonImpl? this.value as JsonImpl: new JsonImpl(this.value)));
        }
    };
    /**
     * Gets the value property value. Returns the value of a chart point. Read-only.
     * @returns a JsonInterface
     */
    public get value() {
        return this._value;
    };
    /**
     * Sets the value property value. Returns the value of a chart point. Read-only.
     * @param value Value to set for the value property.
     */
    public set value(value: Json | undefined) {
        if(value) {
            this._value = value instanceof JsonImpl? value as JsonImpl: new JsonImpl(value);
        }
    };
}
