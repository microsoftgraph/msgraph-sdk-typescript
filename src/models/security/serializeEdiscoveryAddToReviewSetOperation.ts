import type {EdiscoveryAddToReviewSetOperation} from './ediscoveryAddToReviewSetOperation';
import type {EdiscoveryReviewSet} from './ediscoveryReviewSet';
import type {EdiscoverySearch} from './ediscoverySearch';
import {serializeCaseOperation} from './serializeCaseOperation';
import {serializeEdiscoveryReviewSet} from './serializeEdiscoveryReviewSet';
import {serializeEdiscoverySearch} from './serializeEdiscoverySearch';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeEdiscoveryAddToReviewSetOperation(writer: SerializationWriter, ediscoveryAddToReviewSetOperation: EdiscoveryAddToReviewSetOperation | undefined = {} as EdiscoveryAddToReviewSetOperation) : void {
        serializeCaseOperation(writer, ediscoveryAddToReviewSetOperation)
        writer.writeObjectValue<EdiscoveryReviewSet>("reviewSet", ediscoveryAddToReviewSetOperation.reviewSet, serializeEdiscoveryReviewSet);
        writer.writeObjectValue<EdiscoverySearch>("search", ediscoveryAddToReviewSetOperation.search, serializeEdiscoverySearch);
}
