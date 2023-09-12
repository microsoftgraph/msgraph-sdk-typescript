import { type IosDeviceType } from './iosDeviceType';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeIosDeviceType(writer: SerializationWriter, iosDeviceType: IosDeviceType | undefined = {} as IosDeviceType) : void {
        writer.writeBooleanValue("iPad", iosDeviceType.iPad);
        writer.writeBooleanValue("iPhoneAndIPod", iosDeviceType.iPhoneAndIPod);
        writer.writeStringValue("@odata.type", iosDeviceType.odataType);
        writer.writeAdditionalData(iosDeviceType.additionalData);
}
