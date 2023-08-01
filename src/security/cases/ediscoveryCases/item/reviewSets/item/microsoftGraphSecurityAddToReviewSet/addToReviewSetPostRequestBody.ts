import {AdditionalDataOptions} from '../../../../../../../models/security/additionalDataOptions';
import type {EdiscoverySearch} from '../../../../../../../models/security/ediscoverySearch';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface AddToReviewSetPostRequestBody extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The additionalDataOptions property
     */
    additionalDataOptions?: AdditionalDataOptions | undefined;
    /**
     * The search property
     */
    search?: EdiscoverySearch | undefined;
}
