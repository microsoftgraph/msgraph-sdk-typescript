import {SamlSingleSignOnSettings} from './samlSingleSignOnSettings';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class SamlSingleSignOnSettingsImpl implements AdditionalDataHolder, Parsable, SamlSingleSignOnSettings {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The relative URI the service provider would redirect to after completion of the single sign-on flow. */
    public relayState?: string | undefined;
    /**
     * Instantiates a new samlSingleSignOnSettings and sets the default values.
     * @param samlSingleSignOnSettingsParameterValue 
     */
    public constructor(samlSingleSignOnSettingsParameterValue?: SamlSingleSignOnSettings | undefined) {
        this.additionalData = samlSingleSignOnSettingsParameterValue?.additionalData ? samlSingleSignOnSettingsParameterValue?.additionalData! : {}
        this.relayState = samlSingleSignOnSettingsParameterValue?.relayState ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "relayState": n => { this.relayState = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.relayState){
        writer.writeStringValue("relayState", this.relayState);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
