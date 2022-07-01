import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface AssignmentOrder extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown> | undefined;
    /** A list of identityUserFlowAttribute IDs provided to determine the order in which attributes should be collected within a user flow. */
    order?: string[] | undefined;
}
