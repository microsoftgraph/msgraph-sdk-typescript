import {Win32LobAppMsiPackageType} from './win32LobAppMsiPackageType';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface Win32LobAppMsiInformation extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown> | undefined;
    /** The MSI package type. Possible values are: perMachine, perUser, dualPurpose. */
    packageType?: Win32LobAppMsiPackageType | undefined;
    /** The MSI product code. */
    productCode?: string | undefined;
    /** The MSI product name. */
    productName?: string | undefined;
    /** The MSI product version. */
    productVersion?: string | undefined;
    /** The MSI publisher. */
    publisher?: string | undefined;
    /** Whether the MSI app requires the machine to reboot to complete installation. */
    requiresReboot?: boolean | undefined;
    /** The MSI upgrade code. */
    upgradeCode?: string | undefined;
}
