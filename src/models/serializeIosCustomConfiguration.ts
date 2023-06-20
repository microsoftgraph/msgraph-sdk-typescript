import {IosCustomConfiguration} from './iosCustomConfiguration';
import {serializeDeviceConfiguration} from './serializeDeviceConfiguration';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeIosCustomConfiguration(iosCustomConfiguration: IosCustomConfiguration | undefined = {} as IosCustomConfiguration, writer: SerializationWriter) : void {
        serializeDeviceConfiguration(writer, iosCustomConfiguration)
        writer.writeStringValue("payload", iosCustomConfiguration.payload);
        writer.writeStringValue("payloadFileName", iosCustomConfiguration.payloadFileName);
        writer.writeStringValue("payloadName", iosCustomConfiguration.payloadName);
}
