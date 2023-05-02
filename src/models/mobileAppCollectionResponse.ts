import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {MobileApp} from './mobileApp';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface MobileAppCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /** The value property */
    value?: MobileApp[] | undefined;
}
