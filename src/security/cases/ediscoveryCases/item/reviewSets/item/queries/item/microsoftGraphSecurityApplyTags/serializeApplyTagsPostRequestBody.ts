import {EdiscoveryReviewTag} from '../../../../../../../../../models/security/ediscoveryReviewTag';
import {serializeEdiscoveryReviewTag} from '../../../../../../../../../models/security/serializeEdiscoveryReviewTag';
import {ApplyTagsPostRequestBody} from './applyTagsPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeApplyTagsPostRequestBody(applyTagsPostRequestBody: ApplyTagsPostRequestBody | undefined = {} as ApplyTagsPostRequestBody, writer: SerializationWriter) : void {
        writer.writeCollectionOfObjectValues<EdiscoveryReviewTag>("tagsToAdd", applyTagsPostRequestBody.tagsToAdd, serializeEdiscoveryReviewTag);
        writer.writeCollectionOfObjectValues<EdiscoveryReviewTag>("tagsToRemove", applyTagsPostRequestBody.tagsToRemove, serializeEdiscoveryReviewTag);
        writer.writeAdditionalData(applyTagsPostRequestBody.additionalData);
}
