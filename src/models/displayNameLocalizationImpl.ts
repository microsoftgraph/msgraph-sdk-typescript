import {DisplayNameLocalization} from './displayNameLocalization';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class DisplayNameLocalizationImpl implements AdditionalDataHolder, DisplayNameLocalization, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** If present, the value of this field contains the displayName string that has been set for the language present in the languageTag field. */
    public displayName?: string | undefined;
    /** Provides the language culture-code and friendly name of the language that the displayName field has been provided in. */
    public languageTag?: string | undefined;
    /**
     * Instantiates a new displayNameLocalization and sets the default values.
     * @param displayNameLocalizationParameterValue 
     */
    public constructor(displayNameLocalizationParameterValue?: DisplayNameLocalization | undefined) {
        this.additionalData = displayNameLocalizationParameterValue?.additionalData ? displayNameLocalizationParameterValue?.additionalData! : {}
        this.displayName = displayNameLocalizationParameterValue?.displayName ;
        this.languageTag = displayNameLocalizationParameterValue?.languageTag ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "displayName": n => { this.displayName = n.getStringValue(); },
            "languageTag": n => { this.languageTag = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.displayName){
        writer.writeStringValue("displayName", this.displayName);
        }
        if(this.languageTag){
        writer.writeStringValue("languageTag", this.languageTag);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
