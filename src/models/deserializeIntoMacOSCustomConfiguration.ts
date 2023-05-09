import {deserializeIntoDeviceConfiguration} from './deserializeIntoDeviceConfiguration';
import {MacOSCustomConfiguration} from './macOSCustomConfiguration';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoMacOSCustomConfiguration(macOSCustomConfiguration: MacOSCustomConfiguration | undefined = {} as MacOSCustomConfiguration) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoDeviceConfiguration(macOSCustomConfiguration),
        "payload": n => { macOSCustomConfiguration.payload = n.getStringValue(); },
        "payloadFileName": n => { macOSCustomConfiguration.payloadFileName = n.getStringValue(); },
        "payloadName": n => { macOSCustomConfiguration.payloadName = n.getStringValue(); },
    }
}
