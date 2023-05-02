import {createDeviceConfigurationUserStatusFromDiscriminatorValue} from './createDeviceConfigurationUserStatusFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {DeviceConfigurationUserStatus} from './deviceConfigurationUserStatus';
import {DeviceConfigurationUserStatusCollectionResponse} from './deviceConfigurationUserStatusCollectionResponse';
import {serializeDeviceConfigurationUserStatus} from './serializeDeviceConfigurationUserStatus';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDeviceConfigurationUserStatusCollectionResponse(deviceConfigurationUserStatusCollectionResponse: DeviceConfigurationUserStatusCollectionResponse | undefined = {} as DeviceConfigurationUserStatusCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(deviceConfigurationUserStatusCollectionResponse),
        "value": n => { deviceConfigurationUserStatusCollectionResponse.value = n.getCollectionOfObjectValues<DeviceConfigurationUserStatus>(createDeviceConfigurationUserStatusFromDiscriminatorValue); },
    }
}
