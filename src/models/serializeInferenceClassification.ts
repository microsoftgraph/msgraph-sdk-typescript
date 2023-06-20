import {InferenceClassification} from './inferenceClassification';
import {InferenceClassificationOverride} from './inferenceClassificationOverride';
import {serializeEntity} from './serializeEntity';
import {serializeInferenceClassificationOverride} from './serializeInferenceClassificationOverride';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeInferenceClassification(inferenceClassification: InferenceClassification | undefined = {} as InferenceClassification, writer: SerializationWriter) : void {
        serializeEntity(writer, inferenceClassification)
        writer.writeCollectionOfObjectValues<InferenceClassificationOverride>("overrides", inferenceClassification.overrides, serializeInferenceClassificationOverride);
}
