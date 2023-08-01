import type {BaseCollectionPaginationCountResponse} from '../../../models/baseCollectionPaginationCountResponse';
import type {LocaleInfo} from '../../../models/localeInfo';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface SupportedLanguagesResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: LocaleInfo[] | undefined;
}
