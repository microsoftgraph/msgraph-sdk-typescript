import {AdminMember1, Entity, Json, WorkbookChartPointFormat} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the admin singleton. */
export class WorkbookChartPoint extends Entity implements Parsable {
    /** Encapsulates the format properties chart point. Read-only. */
    private _format?: WorkbookChartPointFormat | AdminMember1 | undefined;
    /** Returns the value of a chart point. Read-only. */
    private _value?: Json | AdminMember1 | undefined;
    /**
     * Instantiates a new workbookChartPoint and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the format property value. Encapsulates the format properties chart point. Read-only.
     * @returns a admin
     */
    public get format() {
        return this._format;
    };
    /**
     * Sets the format property value. Encapsulates the format properties chart point. Read-only.
     * @param value Value to set for the format property.
     */
    public set format(value: WorkbookChartPointFormat | AdminMember1 | undefined) {
        this._format = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "format": n => { this.format = n.getObjectValue<WorkbookChartPointFormat>(createWorkbookChartPointFormatFromDiscriminatorValue); },
            "value": n => { this.value = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeObjectValue<WorkbookChartPointFormat>("format", this.format);
        writer.writeObjectValue<Json>("value", this.value);
    };
    /**
     * Gets the value property value. Returns the value of a chart point. Read-only.
     * @returns a admin
     */
    public get value() {
        return this._value;
    };
    /**
     * Sets the value property value. Returns the value of a chart point. Read-only.
     * @param value Value to set for the value property.
     */
    public set value(value: Json | AdminMember1 | undefined) {
        this._value = value;
    };
}
