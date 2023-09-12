import { type LearningProvider } from './learningProvider';
import { type LearningProviderCollectionResponse } from './learningProviderCollectionResponse';
import { serializeBaseCollectionPaginationCountResponse } from './serializeBaseCollectionPaginationCountResponse';
import { serializeLearningProvider } from './serializeLearningProvider';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeLearningProviderCollectionResponse(writer: SerializationWriter, learningProviderCollectionResponse: LearningProviderCollectionResponse | undefined = {} as LearningProviderCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, learningProviderCollectionResponse)
        writer.writeCollectionOfObjectValues<LearningProvider>("value", learningProviderCollectionResponse.value, serializeLearningProvider);
}
