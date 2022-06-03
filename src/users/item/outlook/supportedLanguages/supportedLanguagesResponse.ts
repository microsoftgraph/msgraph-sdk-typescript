import {LocaleInfo} from '../../../../models/localeInfo';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface SupportedLanguagesResponse extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The value property */
    value?: LocaleInfo[] | undefined;
}
