import {IosDeviceType} from './iosDeviceType';
import {IosVppApp} from './iosVppApp';
import {serializeIosDeviceType} from './serializeIosDeviceType';
import {serializeMobileApp} from './serializeMobileApp';
import {serializeVppLicensingType} from './serializeVppLicensingType';
import {VppLicensingType} from './vppLicensingType';
import {VppTokenAccountType} from './vppTokenAccountType';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeIosVppApp(writer: SerializationWriter, iosVppApp: IosVppApp | undefined = {} as IosVppApp) : void {
        serializeMobileApp(writer, iosVppApp)
        writer.writeObjectValue<IosDeviceType>("applicableDeviceType", iosVppApp.applicableDeviceType, serializeIosDeviceType);
        writer.writeStringValue("appStoreUrl", iosVppApp.appStoreUrl);
        writer.writeStringValue("bundleId", iosVppApp.bundleId);
        writer.writeObjectValue<VppLicensingType>("licensingType", iosVppApp.licensingType, serializeVppLicensingType);
        writer.writeDateValue("releaseDateTime", iosVppApp.releaseDateTime);
        writer.writeNumberValue("totalLicenseCount", iosVppApp.totalLicenseCount);
        writer.writeNumberValue("usedLicenseCount", iosVppApp.usedLicenseCount);
        writer.writeEnumValue<VppTokenAccountType>("vppTokenAccountType", iosVppApp.vppTokenAccountType);
        writer.writeStringValue("vppTokenAppleId", iosVppApp.vppTokenAppleId);
        writer.writeStringValue("vppTokenOrganizationName", iosVppApp.vppTokenOrganizationName);
}
