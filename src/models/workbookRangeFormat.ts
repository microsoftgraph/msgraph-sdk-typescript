import {createWorkbookFormatProtectionFromDiscriminatorValue} from './createWorkbookFormatProtectionFromDiscriminatorValue';
import {createWorkbookRangeBorderFromDiscriminatorValue} from './createWorkbookRangeBorderFromDiscriminatorValue';
import {createWorkbookRangeFillFromDiscriminatorValue} from './createWorkbookRangeFillFromDiscriminatorValue';
import {createWorkbookRangeFontFromDiscriminatorValue} from './createWorkbookRangeFontFromDiscriminatorValue';
import {Entity, WorkbookFormatProtection, WorkbookRangeBorder, WorkbookRangeFill, WorkbookRangeFont} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class WorkbookRangeFormat extends Entity implements Parsable {
    /** Collection of border objects that apply to the overall range selected Read-only. */
    private _borders?: WorkbookRangeBorder[] | undefined;
    /** Gets or sets the width of all colums within the range. If the column widths are not uniform, null will be returned. */
    private _columnWidth?: number | undefined;
    /** Returns the fill object defined on the overall range. Read-only. */
    private _fill?: WorkbookRangeFill | undefined;
    /** Returns the font object defined on the overall range selected Read-only. */
    private _font?: WorkbookRangeFont | undefined;
    /** Represents the horizontal alignment for the specified object. Possible values are: General, Left, Center, Right, Fill, Justify, CenterAcrossSelection, Distributed. */
    private _horizontalAlignment?: string | undefined;
    /** Returns the format protection object for a range. Read-only. */
    private _protection?: WorkbookFormatProtection | undefined;
    /** Gets or sets the height of all rows in the range. If the row heights are not uniform null will be returned. */
    private _rowHeight?: number | undefined;
    /** Represents the vertical alignment for the specified object. Possible values are: Top, Center, Bottom, Justify, Distributed. */
    private _verticalAlignment?: string | undefined;
    /** Indicates if Excel wraps the text in the object. A null value indicates that the entire range doesn't have uniform wrap setting */
    private _wrapText?: boolean | undefined;
    /**
     * Gets the borders property value. Collection of border objects that apply to the overall range selected Read-only.
     * @returns a workbookRangeBorder
     */
    public get borders() {
        return this._borders;
    };
    /**
     * Sets the borders property value. Collection of border objects that apply to the overall range selected Read-only.
     * @param value Value to set for the borders property.
     */
    public set borders(value: WorkbookRangeBorder[] | undefined) {
        this._borders = value;
    };
    /**
     * Gets the columnWidth property value. Gets or sets the width of all colums within the range. If the column widths are not uniform, null will be returned.
     * @returns a double
     */
    public get columnWidth() {
        return this._columnWidth;
    };
    /**
     * Sets the columnWidth property value. Gets or sets the width of all colums within the range. If the column widths are not uniform, null will be returned.
     * @param value Value to set for the columnWidth property.
     */
    public set columnWidth(value: number | undefined) {
        this._columnWidth = value;
    };
    /**
     * Instantiates a new workbookRangeFormat and sets the default values.
     */
    public constructor() {
        super();
        this.odataType = "#microsoft.graph.workbookRangeFormat";
    };
    /**
     * Gets the fill property value. Returns the fill object defined on the overall range. Read-only.
     * @returns a workbookRangeFill
     */
    public get fill() {
        return this._fill;
    };
    /**
     * Sets the fill property value. Returns the fill object defined on the overall range. Read-only.
     * @param value Value to set for the fill property.
     */
    public set fill(value: WorkbookRangeFill | undefined) {
        this._fill = value;
    };
    /**
     * Gets the font property value. Returns the font object defined on the overall range selected Read-only.
     * @returns a workbookRangeFont
     */
    public get font() {
        return this._font;
    };
    /**
     * Sets the font property value. Returns the font object defined on the overall range selected Read-only.
     * @param value Value to set for the font property.
     */
    public set font(value: WorkbookRangeFont | undefined) {
        this._font = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "borders": n => { this.borders = n.getCollectionOfObjectValues<WorkbookRangeBorder>(createWorkbookRangeBorderFromDiscriminatorValue); },
            "columnWidth": n => { this.columnWidth = n.getNumberValue(); },
            "fill": n => { this.fill = n.getObjectValue<WorkbookRangeFill>(createWorkbookRangeFillFromDiscriminatorValue); },
            "font": n => { this.font = n.getObjectValue<WorkbookRangeFont>(createWorkbookRangeFontFromDiscriminatorValue); },
            "horizontalAlignment": n => { this.horizontalAlignment = n.getStringValue(); },
            "protection": n => { this.protection = n.getObjectValue<WorkbookFormatProtection>(createWorkbookFormatProtectionFromDiscriminatorValue); },
            "rowHeight": n => { this.rowHeight = n.getNumberValue(); },
            "verticalAlignment": n => { this.verticalAlignment = n.getStringValue(); },
            "wrapText": n => { this.wrapText = n.getBooleanValue(); },
        };
    };
    /**
     * Gets the horizontalAlignment property value. Represents the horizontal alignment for the specified object. Possible values are: General, Left, Center, Right, Fill, Justify, CenterAcrossSelection, Distributed.
     * @returns a string
     */
    public get horizontalAlignment() {
        return this._horizontalAlignment;
    };
    /**
     * Sets the horizontalAlignment property value. Represents the horizontal alignment for the specified object. Possible values are: General, Left, Center, Right, Fill, Justify, CenterAcrossSelection, Distributed.
     * @param value Value to set for the horizontalAlignment property.
     */
    public set horizontalAlignment(value: string | undefined) {
        this._horizontalAlignment = value;
    };
    /**
     * Gets the protection property value. Returns the format protection object for a range. Read-only.
     * @returns a workbookFormatProtection
     */
    public get protection() {
        return this._protection;
    };
    /**
     * Sets the protection property value. Returns the format protection object for a range. Read-only.
     * @param value Value to set for the protection property.
     */
    public set protection(value: WorkbookFormatProtection | undefined) {
        this._protection = value;
    };
    /**
     * Gets the rowHeight property value. Gets or sets the height of all rows in the range. If the row heights are not uniform null will be returned.
     * @returns a double
     */
    public get rowHeight() {
        return this._rowHeight;
    };
    /**
     * Sets the rowHeight property value. Gets or sets the height of all rows in the range. If the row heights are not uniform null will be returned.
     * @param value Value to set for the rowHeight property.
     */
    public set rowHeight(value: number | undefined) {
        this._rowHeight = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfObjectValues<WorkbookRangeBorder>("borders", this.borders);
        writer.writeNumberValue("columnWidth", this.columnWidth);
        writer.writeObjectValue<WorkbookRangeFill>("fill", this.fill);
        writer.writeObjectValue<WorkbookRangeFont>("font", this.font);
        writer.writeStringValue("horizontalAlignment", this.horizontalAlignment);
        writer.writeObjectValue<WorkbookFormatProtection>("protection", this.protection);
        writer.writeNumberValue("rowHeight", this.rowHeight);
        writer.writeStringValue("verticalAlignment", this.verticalAlignment);
        writer.writeBooleanValue("wrapText", this.wrapText);
    };
    /**
     * Gets the verticalAlignment property value. Represents the vertical alignment for the specified object. Possible values are: Top, Center, Bottom, Justify, Distributed.
     * @returns a string
     */
    public get verticalAlignment() {
        return this._verticalAlignment;
    };
    /**
     * Sets the verticalAlignment property value. Represents the vertical alignment for the specified object. Possible values are: Top, Center, Bottom, Justify, Distributed.
     * @param value Value to set for the verticalAlignment property.
     */
    public set verticalAlignment(value: string | undefined) {
        this._verticalAlignment = value;
    };
    /**
     * Gets the wrapText property value. Indicates if Excel wraps the text in the object. A null value indicates that the entire range doesn't have uniform wrap setting
     * @returns a boolean
     */
    public get wrapText() {
        return this._wrapText;
    };
    /**
     * Sets the wrapText property value. Indicates if Excel wraps the text in the object. A null value indicates that the entire range doesn't have uniform wrap setting
     * @param value Value to set for the wrapText property.
     */
    public set wrapText(value: boolean | undefined) {
        this._wrapText = value;
    };
}
