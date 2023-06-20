import {DeviceEnrollmentConfiguration} from './deviceEnrollmentConfiguration';
import {DeviceEnrollmentConfigurationCollectionResponse} from './deviceEnrollmentConfigurationCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeDeviceEnrollmentConfiguration} from './serializeDeviceEnrollmentConfiguration';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDeviceEnrollmentConfigurationCollectionResponse(deviceEnrollmentConfigurationCollectionResponse: DeviceEnrollmentConfigurationCollectionResponse | undefined = {} as DeviceEnrollmentConfigurationCollectionResponse, writer: SerializationWriter) : void {
        serializeBaseCollectionPaginationCountResponse(writer, deviceEnrollmentConfigurationCollectionResponse)
        writer.writeCollectionOfObjectValues<DeviceEnrollmentConfiguration>("value", deviceEnrollmentConfigurationCollectionResponse.value, serializeDeviceEnrollmentConfiguration);
}
