import {createLearningContentFromDiscriminatorValue} from './createLearningContentFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import type {LearningContent} from './learningContent';
import type {LearningContentCollectionResponse} from './learningContentCollectionResponse';
import {serializeLearningContent} from './serializeLearningContent';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoLearningContentCollectionResponse(learningContentCollectionResponse: LearningContentCollectionResponse | undefined = {} as LearningContentCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(learningContentCollectionResponse),
        "value": n => { learningContentCollectionResponse.value = n.getCollectionOfObjectValues<LearningContent>(createLearningContentFromDiscriminatorValue); },
    }
}
