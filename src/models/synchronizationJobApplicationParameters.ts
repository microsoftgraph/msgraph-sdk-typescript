import { type SynchronizationJobSubject } from './synchronizationJobSubject';
import { type AdditionalDataHolder, type Parsable } from '@microsoft/kiota-abstractions';

export interface SynchronizationJobApplicationParameters extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * The identifier of the synchronizationRule to be applied. This rule ID is defined in the schema for a given synchronization job or template.
     */
    ruleId?: string | undefined;
    /**
     * The identifiers of one or more objects to which a synchronizationJob is to be applied.
     */
    subjects?: SynchronizationJobSubject[] | undefined;
}
