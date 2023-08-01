import type {EdiscoveryReviewTag} from '../../../../../../../../../models/security/ediscoveryReviewTag';
import {serializeEdiscoveryReviewTag} from '../../../../../../../../../models/security/serializeEdiscoveryReviewTag';
import type {ApplyTagsPostRequestBody} from './applyTagsPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeApplyTagsPostRequestBody(writer: SerializationWriter, applyTagsPostRequestBody: ApplyTagsPostRequestBody | undefined = {} as ApplyTagsPostRequestBody) : void {
        writer.writeCollectionOfObjectValues<EdiscoveryReviewTag>("tagsToAdd", applyTagsPostRequestBody.tagsToAdd, serializeEdiscoveryReviewTag);
        writer.writeCollectionOfObjectValues<EdiscoveryReviewTag>("tagsToRemove", applyTagsPostRequestBody.tagsToRemove, serializeEdiscoveryReviewTag);
        writer.writeAdditionalData(applyTagsPostRequestBody.additionalData);
}
