import {createIosDeviceTypeFromDiscriminatorValue} from './createIosDeviceTypeFromDiscriminatorValue';
import {createVppLicensingTypeFromDiscriminatorValue} from './createVppLicensingTypeFromDiscriminatorValue';
import {deserializeIntoMobileApp} from './deserializeIntoMobileApp';
import {IosDeviceType} from './iosDeviceType';
import {IosVppApp} from './iosVppApp';
import {serializeIosDeviceType} from './serializeIosDeviceType';
import {serializeVppLicensingType} from './serializeVppLicensingType';
import {VppLicensingType} from './vppLicensingType';
import {VppTokenAccountType} from './vppTokenAccountType';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoIosVppApp(iosVppApp: IosVppApp | undefined = {} as IosVppApp) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoMobileApp(iosVppApp),
        "applicableDeviceType": n => { iosVppApp.applicableDeviceType = n.getObjectValue<IosDeviceType>(createIosDeviceTypeFromDiscriminatorValue); },
        "appStoreUrl": n => { iosVppApp.appStoreUrl = n.getStringValue(); },
        "bundleId": n => { iosVppApp.bundleId = n.getStringValue(); },
        "licensingType": n => { iosVppApp.licensingType = n.getObjectValue<VppLicensingType>(createVppLicensingTypeFromDiscriminatorValue); },
        "releaseDateTime": n => { iosVppApp.releaseDateTime = n.getDateValue(); },
        "totalLicenseCount": n => { iosVppApp.totalLicenseCount = n.getNumberValue(); },
        "usedLicenseCount": n => { iosVppApp.usedLicenseCount = n.getNumberValue(); },
        "vppTokenAccountType": n => { iosVppApp.vppTokenAccountType = n.getEnumValue<VppTokenAccountType>(VppTokenAccountType); },
        "vppTokenAppleId": n => { iosVppApp.vppTokenAppleId = n.getStringValue(); },
        "vppTokenOrganizationName": n => { iosVppApp.vppTokenOrganizationName = n.getStringValue(); },
    }
}
