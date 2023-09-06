import { type InferenceClassificationOverride } from './inferenceClassificationOverride';
import { type InferenceClassificationOverrideCollectionResponse } from './inferenceClassificationOverrideCollectionResponse';
import { serializeBaseCollectionPaginationCountResponse } from './serializeBaseCollectionPaginationCountResponse';
import { serializeInferenceClassificationOverride } from './serializeInferenceClassificationOverride';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeInferenceClassificationOverrideCollectionResponse(writer: SerializationWriter, inferenceClassificationOverrideCollectionResponse: InferenceClassificationOverrideCollectionResponse | undefined = {} as InferenceClassificationOverrideCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, inferenceClassificationOverrideCollectionResponse)
        writer.writeCollectionOfObjectValues<InferenceClassificationOverride>("value", inferenceClassificationOverrideCollectionResponse.value, serializeInferenceClassificationOverride);
}
