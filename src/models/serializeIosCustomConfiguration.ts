import {IosCustomConfiguration} from './iosCustomConfiguration';
import {serializeDeviceConfiguration} from './serializeDeviceConfiguration';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeIosCustomConfiguration(writer: SerializationWriter, iosCustomConfiguration: IosCustomConfiguration | undefined = {} as IosCustomConfiguration) : void {
        serializeDeviceConfiguration(writer, iosCustomConfiguration)
        writer.writeStringValue("payload", iosCustomConfiguration.payload);
        writer.writeStringValue("payloadFileName", iosCustomConfiguration.payloadFileName);
        writer.writeStringValue("payloadName", iosCustomConfiguration.payloadName);
}
