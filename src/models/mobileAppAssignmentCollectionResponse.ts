import type {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import type {MobileAppAssignment} from './mobileAppAssignment';
import type {Parsable} from '@microsoft/kiota-abstractions';

export interface MobileAppAssignmentCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: MobileAppAssignment[] | undefined;
}
