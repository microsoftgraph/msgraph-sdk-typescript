import {createLearningProviderFromDiscriminatorValue} from './createLearningProviderFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import type {LearningProvider} from './learningProvider';
import type {LearningProviderCollectionResponse} from './learningProviderCollectionResponse';
import {serializeLearningProvider} from './serializeLearningProvider';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoLearningProviderCollectionResponse(learningProviderCollectionResponse: LearningProviderCollectionResponse | undefined = {} as LearningProviderCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(learningProviderCollectionResponse),
        "value": n => { learningProviderCollectionResponse.value = n.getCollectionOfObjectValues<LearningProvider>(createLearningProviderFromDiscriminatorValue); },
    }
}
