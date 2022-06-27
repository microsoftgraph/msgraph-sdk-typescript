import {createWorkbookFormatProtectionFromDiscriminatorValue} from './createWorkbookFormatProtectionFromDiscriminatorValue';
import {createWorkbookRangeBorderFromDiscriminatorValue} from './createWorkbookRangeBorderFromDiscriminatorValue';
import {createWorkbookRangeFillFromDiscriminatorValue} from './createWorkbookRangeFillFromDiscriminatorValue';
import {createWorkbookRangeFontFromDiscriminatorValue} from './createWorkbookRangeFontFromDiscriminatorValue';
import {EntityImpl, WorkbookFormatProtectionImpl, WorkbookRangeBorderImpl, WorkbookRangeFillImpl, WorkbookRangeFontImpl} from './index';
import {WorkbookFormatProtection} from './workbookFormatProtection';
import {WorkbookRangeBorder} from './workbookRangeBorder';
import {WorkbookRangeFill} from './workbookRangeFill';
import {WorkbookRangeFont} from './workbookRangeFont';
import {WorkbookRangeFormat} from './workbookRangeFormat';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class WorkbookRangeFormatImpl extends EntityImpl implements WorkbookRangeFormat {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Collection of border objects that apply to the overall range selected Read-only. */
    public borders?: WorkbookRangeBorder[] | undefined;
    /** Gets or sets the width of all colums within the range. If the column widths are not uniform, null will be returned. */
    public columnWidth?: number | undefined;
    /** Returns the fill object defined on the overall range. Read-only. */
    public fill?: WorkbookRangeFill | undefined;
    /** Returns the font object defined on the overall range selected Read-only. */
    public font?: WorkbookRangeFont | undefined;
    /** Represents the horizontal alignment for the specified object. Possible values are: General, Left, Center, Right, Fill, Justify, CenterAcrossSelection, Distributed. */
    public horizontalAlignment?: string | undefined;
    /** Returns the format protection object for a range. Read-only. */
    public protection?: WorkbookFormatProtection | undefined;
    /** Gets or sets the height of all rows in the range. If the row heights are not uniform null will be returned. */
    public rowHeight?: number | undefined;
    /** Represents the vertical alignment for the specified object. Possible values are: Top, Center, Bottom, Justify, Distributed. */
    public verticalAlignment?: string | undefined;
    /** Indicates if Excel wraps the text in the object. A null value indicates that the entire range doesn't have uniform wrap setting */
    public wrapText?: boolean | undefined;
    /**
     * Instantiates a new WorkbookRangeFormat and sets the default values.
     * @param workbookRangeFormatParameterValue 
     */
    public constructor(workbookRangeFormatParameterValue?: WorkbookRangeFormat | undefined) {
        super(workbookRangeFormatParameterValue);
        this.additionalData = workbookRangeFormatParameterValue?.additionalData ? workbookRangeFormatParameterValue?.additionalData! : {};
        const bordersArrValue: WorkbookRangeBorderImpl[] = []; workbookRangeFormatParameterValue.borders?.forEach(element => {bordersArrValue.push(element instanceof WorkbookRangeBorderImpl? element : new WorkbookRangeBorderImpl(element));});
        this.borders = bordersArrValue;
        this.columnWidth = workbookRangeFormatParameterValue?.columnWidth;
        this.fill = workbookRangeFormatParameterValue?.fill instanceof WorkbookRangeFillImpl? workbookRangeFormatParameterValue?.fill:new WorkbookRangeFillImpl(workbookRangeFormatParameterValue?.fill);
        this.font = workbookRangeFormatParameterValue?.font instanceof WorkbookRangeFontImpl? workbookRangeFormatParameterValue?.font:new WorkbookRangeFontImpl(workbookRangeFormatParameterValue?.font);
        this.horizontalAlignment = workbookRangeFormatParameterValue?.horizontalAlignment;
        this.protection = workbookRangeFormatParameterValue?.protection instanceof WorkbookFormatProtectionImpl? workbookRangeFormatParameterValue?.protection:new WorkbookFormatProtectionImpl(workbookRangeFormatParameterValue?.protection);
        this.rowHeight = workbookRangeFormatParameterValue?.rowHeight;
        this.verticalAlignment = workbookRangeFormatParameterValue?.verticalAlignment;
        this.wrapText = workbookRangeFormatParameterValue?.wrapText;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "borders": n => { this.borders = n.getCollectionOfObjectValues<WorkbookRangeBorderImpl>(createWorkbookRangeBorderFromDiscriminatorValue); },
            "columnWidth": n => { this.columnWidth = n.getNumberValue(); },
            "fill": n => { this.fill = n.getObjectValue<WorkbookRangeFillImpl>(createWorkbookRangeFillFromDiscriminatorValue); },
            "font": n => { this.font = n.getObjectValue<WorkbookRangeFontImpl>(createWorkbookRangeFontFromDiscriminatorValue); },
            "horizontalAlignment": n => { this.horizontalAlignment = n.getStringValue(); },
            "protection": n => { this.protection = n.getObjectValue<WorkbookFormatProtectionImpl>(createWorkbookFormatProtectionFromDiscriminatorValue); },
            "rowHeight": n => { this.rowHeight = n.getNumberValue(); },
            "verticalAlignment": n => { this.verticalAlignment = n.getStringValue(); },
            "wrapText": n => { this.wrapText = n.getBooleanValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.borders && this.borders.length != 0){        const bordersArrValue: WorkbookRangeBorderImpl[] = []; this.borders?.forEach(element => {bordersArrValue.push(element instanceof WorkbookRangeBorderImpl? element : new WorkbookRangeBorderImpl(element));});
            writer.writeCollectionOfObjectValues<WorkbookRangeBorderImpl>("borders", bordersArrValue);
        }
        if(this.columnWidth){
            writer.writeNumberValue("columnWidth", this.columnWidth);
        }
        if(this.fill){
            writer.writeObjectValue<WorkbookRangeFillImpl>("fill", new WorkbookRangeFillImpl(this.fill));
        }
        if(this.font){
            writer.writeObjectValue<WorkbookRangeFontImpl>("font", new WorkbookRangeFontImpl(this.font));
        }
        if(this.horizontalAlignment){
            writer.writeStringValue("horizontalAlignment", this.horizontalAlignment);
        }
        if(this.protection){
            writer.writeObjectValue<WorkbookFormatProtectionImpl>("protection", new WorkbookFormatProtectionImpl(this.protection));
        }
        if(this.rowHeight){
            writer.writeNumberValue("rowHeight", this.rowHeight);
        }
        if(this.verticalAlignment){
            writer.writeStringValue("verticalAlignment", this.verticalAlignment);
        }
        if(this.wrapText){
            writer.writeBooleanValue("wrapText", this.wrapText);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
