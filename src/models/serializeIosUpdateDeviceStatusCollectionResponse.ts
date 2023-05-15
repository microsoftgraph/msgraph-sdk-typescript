import {IosUpdateDeviceStatus} from './iosUpdateDeviceStatus';
import {IosUpdateDeviceStatusCollectionResponse} from './iosUpdateDeviceStatusCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeIosUpdateDeviceStatus} from './serializeIosUpdateDeviceStatus';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeIosUpdateDeviceStatusCollectionResponse(writer: SerializationWriter, iosUpdateDeviceStatusCollectionResponse: IosUpdateDeviceStatusCollectionResponse | undefined = {} as IosUpdateDeviceStatusCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, iosUpdateDeviceStatusCollectionResponse)
        writer.writeCollectionOfObjectValues<IosUpdateDeviceStatus>("value", iosUpdateDeviceStatusCollectionResponse.value, serializeIosUpdateDeviceStatus);
}
