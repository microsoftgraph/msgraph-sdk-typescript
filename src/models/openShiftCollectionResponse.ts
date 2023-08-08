import type {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import type {OpenShift} from './openShift';
import type {Parsable} from '@microsoft/kiota-abstractions';

export interface OpenShiftCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: OpenShift[] | undefined;
}
