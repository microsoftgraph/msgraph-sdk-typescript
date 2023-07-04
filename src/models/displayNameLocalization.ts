import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface DisplayNameLocalization extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * If present, the value of this field contains the displayName string that has been set for the language present in the languageTag field.
     */
    displayName?: string | undefined;
    /**
     * Provides the language culture-code and friendly name of the language that the displayName field has been provided in.
     */
    languageTag?: string | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
}
