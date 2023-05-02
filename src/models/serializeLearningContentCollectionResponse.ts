import {LearningContent} from './learningContent';
import {LearningContentCollectionResponse} from './learningContentCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeLearningContent} from './serializeLearningContent';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeLearningContentCollectionResponse(writer: SerializationWriter, learningContentCollectionResponse: LearningContentCollectionResponse | undefined = {} as LearningContentCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, learningContentCollectionResponse)
        writer.writeCollectionOfObjectValues<LearningContent>("value", learningContentCollectionResponse.value, serializeLearningContent);
}
