import {EntityImpl} from './index';
import {WorkbookRangeFont} from './workbookRangeFont';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the authenticationMethodsPolicy singleton. */
export class WorkbookRangeFontImpl extends EntityImpl implements WorkbookRangeFont {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Represents the bold status of font. */
    public bold?: boolean | undefined;
    /** HTML color code representation of the text color. E.g. #FF0000 represents Red. */
    public color?: string | undefined;
    /** Represents the italic status of the font. */
    public italic?: boolean | undefined;
    /** Font name (e.g. 'Calibri') */
    public name?: string | undefined;
    /** Font size. */
    public size?: number | undefined;
    /** Type of underline applied to the font. Possible values are: None, Single, Double, SingleAccountant, DoubleAccountant. */
    public underline?: string | undefined;
    /**
     * Instantiates a new workbookRangeFont and sets the default values.
     * @param workbookRangeFontParameterValue 
     */
    public constructor(workbookRangeFontParameterValue?: WorkbookRangeFont | undefined) {
        super(workbookRangeFontParameterValue);
        this.additionalData = workbookRangeFontParameterValue?.additionalData ? workbookRangeFontParameterValue?.additionalData! : {};
        this.bold = workbookRangeFontParameterValue?.bold;
        this.color = workbookRangeFontParameterValue?.color;
        this.italic = workbookRangeFontParameterValue?.italic;
        this.name = workbookRangeFontParameterValue?.name;
        this.size = workbookRangeFontParameterValue?.size;
        this.underline = workbookRangeFontParameterValue?.underline;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "bold": n => { this.bold = n.getBooleanValue(); },
            "color": n => { this.color = n.getStringValue(); },
            "italic": n => { this.italic = n.getBooleanValue(); },
            "name": n => { this.name = n.getStringValue(); },
            "size": n => { this.size = n.getNumberValue(); },
            "underline": n => { this.underline = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.bold){
            writer.writeBooleanValue("bold", this.bold);
        }
        if(this.color){
            writer.writeStringValue("color", this.color);
        }
        if(this.italic){
            writer.writeBooleanValue("italic", this.italic);
        }
        if(this.name){
            writer.writeStringValue("name", this.name);
        }
        if(this.size){
            writer.writeNumberValue("size", this.size);
        }
        if(this.underline){
            writer.writeStringValue("underline", this.underline);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
