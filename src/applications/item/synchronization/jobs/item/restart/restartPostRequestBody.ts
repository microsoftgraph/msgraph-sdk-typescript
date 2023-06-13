import {SynchronizationJobRestartCriteria} from '../../../../../../models/synchronizationJobRestartCriteria';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface RestartPostRequestBody extends AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The criteria property */
    criteria?: SynchronizationJobRestartCriteria | undefined;
}
