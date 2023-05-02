import {deserializeIntoDeviceConfiguration} from './deserializeIntoDeviceConfiguration';
import {IosCustomConfiguration} from './iosCustomConfiguration';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoIosCustomConfiguration(iosCustomConfiguration: IosCustomConfiguration | undefined = {} as IosCustomConfiguration) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoDeviceConfiguration(iosCustomConfiguration),
        "payload": n => { iosCustomConfiguration.payload = n.getStringValue(); },
        "payloadFileName": n => { iosCustomConfiguration.payloadFileName = n.getStringValue(); },
        "payloadName": n => { iosCustomConfiguration.payloadName = n.getStringValue(); },
    }
}
