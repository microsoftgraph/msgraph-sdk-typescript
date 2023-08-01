import {createIosDeviceTypeFromDiscriminatorValue} from './createIosDeviceTypeFromDiscriminatorValue';
import {createIosMinimumOperatingSystemFromDiscriminatorValue} from './createIosMinimumOperatingSystemFromDiscriminatorValue';
import {deserializeIntoMobileApp} from './deserializeIntoMobileApp';
import type {IosDeviceType} from './iosDeviceType';
import type {IosMinimumOperatingSystem} from './iosMinimumOperatingSystem';
import type {IosStoreApp} from './iosStoreApp';
import {serializeIosDeviceType} from './serializeIosDeviceType';
import {serializeIosMinimumOperatingSystem} from './serializeIosMinimumOperatingSystem';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoIosStoreApp(iosStoreApp: IosStoreApp | undefined = {} as IosStoreApp) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoMobileApp(iosStoreApp),
        "applicableDeviceType": n => { iosStoreApp.applicableDeviceType = n.getObjectValue<IosDeviceType>(createIosDeviceTypeFromDiscriminatorValue); },
        "appStoreUrl": n => { iosStoreApp.appStoreUrl = n.getStringValue(); },
        "bundleId": n => { iosStoreApp.bundleId = n.getStringValue(); },
        "minimumSupportedOperatingSystem": n => { iosStoreApp.minimumSupportedOperatingSystem = n.getObjectValue<IosMinimumOperatingSystem>(createIosMinimumOperatingSystemFromDiscriminatorValue); },
    }
}
