import type {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import type {OpenShiftChangeRequest} from './openShiftChangeRequest';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface OpenShiftChangeRequestCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: OpenShiftChangeRequest[] | undefined;
}
