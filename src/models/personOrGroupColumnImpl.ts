import {PersonOrGroupColumn} from './personOrGroupColumn';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class PersonOrGroupColumnImpl implements AdditionalDataHolder, Parsable, PersonOrGroupColumn {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Indicates whether multiple values can be selected from the source. */
    public allowMultipleSelection?: boolean | undefined;
    /** Whether to allow selection of people only, or people and groups. Must be one of peopleAndGroups or peopleOnly. */
    public chooseFromType?: string | undefined;
    /** How to display the information about the person or group chosen. See below. */
    public displayAs?: string | undefined;
    /**
     * Instantiates a new personOrGroupColumn and sets the default values.
     * @param personOrGroupColumnParameterValue 
     */
    public constructor(personOrGroupColumnParameterValue?: PersonOrGroupColumn | undefined) {
        this.additionalData = personOrGroupColumnParameterValue?.additionalData ? personOrGroupColumnParameterValue?.additionalData! : {}
        this.allowMultipleSelection = personOrGroupColumnParameterValue?.allowMultipleSelection ;
        this.chooseFromType = personOrGroupColumnParameterValue?.chooseFromType ;
        this.displayAs = personOrGroupColumnParameterValue?.displayAs ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "allowMultipleSelection": n => { this.allowMultipleSelection = n.getBooleanValue(); },
            "chooseFromType": n => { this.chooseFromType = n.getStringValue(); },
            "displayAs": n => { this.displayAs = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.allowMultipleSelection){
        writer.writeBooleanValue("allowMultipleSelection", this.allowMultipleSelection);
        }
        if(this.chooseFromType){
        writer.writeStringValue("chooseFromType", this.chooseFromType);
        }
        if(this.displayAs){
        writer.writeStringValue("displayAs", this.displayAs);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
