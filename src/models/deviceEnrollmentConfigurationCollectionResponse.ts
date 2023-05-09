import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {DeviceEnrollmentConfiguration} from './deviceEnrollmentConfiguration';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface DeviceEnrollmentConfigurationCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /** The value property */
    value?: DeviceEnrollmentConfiguration[] | undefined;
}
