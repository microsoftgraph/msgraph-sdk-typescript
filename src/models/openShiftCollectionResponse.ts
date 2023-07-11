import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {OpenShift} from './openShift';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface OpenShiftCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: OpenShift[] | undefined;
}
