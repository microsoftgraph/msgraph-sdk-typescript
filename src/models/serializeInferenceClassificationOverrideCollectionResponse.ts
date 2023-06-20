import {InferenceClassificationOverride} from './inferenceClassificationOverride';
import {InferenceClassificationOverrideCollectionResponse} from './inferenceClassificationOverrideCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeInferenceClassificationOverride} from './serializeInferenceClassificationOverride';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeInferenceClassificationOverrideCollectionResponse(inferenceClassificationOverrideCollectionResponse: InferenceClassificationOverrideCollectionResponse | undefined = {} as InferenceClassificationOverrideCollectionResponse, writer: SerializationWriter) : void {
        serializeBaseCollectionPaginationCountResponse(writer, inferenceClassificationOverrideCollectionResponse)
        writer.writeCollectionOfObjectValues<InferenceClassificationOverride>("value", inferenceClassificationOverrideCollectionResponse.value, serializeInferenceClassificationOverride);
}
