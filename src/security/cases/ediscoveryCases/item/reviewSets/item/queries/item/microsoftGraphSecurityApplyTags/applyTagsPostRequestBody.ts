import type {EdiscoveryReviewTag} from '../../../../../../../../../models/security/ediscoveryReviewTag';
import type {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface ApplyTagsPostRequestBody extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The tagsToAdd property
     */
    tagsToAdd?: EdiscoveryReviewTag[] | undefined;
    /**
     * The tagsToRemove property
     */
    tagsToRemove?: EdiscoveryReviewTag[] | undefined;
}
