import {DeviceConfiguration} from './deviceConfiguration';
import {EditionUpgradeLicenseType} from './editionUpgradeLicenseType';
import {Windows10EditionType} from './windows10EditionType';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface EditionUpgradeConfiguration extends DeviceConfiguration, Partial<Parsable> {
    /** Edition Upgrade License File Content. */
    license?: string | undefined;
    /** Edition Upgrade License Type. Possible values are: productKey, licenseFile, notConfigured. */
    licenseType?: EditionUpgradeLicenseType | undefined;
    /** Edition Upgrade Product Key. */
    productKey?: string | undefined;
    /** Edition Upgrade Target Edition. Possible values are: windows10Enterprise, windows10EnterpriseN, windows10Education, windows10EducationN, windows10MobileEnterprise, windows10HolographicEnterprise, windows10Professional, windows10ProfessionalN, windows10ProfessionalEducation, windows10ProfessionalEducationN, windows10ProfessionalWorkstation, windows10ProfessionalWorkstationN, notConfigured, windows10Home, windows10HomeChina, windows10HomeN, windows10HomeSingleLanguage, windows10Mobile, windows10IoTCore, windows10IoTCoreCommercial. */
    targetEdition?: Windows10EditionType | undefined;
}
