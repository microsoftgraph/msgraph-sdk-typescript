import {createIosDeviceTypeFromDiscriminatorValue} from './createIosDeviceTypeFromDiscriminatorValue';
import {createIosMinimumOperatingSystemFromDiscriminatorValue} from './createIosMinimumOperatingSystemFromDiscriminatorValue';
import {deserializeIntoMobileLobApp} from './deserializeIntoMobileLobApp';
import {IosDeviceType} from './iosDeviceType';
import {IosLobApp} from './iosLobApp';
import {IosMinimumOperatingSystem} from './iosMinimumOperatingSystem';
import {serializeIosDeviceType} from './serializeIosDeviceType';
import {serializeIosMinimumOperatingSystem} from './serializeIosMinimumOperatingSystem';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoIosLobApp(iosLobApp: IosLobApp | undefined = {} as IosLobApp) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoMobileLobApp(iosLobApp),
        "applicableDeviceType": n => { iosLobApp.applicableDeviceType = n.getObjectValue<IosDeviceType>(createIosDeviceTypeFromDiscriminatorValue); },
        "buildNumber": n => { iosLobApp.buildNumber = n.getStringValue(); },
        "bundleId": n => { iosLobApp.bundleId = n.getStringValue(); },
        "expirationDateTime": n => { iosLobApp.expirationDateTime = n.getDateValue(); },
        "minimumSupportedOperatingSystem": n => { iosLobApp.minimumSupportedOperatingSystem = n.getObjectValue<IosMinimumOperatingSystem>(createIosMinimumOperatingSystemFromDiscriminatorValue); },
        "versionNumber": n => { iosLobApp.versionNumber = n.getStringValue(); },
    }
}
