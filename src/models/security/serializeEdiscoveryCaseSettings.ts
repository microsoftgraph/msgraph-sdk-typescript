import { serializeEntity } from '../serializeEntity';
import { type EdiscoveryCaseSettings } from './ediscoveryCaseSettings';
import { type OcrSettings } from './ocrSettings';
import { type RedundancyDetectionSettings } from './redundancyDetectionSettings';
import { serializeOcrSettings } from './serializeOcrSettings';
import { serializeRedundancyDetectionSettings } from './serializeRedundancyDetectionSettings';
import { serializeTopicModelingSettings } from './serializeTopicModelingSettings';
import { type TopicModelingSettings } from './topicModelingSettings';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeEdiscoveryCaseSettings(writer: SerializationWriter, ediscoveryCaseSettings: EdiscoveryCaseSettings | undefined = {} as EdiscoveryCaseSettings) : void {
        serializeEntity(writer, ediscoveryCaseSettings)
        writer.writeObjectValue<OcrSettings>("ocr", ediscoveryCaseSettings.ocr, serializeOcrSettings);
        writer.writeObjectValue<RedundancyDetectionSettings>("redundancyDetection", ediscoveryCaseSettings.redundancyDetection, serializeRedundancyDetectionSettings);
        writer.writeObjectValue<TopicModelingSettings>("topicModeling", ediscoveryCaseSettings.topicModeling, serializeTopicModelingSettings);
}
