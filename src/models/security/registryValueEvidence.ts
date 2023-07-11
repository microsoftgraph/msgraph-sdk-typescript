import {AlertEvidence} from './alertEvidence';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface RegistryValueEvidence extends AlertEvidence, Parsable {
    /**
     * The mdeDeviceId property
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
