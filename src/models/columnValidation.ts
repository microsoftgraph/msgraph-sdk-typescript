import {DisplayNameLocalization} from './displayNameLocalization';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface ColumnValidation extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * Default BCP 47 language tag for the description.
     */
    defaultLanguage?: string | undefined;
    /**
     * Localized messages that explain what is needed for this column's value to be considered valid. User will be prompted with this message if validation fails.
     */
    descriptions?: DisplayNameLocalization[] | undefined;
    /**
     * The formula to validate column value. For examples, see Examples of common formulas in lists.
     */
    formula?: string | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
}
