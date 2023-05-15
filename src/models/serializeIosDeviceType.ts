import {IosDeviceType} from './iosDeviceType';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeIosDeviceType(writer: SerializationWriter, iosDeviceType: IosDeviceType | undefined = {} as IosDeviceType) : void {
        writer.writeBooleanValue("iPad", iosDeviceType.iPad);
        writer.writeBooleanValue("iPhoneAndIPod", iosDeviceType.iPhoneAndIPod);
        writer.writeStringValue("@odata.type", iosDeviceType.odataType);
        writer.writeAdditionalData(iosDeviceType.additionalData);
}
