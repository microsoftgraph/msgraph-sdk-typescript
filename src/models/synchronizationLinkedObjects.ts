import {SynchronizationJobSubject} from './synchronizationJobSubject';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface SynchronizationLinkedObjects extends AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The manager property */
    manager?: SynchronizationJobSubject | undefined;
    /** The members property */
    members?: SynchronizationJobSubject[] | undefined;
    /** The OdataType property */
    odataType?: string | undefined;
    /** The owners property */
    owners?: SynchronizationJobSubject[] | undefined;
}
