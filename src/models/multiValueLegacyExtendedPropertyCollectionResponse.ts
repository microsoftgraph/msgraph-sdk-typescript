import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {MultiValueLegacyExtendedProperty} from './multiValueLegacyExtendedProperty';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface MultiValueLegacyExtendedPropertyCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /** The value property */
    value?: MultiValueLegacyExtendedProperty[] | undefined;
}
