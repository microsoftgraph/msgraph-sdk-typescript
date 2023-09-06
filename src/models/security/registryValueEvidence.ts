import { type AlertEvidence } from './alertEvidence';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface RegistryValueEvidence extends AlertEvidence, Parsable {
    /**
     * A unique identifier assigned to a device by Microsoft Defender for Endpoint.
     */
    mdeDeviceId?: string | undefined;
    /**
     * Registry hive of the key that the recorded action was applied to.
     */
    registryHive?: string | undefined;
    /**
     * Registry key that the recorded action was applied to.
     */
    registryKey?: string | undefined;
    /**
     * Data of the registry value that the recorded action was applied to.
     */
    registryValue?: string | undefined;
    /**
     * Name of the registry value that the recorded action was applied to.
     */
    registryValueName?: string | undefined;
    /**
     * Data type, such as binary or string, of the registry value that the recorded action was applied to.
     */
    registryValueType?: string | undefined;
}
