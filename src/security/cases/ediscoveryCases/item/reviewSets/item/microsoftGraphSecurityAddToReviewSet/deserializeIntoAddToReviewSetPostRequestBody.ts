import { AdditionalDataOptions } from '../../../../../../../models/security/additionalDataOptions';
import { createEdiscoverySearchFromDiscriminatorValue } from '../../../../../../../models/security/createEdiscoverySearchFromDiscriminatorValue';
import { type EdiscoverySearch } from '../../../../../../../models/security/ediscoverySearch';
import { serializeEdiscoverySearch } from '../../../../../../../models/security/serializeEdiscoverySearch';
import { type AddToReviewSetPostRequestBody } from './addToReviewSetPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoAddToReviewSetPostRequestBody(addToReviewSetPostRequestBody: AddToReviewSetPostRequestBody | undefined = {} as AddToReviewSetPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "additionalDataOptions": n => { addToReviewSetPostRequestBody.additionalDataOptions = n.getCollectionOfEnumValues<AdditionalDataOptions>(AdditionalDataOptions); },
        "search": n => { addToReviewSetPostRequestBody.search = n.getObjectValue<EdiscoverySearch>(createEdiscoverySearchFromDiscriminatorValue); },
    }
}
