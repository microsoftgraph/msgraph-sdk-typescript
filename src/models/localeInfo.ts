import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface LocaleInfo extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * A name representing the user's locale in natural language, for example, 'English (United States)'.
     */
    displayName?: string | undefined;
    /**
     * A locale representation for the user, which includes the user's preferred language and country/region. For example, 'en-us'. The language component follows 2-letter codes as defined in ISO 639-1, and the country component follows 2-letter codes as defined in ISO 3166-1 alpha-2.
     */
    locale?: string | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
}
