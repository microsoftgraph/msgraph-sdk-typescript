import type {SynchronizationJobApplicationParameters} from '../../../../../../models/synchronizationJobApplicationParameters';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface ProvisionOnDemandPostRequestBody extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The parameters property
     */
    parameters?: SynchronizationJobApplicationParameters[] | undefined;
}
