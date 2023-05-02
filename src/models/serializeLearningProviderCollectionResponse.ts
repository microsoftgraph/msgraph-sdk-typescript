import {LearningProvider} from './learningProvider';
import {LearningProviderCollectionResponse} from './learningProviderCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeLearningProvider} from './serializeLearningProvider';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeLearningProviderCollectionResponse(writer: SerializationWriter, learningProviderCollectionResponse: LearningProviderCollectionResponse | undefined = {} as LearningProviderCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, learningProviderCollectionResponse)
        writer.writeCollectionOfObjectValues<LearningProvider>("value", learningProviderCollectionResponse.value, serializeLearningProvider);
}
