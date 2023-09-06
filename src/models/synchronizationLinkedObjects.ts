import { type SynchronizationJobSubject } from './synchronizationJobSubject';
import { type AdditionalDataHolder, type Parsable } from '@microsoft/kiota-abstractions';

export interface SynchronizationLinkedObjects extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The manager property
     */
    manager?: SynchronizationJobSubject | undefined;
    /**
     * All group members that you would like to provision.
     */
    members?: SynchronizationJobSubject[] | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * The owners property
     */
    owners?: SynchronizationJobSubject[] | undefined;
}
