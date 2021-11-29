import {Entity} from './entity';
import {WorkbookChartFill} from './workbookChartFill';
import {WorkbookChartFont} from './workbookChartFont';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class WorkbookChartDataLabelFormat extends Entity implements Parsable {
    /** Represents the fill format of the current chart data label. Read-only.  */
    private _fill?: WorkbookChartFill | undefined;
    /** Represents the font attributes (font name, font size, color, etc.) for a chart data label. Read-only.  */
    private _font?: WorkbookChartFont | undefined;
    /**
     * Instantiates a new workbookChartDataLabelFormat and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the fill property value. Represents the fill format of the current chart data label. Read-only.
     * @returns a workbookChartFill
     */
    public get fill() {
        return this._fill;
    };
    /**
     * Gets the font property value. Represents the font attributes (font name, font size, color, etc.) for a chart data label. Read-only.
     * @returns a workbookChartFont
     */
    public get font() {
        return this._font;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["fill", (o, n) => { (o as unknown as WorkbookChartDataLabelFormat).fill = n.getObjectValue<WorkbookChartFill>(WorkbookChartFill); }],
            ["font", (o, n) => { (o as unknown as WorkbookChartDataLabelFormat).font = n.getObjectValue<WorkbookChartFont>(WorkbookChartFont); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeObjectValue<WorkbookChartFill>("fill", this.fill);
        writer.writeObjectValue<WorkbookChartFont>("font", this.font);
    };
    /**
     * Sets the fill property value. Represents the fill format of the current chart data label. Read-only.
     * @param value Value to set for the fill property.
     */
    public set fill(value: WorkbookChartFill | undefined) {
        this._fill = value;
    };
    /**
     * Sets the font property value. Represents the font attributes (font name, font size, color, etc.) for a chart data label. Read-only.
     * @param value Value to set for the font property.
     */
    public set font(value: WorkbookChartFont | undefined) {
        this._font = value;
    };
}
