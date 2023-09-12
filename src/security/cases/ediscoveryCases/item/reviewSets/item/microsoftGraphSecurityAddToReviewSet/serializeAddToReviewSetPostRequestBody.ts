import { AdditionalDataOptions } from '../../../../../../../models/security/additionalDataOptions';
import { type EdiscoverySearch } from '../../../../../../../models/security/ediscoverySearch';
import { serializeEdiscoverySearch } from '../../../../../../../models/security/serializeEdiscoverySearch';
import { type AddToReviewSetPostRequestBody } from './addToReviewSetPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeAddToReviewSetPostRequestBody(writer: SerializationWriter, addToReviewSetPostRequestBody: AddToReviewSetPostRequestBody | undefined = {} as AddToReviewSetPostRequestBody) : void {
        writer.writeEnumValue<AdditionalDataOptions[]>("additionalDataOptions", addToReviewSetPostRequestBody.additionalDataOptions);
        writer.writeObjectValue<EdiscoverySearch>("search", addToReviewSetPostRequestBody.search, serializeEdiscoverySearch);
        writer.writeAdditionalData(addToReviewSetPostRequestBody.additionalData);
}
