import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {MobileAppAssignment} from './mobileAppAssignment';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface MobileAppAssignmentCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /** The value property */
    value?: MobileAppAssignment[] | undefined;
}
