import {EditionUpgradeConfiguration} from './editionUpgradeConfiguration';
import {EditionUpgradeLicenseType} from './editionUpgradeLicenseType';
import {serializeDeviceConfiguration} from './serializeDeviceConfiguration';
import {Windows10EditionType} from './windows10EditionType';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeEditionUpgradeConfiguration(editionUpgradeConfiguration: EditionUpgradeConfiguration | undefined = {} as EditionUpgradeConfiguration, writer: SerializationWriter) : void {
        serializeDeviceConfiguration(writer, editionUpgradeConfiguration)
        writer.writeStringValue("license", editionUpgradeConfiguration.license);
        writer.writeEnumValue<EditionUpgradeLicenseType>("licenseType", editionUpgradeConfiguration.licenseType);
        writer.writeStringValue("productKey", editionUpgradeConfiguration.productKey);
        writer.writeEnumValue<Windows10EditionType>("targetEdition", editionUpgradeConfiguration.targetEdition);
}
