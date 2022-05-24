import {EntityImpl} from './index';
import {WorkbookChartFont} from './workbookChartFont';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Casts the previous resource to user. */
export class WorkbookChartFontImpl extends EntityImpl implements Parsable, WorkbookChartFont {
    /** Represents the bold status of font. */
    public bold?: boolean | undefined;
    /** HTML color code representation of the text color. E.g. #FF0000 represents Red. */
    public color?: string | undefined;
    /** Represents the italic status of the font. */
    public italic?: boolean | undefined;
    /** Font name (e.g. 'Calibri') */
    public name?: string | undefined;
    /** Size of the font (e.g. 11) */
    public size?: number | undefined;
    /** Type of underline applied to the font. The possible values are: None, Single. */
    public underline?: string | undefined;
    /**
     * Instantiates a new workbookChartFont and sets the default values.
     * @param workbookChartFontParameterValue 
     */
    public constructor(workbookChartFontParameterValue?: WorkbookChartFont | undefined) {
        super();
        this.bold = workbookChartFontParameterValue?.bold ;
        this.color = workbookChartFontParameterValue?.color ;
        this.italic = workbookChartFontParameterValue?.italic ;
        this.name = workbookChartFontParameterValue?.name ;
        this.size = workbookChartFontParameterValue?.size ;
        this.underline = workbookChartFontParameterValue?.underline ;
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
    };
}
