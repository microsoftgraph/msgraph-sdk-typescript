import { type AdditionalDataHolder, type Parsable } from '@microsoft/kiota-abstractions';

export interface UserSummary extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The number of failed tasks for users in a user summary.
     */
    failedTasks?: number | undefined;
    /**
     * The number of failed users in a user summary.
     */
    failedUsers?: number | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * The number of successful users in a user summary.
     */
    successfulUsers?: number | undefined;
    /**
     * The total tasks of users in a user summary.
     */
    totalTasks?: number | undefined;
    /**
     * The total number of users in a user summary
     */
    totalUsers?: number | undefined;
}
