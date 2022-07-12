import {Entity} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the admin singleton. */
export class WorkbookRangeBorder extends Entity implements Parsable {
    /** HTML color code representing the color of the border line, of the form #RRGGBB (e.g. 'FFA500') or as a named HTML color (e.g. 'orange'). */
    private _color?: string | undefined;
    /** Constant value that indicates the specific side of the border. Possible values are: EdgeTop, EdgeBottom, EdgeLeft, EdgeRight, InsideVertical, InsideHorizontal, DiagonalDown, DiagonalUp. Read-only. */
    private _sideIndex?: string | undefined;
    /** One of the constants of line style specifying the line style for the border. Possible values are: None, Continuous, Dash, DashDot, DashDotDot, Dot, Double, SlantDashDot. */
    private _style?: string | undefined;
    /** Specifies the weight of the border around a range. Possible values are: Hairline, Thin, Medium, Thick. */
    private _weight?: string | undefined;
    /**
     * Gets the color property value. HTML color code representing the color of the border line, of the form #RRGGBB (e.g. 'FFA500') or as a named HTML color (e.g. 'orange').
     * @returns a string
     */
    public get color() {
        return this._color;
    };
    /**
     * Sets the color property value. HTML color code representing the color of the border line, of the form #RRGGBB (e.g. 'FFA500') or as a named HTML color (e.g. 'orange').
     * @param value Value to set for the color property.
     */
    public set color(value: string | undefined) {
        this._color = value;
    };
    /**
     * Instantiates a new workbookRangeBorder and sets the default values.
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
            "color": n => { this.color = n.getStringValue(); },
            "sideIndex": n => { this.sideIndex = n.getStringValue(); },
            "style": n => { this.style = n.getStringValue(); },
            "weight": n => { this.weight = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("color", this.color);
        writer.writeStringValue("sideIndex", this.sideIndex);
        writer.writeStringValue("style", this.style);
        writer.writeStringValue("weight", this.weight);
    };
    /**
     * Gets the sideIndex property value. Constant value that indicates the specific side of the border. Possible values are: EdgeTop, EdgeBottom, EdgeLeft, EdgeRight, InsideVertical, InsideHorizontal, DiagonalDown, DiagonalUp. Read-only.
     * @returns a string
     */
    public get sideIndex() {
        return this._sideIndex;
    };
    /**
     * Sets the sideIndex property value. Constant value that indicates the specific side of the border. Possible values are: EdgeTop, EdgeBottom, EdgeLeft, EdgeRight, InsideVertical, InsideHorizontal, DiagonalDown, DiagonalUp. Read-only.
     * @param value Value to set for the sideIndex property.
     */
    public set sideIndex(value: string | undefined) {
        this._sideIndex = value;
    };
    /**
     * Gets the style property value. One of the constants of line style specifying the line style for the border. Possible values are: None, Continuous, Dash, DashDot, DashDotDot, Dot, Double, SlantDashDot.
     * @returns a string
     */
    public get style() {
        return this._style;
    };
    /**
     * Sets the style property value. One of the constants of line style specifying the line style for the border. Possible values are: None, Continuous, Dash, DashDot, DashDotDot, Dot, Double, SlantDashDot.
     * @param value Value to set for the style property.
     */
    public set style(value: string | undefined) {
        this._style = value;
    };
    /**
     * Gets the weight property value. Specifies the weight of the border around a range. Possible values are: Hairline, Thin, Medium, Thick.
     * @returns a string
     */
    public get weight() {
        return this._weight;
    };
    /**
     * Sets the weight property value. Specifies the weight of the border around a range. Possible values are: Hairline, Thin, Medium, Thick.
     * @param value Value to set for the weight property.
     */
    public set weight(value: string | undefined) {
        this._weight = value;
    };
}
