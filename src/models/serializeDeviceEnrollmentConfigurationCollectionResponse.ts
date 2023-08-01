import type {DeviceEnrollmentConfiguration} from './deviceEnrollmentConfiguration';
import type {DeviceEnrollmentConfigurationCollectionResponse} from './deviceEnrollmentConfigurationCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeDeviceEnrollmentConfiguration} from './serializeDeviceEnrollmentConfiguration';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDeviceEnrollmentConfigurationCollectionResponse(writer: SerializationWriter, deviceEnrollmentConfigurationCollectionResponse: DeviceEnrollmentConfigurationCollectionResponse | undefined = {} as DeviceEnrollmentConfigurationCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, deviceEnrollmentConfigurationCollectionResponse)
        writer.writeCollectionOfObjectValues<DeviceEnrollmentConfiguration>("value", deviceEnrollmentConfigurationCollectionResponse.value, serializeDeviceEnrollmentConfiguration);
}
