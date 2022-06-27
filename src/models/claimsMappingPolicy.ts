import {StsPolicy} from './stsPolicy';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface ClaimsMappingPolicy extends Partial<AdditionalDataHolder>, Partial<Parsable>, StsPolicy {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
}
