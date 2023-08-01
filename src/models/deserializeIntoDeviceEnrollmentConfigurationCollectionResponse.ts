import {createDeviceEnrollmentConfigurationFromDiscriminatorValue} from './createDeviceEnrollmentConfigurationFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import type {DeviceEnrollmentConfiguration} from './deviceEnrollmentConfiguration';
import type {DeviceEnrollmentConfigurationCollectionResponse} from './deviceEnrollmentConfigurationCollectionResponse';
import {serializeDeviceEnrollmentConfiguration} from './serializeDeviceEnrollmentConfiguration';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDeviceEnrollmentConfigurationCollectionResponse(deviceEnrollmentConfigurationCollectionResponse: DeviceEnrollmentConfigurationCollectionResponse | undefined = {} as DeviceEnrollmentConfigurationCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(deviceEnrollmentConfigurationCollectionResponse),
        "value": n => { deviceEnrollmentConfigurationCollectionResponse.value = n.getCollectionOfObjectValues<DeviceEnrollmentConfiguration>(createDeviceEnrollmentConfigurationFromDiscriminatorValue); },
    }
}
