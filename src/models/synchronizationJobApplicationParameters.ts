import {SynchronizationJobSubject} from './synchronizationJobSubject';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface SynchronizationJobApplicationParameters extends AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The OdataType property */
    odataType?: string | undefined;
    /** The ruleId property */
    ruleId?: string | undefined;
    /** The subjects property */
    subjects?: SynchronizationJobSubject[] | undefined;
}
