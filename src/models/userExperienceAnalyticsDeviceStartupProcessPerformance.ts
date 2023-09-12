import { type Entity } from './entity';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface UserExperienceAnalyticsDeviceStartupProcessPerformance extends Entity, Parsable {
    /**
     * The count of devices which initiated this process on startup. Supports: $filter, $select, $OrderBy. Read-only.
     */
    deviceCount?: number | undefined;
    /**
     * The median impact of startup process on device boot time in milliseconds. Supports: $filter, $select, $OrderBy. Read-only.
     */
    medianImpactInMs?: number | undefined;
    /**
     * The name of the startup process. Examples: outlook, excel. Supports: $select, $OrderBy. Read-only.
     */
    processName?: string | undefined;
    /**
     * The product name of the startup process. Examples: Microsoft Outlook, Microsoft Excel. Supports: $select, $OrderBy. Read-only.
     */
    productName?: string | undefined;
    /**
     * The publisher of the startup process. Examples: Microsoft Corporation, Contoso Corp. Supports: $select, $OrderBy. Read-only.
     */
    publisher?: string | undefined;
    /**
     * The total impact of startup process on device boot time in milliseconds. Supports: $filter, $select, $OrderBy. Read-only.
     */
    totalImpactInMs?: number | undefined;
}
