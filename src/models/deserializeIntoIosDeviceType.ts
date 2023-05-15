import {IosDeviceType} from './iosDeviceType';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoIosDeviceType(iosDeviceType: IosDeviceType | undefined = {} as IosDeviceType) : Record<string, (node: ParseNode) => void> {
    return {
        "iPad": n => { iosDeviceType.iPad = n.getBooleanValue(); },
        "iPhoneAndIPod": n => { iosDeviceType.iPhoneAndIPod = n.getBooleanValue(); },
        "@odata.type": n => { iosDeviceType.odataType = n.getStringValue(); },
    }
}
