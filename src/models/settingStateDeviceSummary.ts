import {Entity} from './entity';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface SettingStateDeviceSummary extends Partial<AdditionalDataHolder>, Entity, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Device Compliant count for the setting */
    compliantDeviceCount?: number | undefined;
    /** Device conflict error count for the setting */
    conflictDeviceCount?: number | undefined;
    /** Device error count for the setting */
    errorDeviceCount?: number | undefined;
    /** Name of the InstancePath for the setting */
    instancePath?: string | undefined;
    /** Device NonCompliant count for the setting */
    nonCompliantDeviceCount?: number | undefined;
    /** Device Not Applicable count for the setting */
    notApplicableDeviceCount?: number | undefined;
    /** Device Compliant count for the setting */
    remediatedDeviceCount?: number | undefined;
    /** Name of the setting */
    settingName?: string | undefined;
    /** Device Unkown count for the setting */
    unknownDeviceCount?: number | undefined;
}
