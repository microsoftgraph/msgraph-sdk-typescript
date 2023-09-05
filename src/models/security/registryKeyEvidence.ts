import { type AlertEvidence } from './alertEvidence';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface RegistryKeyEvidence extends AlertEvidence, Parsable {
    /**
     * Registry hive of the key that the recorded action was applied to.
     */
    registryHive?: string | undefined;
    /**
     * Registry key that the recorded action was applied to.
     */
    registryKey?: string | undefined;
}
