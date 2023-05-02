import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {SingleValueLegacyExtendedProperty} from './singleValueLegacyExtendedProperty';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface SingleValueLegacyExtendedPropertyCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /** The value property */
    value?: SingleValueLegacyExtendedProperty[] | undefined;
}
