import {DeviceConfiguration} from './deviceConfiguration';
import {SharedPCAccountManagerPolicy} from './sharedPCAccountManagerPolicy';
import {SharedPCAllowedAccountType} from './sharedPCAllowedAccountType';
import {Parsable, TimeOnly} from '@microsoft/kiota-abstractions';

export interface SharedPCConfiguration extends DeviceConfiguration, Parsable {
    /**
     * Specifies how accounts are managed on a shared PC. Only applies when disableAccountManager is false.
     */
    accountManagerPolicy?: SharedPCAccountManagerPolicy | undefined;
    /**
     * Type of accounts that are allowed to share the PC.
     */
    allowedAccounts?: SharedPCAllowedAccountType | undefined;
    /**
     * Specifies whether local storage is allowed on a shared PC.
     */
    allowLocalStorage?: boolean | undefined;
    /**
     * Disables the account manager for shared PC mode.
     */
    disableAccountManager?: boolean | undefined;
    /**
     * Specifies whether the default shared PC education environment policies should be disabled. For Windows 10 RS2 and later, this policy will be applied without setting Enabled to true.
     */
    disableEduPolicies?: boolean | undefined;
    /**
     * Specifies whether the default shared PC power policies should be disabled.
     */
    disablePowerPolicies?: boolean | undefined;
    /**
     * Disables the requirement to sign in whenever the device wakes up from sleep mode.
     */
    disableSignInOnResume?: boolean | undefined;
    /**
     * Enables shared PC mode and applies the shared pc policies.
     */
    enabled?: boolean | undefined;
    /**
     * Specifies the time in seconds that a device must sit idle before the PC goes to sleep. Setting this value to 0 prevents the sleep timeout from occurring.
     */
    idleTimeBeforeSleepInSeconds?: number | undefined;
    /**
     * Specifies the display text for the account shown on the sign-in screen which launches the app specified by SetKioskAppUserModelId. Only applies when KioskAppUserModelId is set.
     */
    kioskAppDisplayName?: string | undefined;
    /**
     * Specifies the application user model ID of the app to use with assigned access.
     */
    kioskAppUserModelId?: string | undefined;
    /**
     * Specifies the daily start time of maintenance hour.
     */
    maintenanceStartTime?: TimeOnly | undefined;
}
