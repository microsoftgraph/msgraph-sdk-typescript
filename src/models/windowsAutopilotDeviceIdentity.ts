import {EnrollmentState} from './enrollmentState';
import {Entity} from './entity';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface WindowsAutopilotDeviceIdentity extends Entity, Parsable {
    /**
     * Addressable user name.
     */
    addressableUserName?: string | undefined;
    /**
     * AAD Device ID - to be deprecated
     */
    azureActiveDirectoryDeviceId?: string | undefined;
    /**
     * Display Name
     */
    displayName?: string | undefined;
    /**
     * The enrollmentState property
     */
    enrollmentState?: EnrollmentState | undefined;
    /**
     * Group Tag of the Windows autopilot device.
     */
    groupTag?: string | undefined;
    /**
     * Intune Last Contacted Date Time of the Windows autopilot device.
     */
    lastContactedDateTime?: Date | undefined;
    /**
     * Managed Device ID
     */
    managedDeviceId?: string | undefined;
    /**
     * Oem manufacturer of the Windows autopilot device.
     */
    manufacturer?: string | undefined;
    /**
     * Model name of the Windows autopilot device.
     */
    model?: string | undefined;
    /**
     * Product Key of the Windows autopilot device.
     */
    productKey?: string | undefined;
    /**
     * Purchase Order Identifier of the Windows autopilot device.
     */
    purchaseOrderIdentifier?: string | undefined;
    /**
     * Resource Name.
     */
    resourceName?: string | undefined;
    /**
     * Serial number of the Windows autopilot device.
     */
    serialNumber?: string | undefined;
    /**
     * SKU Number
     */
    skuNumber?: string | undefined;
    /**
     * System Family
     */
    systemFamily?: string | undefined;
    /**
     * User Principal Name.
     */
    userPrincipalName?: string | undefined;
}
