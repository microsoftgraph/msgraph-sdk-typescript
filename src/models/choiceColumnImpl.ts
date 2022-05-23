import {ChoiceColumn} from './choiceColumn';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ChoiceColumnImpl implements AdditionalDataHolder, ChoiceColumn, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** If true, allows custom values that aren't in the configured choices. */
    public allowTextEntry?: boolean | undefined;
    /** The list of values available for this column. */
    public choices?: string[] | undefined;
    /** How the choices are to be presented in the UX. Must be one of checkBoxes, dropDownMenu, or radioButtons */
    public displayAs?: string | undefined;
    /**
     * Instantiates a new choiceColumn and sets the default values.
     * @param choiceColumnParameterValue 
     */
    public constructor(choiceColumnParameterValue?: ChoiceColumn | undefined) {
        this.additionalData = choiceColumnParameterValue?.additionalData ? choiceColumnParameterValue?.additionalData! : {}
        this.allowTextEntry = choiceColumnParameterValue?.allowTextEntry ;
        this.choices = choiceColumnParameterValue?.choices ;
        this.displayAs = choiceColumnParameterValue?.displayAs ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "allowTextEntry": n => { this.allowTextEntry = n.getBooleanValue(); },
            "choices": n => { this.choices = n.getCollectionOfPrimitiveValues<string>(); },
            "displayAs": n => { this.displayAs = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.allowTextEntry){
        writer.writeBooleanValue("allowTextEntry", this.allowTextEntry);
        }
        if(this.choices){
        writer.writeCollectionOfPrimitiveValues<string>("choices", this.choices);
        }
        if(this.displayAs){
        writer.writeStringValue("displayAs", this.displayAs);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
