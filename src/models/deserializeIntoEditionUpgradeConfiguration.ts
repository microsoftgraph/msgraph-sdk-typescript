import { deserializeIntoDeviceConfiguration } from './deserializeIntoDeviceConfiguration';
import { type EditionUpgradeConfiguration } from './editionUpgradeConfiguration';
import { EditionUpgradeLicenseType } from './editionUpgradeLicenseType';
import { Windows10EditionType } from './windows10EditionType';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoEditionUpgradeConfiguration(editionUpgradeConfiguration: EditionUpgradeConfiguration | undefined = {} as EditionUpgradeConfiguration) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoDeviceConfiguration(editionUpgradeConfiguration),
        "license": n => { editionUpgradeConfiguration.license = n.getStringValue(); },
        "licenseType": n => { editionUpgradeConfiguration.licenseType = n.getEnumValue<EditionUpgradeLicenseType>(EditionUpgradeLicenseType); },
        "productKey": n => { editionUpgradeConfiguration.productKey = n.getStringValue(); },
        "targetEdition": n => { editionUpgradeConfiguration.targetEdition = n.getEnumValue<Windows10EditionType>(Windows10EditionType); },
    }
}
