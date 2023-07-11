import {AccessPackageLocalizedText} from './accessPackageLocalizedText';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface AccessPackageAnswerChoice extends AdditionalDataHolder, Parsable {
    /**
     * The actual value of the selected choice. This is typically a string value which is understandable by applications. Required.
     */
    actualValue?: string | undefined;
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The text of the answer choice represented in a format for a specific locale.
     */
    localizations?: AccessPackageLocalizedText[] | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * The text property
     */
    text?: string | undefined;
}
