import {DeviceConfiguration} from './deviceConfiguration';
import {EditionUpgradeLicenseType} from './editionUpgradeLicenseType';
import {Windows10EditionType} from './windows10EditionType';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface EditionUpgradeConfiguration extends DeviceConfiguration, Parsable {
    /**
     * Edition Upgrade License File Content.
     */
    license?: string | undefined;
    /**
     * Edition Upgrade License type
     */
    licenseType?: EditionUpgradeLicenseType | undefined;
    /**
     * Edition Upgrade Product Key.
     */
    productKey?: string | undefined;
    /**
     * Windows 10 Edition type.
     */
    targetEdition?: Windows10EditionType | undefined;
}
