import {EdiscoveryAddToReviewSetOperation} from './ediscoveryAddToReviewSetOperation';
import {EdiscoveryReviewSet} from './ediscoveryReviewSet';
import {EdiscoverySearch} from './ediscoverySearch';
import {serializeCaseOperation} from './serializeCaseOperation';
import {serializeEdiscoveryReviewSet} from './serializeEdiscoveryReviewSet';
import {serializeEdiscoverySearch} from './serializeEdiscoverySearch';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeEdiscoveryAddToReviewSetOperation(writer: SerializationWriter, ediscoveryAddToReviewSetOperation: EdiscoveryAddToReviewSetOperation | undefined = {} as EdiscoveryAddToReviewSetOperation) : void {
        serializeCaseOperation(writer, ediscoveryAddToReviewSetOperation)
        writer.writeObjectValue<EdiscoveryReviewSet>("reviewSet", ediscoveryAddToReviewSetOperation.reviewSet, serializeEdiscoveryReviewSet);
        writer.writeObjectValue<EdiscoverySearch>("search", ediscoveryAddToReviewSetOperation.search, serializeEdiscoverySearch);
}
