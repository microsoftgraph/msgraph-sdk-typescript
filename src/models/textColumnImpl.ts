import {TextColumn} from './textColumn';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class TextColumnImpl implements AdditionalDataHolder, Parsable, TextColumn {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Whether to allow multiple lines of text. */
    public allowMultipleLines?: boolean | undefined;
    /** Whether updates to this column should replace existing text, or append to it. */
    public appendChangesToExistingText?: boolean | undefined;
    /** The size of the text box. */
    public linesForEditing?: number | undefined;
    /** The maximum number of characters for the value. */
    public maxLength?: number | undefined;
    /** The type of text being stored. Must be one of plain or richText */
    public textType?: string | undefined;
    /**
     * Instantiates a new textColumn and sets the default values.
     * @param textColumnParameterValue 
     */
    public constructor(textColumnParameterValue?: TextColumn | undefined) {
        this.additionalData = textColumnParameterValue?.additionalData ? textColumnParameterValue?.additionalData! : {}
        this.allowMultipleLines = textColumnParameterValue?.allowMultipleLines ;
        this.appendChangesToExistingText = textColumnParameterValue?.appendChangesToExistingText ;
        this.linesForEditing = textColumnParameterValue?.linesForEditing ;
        this.maxLength = textColumnParameterValue?.maxLength ;
        this.textType = textColumnParameterValue?.textType ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "allowMultipleLines": n => { this.allowMultipleLines = n.getBooleanValue(); },
            "appendChangesToExistingText": n => { this.appendChangesToExistingText = n.getBooleanValue(); },
            "linesForEditing": n => { this.linesForEditing = n.getNumberValue(); },
            "maxLength": n => { this.maxLength = n.getNumberValue(); },
            "textType": n => { this.textType = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.allowMultipleLines){
        writer.writeBooleanValue("allowMultipleLines", this.allowMultipleLines);
        }
        if(this.appendChangesToExistingText){
        writer.writeBooleanValue("appendChangesToExistingText", this.appendChangesToExistingText);
        }
        if(this.linesForEditing){
        writer.writeNumberValue("linesForEditing", this.linesForEditing);
        }
        if(this.maxLength){
        writer.writeNumberValue("maxLength", this.maxLength);
        }
        if(this.textType){
        writer.writeStringValue("textType", this.textType);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
