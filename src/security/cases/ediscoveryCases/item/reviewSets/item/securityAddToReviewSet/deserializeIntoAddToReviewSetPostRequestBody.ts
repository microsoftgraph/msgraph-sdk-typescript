import {AdditionalDataOptions} from '../../../../../../../models/security/additionalDataOptions';
import {createEdiscoverySearchFromDiscriminatorValue} from '../../../../../../../models/security/createEdiscoverySearchFromDiscriminatorValue';
import {EdiscoverySearch} from '../../../../../../../models/security/ediscoverySearch';
import {serializeEdiscoverySearch} from '../../../../../../../models/security/serializeEdiscoverySearch';
import {AddToReviewSetPostRequestBody} from './addToReviewSetPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAddToReviewSetPostRequestBody(addToReviewSetPostRequestBody: AddToReviewSetPostRequestBody | undefined = {} as AddToReviewSetPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "additionalDataOptions": n => { addToReviewSetPostRequestBody.additionalDataOptions = n.getEnumValue<AdditionalDataOptions>(AdditionalDataOptions); },
        "search": n => { addToReviewSetPostRequestBody.search = n.getObjectValue<EdiscoverySearch>(createEdiscoverySearchFromDiscriminatorValue); },
    }
}
