import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface ParentalControlSettings extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * Specifies the two-letter ISO country codes. Access to the application will be blocked for minors from the countries specified in this list.
     */
    countriesBlockedForMinors?: string[] | undefined;
    /**
     * Specifies the legal age group rule that applies to users of the app. Can be set to one of the following values: ValueDescriptionAllowDefault. Enforces the legal minimum. This means parental consent is required for minors in the European Union and Korea.RequireConsentForPrivacyServicesEnforces the user to specify date of birth to comply with COPPA rules. RequireConsentForMinorsRequires parental consent for ages below 18, regardless of country minor rules.RequireConsentForKidsRequires parental consent for ages below 14, regardless of country minor rules.BlockMinorsBlocks minors from using the app.
     */
    legalAgeGroupRule?: string | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
}
