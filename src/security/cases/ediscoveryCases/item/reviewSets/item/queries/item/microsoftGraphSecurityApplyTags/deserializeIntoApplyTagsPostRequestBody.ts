import {createEdiscoveryReviewTagFromDiscriminatorValue} from '../../../../../../../../../models/security/createEdiscoveryReviewTagFromDiscriminatorValue';
import type {EdiscoveryReviewTag} from '../../../../../../../../../models/security/ediscoveryReviewTag';
import {serializeEdiscoveryReviewTag} from '../../../../../../../../../models/security/serializeEdiscoveryReviewTag';
import type {ApplyTagsPostRequestBody} from './applyTagsPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoApplyTagsPostRequestBody(applyTagsPostRequestBody: ApplyTagsPostRequestBody | undefined = {} as ApplyTagsPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "tagsToAdd": n => { applyTagsPostRequestBody.tagsToAdd = n.getCollectionOfObjectValues<EdiscoveryReviewTag>(createEdiscoveryReviewTagFromDiscriminatorValue); },
        "tagsToRemove": n => { applyTagsPostRequestBody.tagsToRemove = n.getCollectionOfObjectValues<EdiscoveryReviewTag>(createEdiscoveryReviewTagFromDiscriminatorValue); },
    }
}
