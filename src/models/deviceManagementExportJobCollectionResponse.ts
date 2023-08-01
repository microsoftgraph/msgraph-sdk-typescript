import type {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import type {DeviceManagementExportJob} from './deviceManagementExportJob';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface DeviceManagementExportJobCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: DeviceManagementExportJob[] | undefined;
}
