import {LocaleInfo} from '../../../../models/localeInfo';

export interface SupportedLanguagesResponse{
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?:Record<string, unknown>;
    /** The value property */
    value?:LocaleInfo[] | undefined;
}
