import {ParentalControlSettings} from './parentalControlSettings';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ParentalControlSettingsImpl implements AdditionalDataHolder, ParentalControlSettings, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Specifies the two-letter ISO country codes. Access to the application will be blocked for minors from the countries specified in this list. */
    public countriesBlockedForMinors?: string[] | undefined;
    /** Specifies the legal age group rule that applies to users of the app. Can be set to one of the following values: ValueDescriptionAllowDefault. Enforces the legal minimum. This means parental consent is required for minors in the European Union and Korea.RequireConsentForPrivacyServicesEnforces the user to specify date of birth to comply with COPPA rules. RequireConsentForMinorsRequires parental consent for ages below 18, regardless of country minor rules.RequireConsentForKidsRequires parental consent for ages below 14, regardless of country minor rules.BlockMinorsBlocks minors from using the app. */
    public legalAgeGroupRule?: string | undefined;
    /**
     * Instantiates a new parentalControlSettings and sets the default values.
     * @param parentalControlSettingsParameterValue 
     */
    public constructor(parentalControlSettingsParameterValue?: ParentalControlSettings | undefined) {
        this.additionalData = parentalControlSettingsParameterValue?.additionalData ? parentalControlSettingsParameterValue?.additionalData! : {}
        this.countriesBlockedForMinors = parentalControlSettingsParameterValue?.countriesBlockedForMinors ;
        this.legalAgeGroupRule = parentalControlSettingsParameterValue?.legalAgeGroupRule ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "countriesBlockedForMinors": n => { this.countriesBlockedForMinors = n.getCollectionOfPrimitiveValues<string>(); },
            "legalAgeGroupRule": n => { this.legalAgeGroupRule = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.countriesBlockedForMinors){
        writer.writeCollectionOfPrimitiveValues<string>("countriesBlockedForMinors", this.countriesBlockedForMinors);
        }
        if(this.legalAgeGroupRule){
        writer.writeStringValue("legalAgeGroupRule", this.legalAgeGroupRule);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
