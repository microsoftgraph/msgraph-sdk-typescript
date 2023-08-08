import type {LearningContent} from './learningContent';
import type {LearningContentCollectionResponse} from './learningContentCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeLearningContent} from './serializeLearningContent';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeLearningContentCollectionResponse(writer: SerializationWriter, learningContentCollectionResponse: LearningContentCollectionResponse | undefined = {} as LearningContentCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, learningContentCollectionResponse)
        writer.writeCollectionOfObjectValues<LearningContent>("value", learningContentCollectionResponse.value, serializeLearningContent);
}
