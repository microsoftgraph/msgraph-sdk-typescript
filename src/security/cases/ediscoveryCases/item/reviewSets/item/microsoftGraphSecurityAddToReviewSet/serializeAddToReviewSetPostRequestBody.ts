import {AdditionalDataOptions} from '../../../../../../../models/security/additionalDataOptions';
import {EdiscoverySearch} from '../../../../../../../models/security/ediscoverySearch';
import {serializeEdiscoverySearch} from '../../../../../../../models/security/serializeEdiscoverySearch';
import {AddToReviewSetPostRequestBody} from './addToReviewSetPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAddToReviewSetPostRequestBody(writer: SerializationWriter, addToReviewSetPostRequestBody: AddToReviewSetPostRequestBody | undefined = {} as AddToReviewSetPostRequestBody) : void {
        writer.writeEnumValue<AdditionalDataOptions>("additionalDataOptions", addToReviewSetPostRequestBody.additionalDataOptions);
        writer.writeObjectValue<EdiscoverySearch>("search", addToReviewSetPostRequestBody.search, serializeEdiscoverySearch);
        writer.writeAdditionalData(addToReviewSetPostRequestBody.additionalData);
}
