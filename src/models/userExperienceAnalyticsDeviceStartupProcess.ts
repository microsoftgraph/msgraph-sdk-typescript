import {Entity} from './entity';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface UserExperienceAnalyticsDeviceStartupProcess extends Entity, Parsable {
    /**
     * The Intune device id of the device. Supports: $select, $OrderBy. Read-only.
     */
    managedDeviceId?: string | undefined;
    /**
     * The name of the process. Examples: outlook, excel. Supports: $select, $OrderBy. Read-only.
     */
    processName?: string | undefined;
    /**
     * The product name of the process. Examples: Microsoft Outlook, Microsoft Excel. Supports: $select, $OrderBy. Read-only.
     */
    productName?: string | undefined;
    /**
     * The publisher of the process. Examples: Microsoft Corporation, Contoso Corp. Supports: $select, $OrderBy. Read-only.
     */
    publisher?: string | undefined;
    /**
     * The impact of startup process on device boot time in milliseconds. Supports: $select, $OrderBy. Read-only.
     */
    startupImpactInMs?: number | undefined;
}
