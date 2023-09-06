import { type ExternalActivity } from '../../../../../models/externalConnectors/externalActivity';
import { type AdditionalDataHolder, type Parsable } from '@microsoft/kiota-abstractions';

export interface AddActivitiesPostRequestBody extends AdditionalDataHolder, Parsable {
    /**
     * The activities property
     */
    activities?: ExternalActivity[] | undefined;
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
}
