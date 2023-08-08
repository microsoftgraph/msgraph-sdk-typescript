import type {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import type {DeviceEnrollmentConfiguration} from './deviceEnrollmentConfiguration';
import type {Parsable} from '@microsoft/kiota-abstractions';

export interface DeviceEnrollmentConfigurationCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: DeviceEnrollmentConfiguration[] | undefined;
}
