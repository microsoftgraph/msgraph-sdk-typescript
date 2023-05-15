import {createEdiscoveryReviewSetQueryFromDiscriminatorValue} from './createEdiscoveryReviewSetQueryFromDiscriminatorValue';
import {deserializeIntoDataSet} from './deserializeIntoDataSet';
import {EdiscoveryReviewSet} from './ediscoveryReviewSet';
import {EdiscoveryReviewSetQuery} from './ediscoveryReviewSetQuery';
import {serializeEdiscoveryReviewSetQuery} from './serializeEdiscoveryReviewSetQuery';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoEdiscoveryReviewSet(ediscoveryReviewSet: EdiscoveryReviewSet | undefined = {} as EdiscoveryReviewSet) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoDataSet(ediscoveryReviewSet),
        "queries": n => { ediscoveryReviewSet.queries = n.getCollectionOfObjectValues<EdiscoveryReviewSetQuery>(createEdiscoveryReviewSetQueryFromDiscriminatorValue); },
    }
}
