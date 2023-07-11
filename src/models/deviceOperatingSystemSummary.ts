import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface DeviceOperatingSystemSummary extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The count of Corporate work profile Android devices. Also known as Corporate Owned Personally Enabled (COPE). Valid values -1 to 2147483647
     */
    androidCorporateWorkProfileCount?: number | undefined;
    /**
     * Number of android device count.
     */
    androidCount?: number | undefined;
    /**
     * Number of dedicated Android devices.
     */
    androidDedicatedCount?: number | undefined;
    /**
     * Number of device admin Android devices.
     */
    androidDeviceAdminCount?: number | undefined;
    /**
     * Number of fully managed Android devices.
     */
    androidFullyManagedCount?: number | undefined;
    /**
     * Number of work profile Android devices.
     */
    androidWorkProfileCount?: number | undefined;
    /**
     * Number of ConfigMgr managed devices.
     */
    configMgrDeviceCount?: number | undefined;
    /**
     * Number of iOS device count.
     */
    iosCount?: number | undefined;
    /**
     * Number of Mac OS X device count.
     */
    macOSCount?: number | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * Number of unknown device count.
     */
    unknownCount?: number | undefined;
    /**
     * Number of Windows device count.
     */
    windowsCount?: number | undefined;
    /**
     * Number of Windows mobile device count.
     */
    windowsMobileCount?: number | undefined;
}
