import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {ResourceOperation} from './resourceOperation';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ResourceOperationCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /** The value property */
    value?: ResourceOperation[] | undefined;
}
