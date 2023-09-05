import { deserializeIntoDeviceConfiguration } from './deserializeIntoDeviceConfiguration';
import { type MacOSCustomConfiguration } from './macOSCustomConfiguration';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoMacOSCustomConfiguration(macOSCustomConfiguration: MacOSCustomConfiguration | undefined = {} as MacOSCustomConfiguration) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoDeviceConfiguration(macOSCustomConfiguration),
        "payload": n => { macOSCustomConfiguration.payload = n.getStringValue(); },
        "payloadFileName": n => { macOSCustomConfiguration.payloadFileName = n.getStringValue(); },
        "payloadName": n => { macOSCustomConfiguration.payloadName = n.getStringValue(); },
    }
}
