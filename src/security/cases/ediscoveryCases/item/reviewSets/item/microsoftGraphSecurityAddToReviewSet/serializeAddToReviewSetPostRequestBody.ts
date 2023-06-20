import {AdditionalDataOptions} from '../../../../../../../models/security/additionalDataOptions';
import {EdiscoverySearch} from '../../../../../../../models/security/ediscoverySearch';
import {serializeEdiscoverySearch} from '../../../../../../../models/security/serializeEdiscoverySearch';
import {AddToReviewSetPostRequestBody} from './addToReviewSetPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAddToReviewSetPostRequestBody(addToReviewSetPostRequestBody: AddToReviewSetPostRequestBody | undefined = {} as AddToReviewSetPostRequestBody, writer: SerializationWriter) : void {
        writer.writeEnumValue<AdditionalDataOptions>("additionalDataOptions", addToReviewSetPostRequestBody.additionalDataOptions);
        writer.writeObjectValue<EdiscoverySearch>("search", addToReviewSetPostRequestBody.search, serializeEdiscoverySearch);
        writer.writeAdditionalData(addToReviewSetPostRequestBody.additionalData);
}
