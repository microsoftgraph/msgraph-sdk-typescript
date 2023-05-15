import {createIosUpdateDeviceStatusFromDiscriminatorValue} from './createIosUpdateDeviceStatusFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {IosUpdateDeviceStatus} from './iosUpdateDeviceStatus';
import {IosUpdateDeviceStatusCollectionResponse} from './iosUpdateDeviceStatusCollectionResponse';
import {serializeIosUpdateDeviceStatus} from './serializeIosUpdateDeviceStatus';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoIosUpdateDeviceStatusCollectionResponse(iosUpdateDeviceStatusCollectionResponse: IosUpdateDeviceStatusCollectionResponse | undefined = {} as IosUpdateDeviceStatusCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(iosUpdateDeviceStatusCollectionResponse),
        "value": n => { iosUpdateDeviceStatusCollectionResponse.value = n.getCollectionOfObjectValues<IosUpdateDeviceStatus>(createIosUpdateDeviceStatusFromDiscriminatorValue); },
    }
}
