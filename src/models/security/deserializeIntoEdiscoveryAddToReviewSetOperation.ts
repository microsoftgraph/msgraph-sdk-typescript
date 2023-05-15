import {createEdiscoveryReviewSetFromDiscriminatorValue} from './createEdiscoveryReviewSetFromDiscriminatorValue';
import {createEdiscoverySearchFromDiscriminatorValue} from './createEdiscoverySearchFromDiscriminatorValue';
import {deserializeIntoCaseOperation} from './deserializeIntoCaseOperation';
import {EdiscoveryAddToReviewSetOperation} from './ediscoveryAddToReviewSetOperation';
import {EdiscoveryReviewSet} from './ediscoveryReviewSet';
import {EdiscoverySearch} from './ediscoverySearch';
import {serializeEdiscoveryReviewSet} from './serializeEdiscoveryReviewSet';
import {serializeEdiscoverySearch} from './serializeEdiscoverySearch';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoEdiscoveryAddToReviewSetOperation(ediscoveryAddToReviewSetOperation: EdiscoveryAddToReviewSetOperation | undefined = {} as EdiscoveryAddToReviewSetOperation) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoCaseOperation(ediscoveryAddToReviewSetOperation),
        "reviewSet": n => { ediscoveryAddToReviewSetOperation.reviewSet = n.getObjectValue<EdiscoveryReviewSet>(createEdiscoveryReviewSetFromDiscriminatorValue); },
        "search": n => { ediscoveryAddToReviewSetOperation.search = n.getObjectValue<EdiscoverySearch>(createEdiscoverySearchFromDiscriminatorValue); },
    }
}
