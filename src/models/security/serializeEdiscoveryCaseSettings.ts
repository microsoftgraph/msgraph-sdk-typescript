import {serializeEntity} from '../serializeEntity';
import {EdiscoveryCaseSettings} from './ediscoveryCaseSettings';
import {OcrSettings} from './ocrSettings';
import {RedundancyDetectionSettings} from './redundancyDetectionSettings';
import {serializeOcrSettings} from './serializeOcrSettings';
import {serializeRedundancyDetectionSettings} from './serializeRedundancyDetectionSettings';
import {serializeTopicModelingSettings} from './serializeTopicModelingSettings';
import {TopicModelingSettings} from './topicModelingSettings';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeEdiscoveryCaseSettings(writer: SerializationWriter, ediscoveryCaseSettings: EdiscoveryCaseSettings | undefined = {} as EdiscoveryCaseSettings) : void {
        serializeEntity(writer, ediscoveryCaseSettings)
        writer.writeObjectValue<OcrSettings>("ocr", ediscoveryCaseSettings.ocr, serializeOcrSettings);
        writer.writeObjectValue<RedundancyDetectionSettings>("redundancyDetection", ediscoveryCaseSettings.redundancyDetection, serializeRedundancyDetectionSettings);
        writer.writeObjectValue<TopicModelingSettings>("topicModeling", ediscoveryCaseSettings.topicModeling, serializeTopicModelingSettings);
}
