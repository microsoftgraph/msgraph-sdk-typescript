import {deserializeIntoEntity} from '../deserializeIntoEntity';
import {createOcrSettingsFromDiscriminatorValue} from './createOcrSettingsFromDiscriminatorValue';
import {createRedundancyDetectionSettingsFromDiscriminatorValue} from './createRedundancyDetectionSettingsFromDiscriminatorValue';
import {createTopicModelingSettingsFromDiscriminatorValue} from './createTopicModelingSettingsFromDiscriminatorValue';
import type {EdiscoveryCaseSettings} from './ediscoveryCaseSettings';
import type {OcrSettings} from './ocrSettings';
import type {RedundancyDetectionSettings} from './redundancyDetectionSettings';
import {serializeOcrSettings} from './serializeOcrSettings';
import {serializeRedundancyDetectionSettings} from './serializeRedundancyDetectionSettings';
import {serializeTopicModelingSettings} from './serializeTopicModelingSettings';
import type {TopicModelingSettings} from './topicModelingSettings';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoEdiscoveryCaseSettings(ediscoveryCaseSettings: EdiscoveryCaseSettings | undefined = {} as EdiscoveryCaseSettings) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(ediscoveryCaseSettings),
        "ocr": n => { ediscoveryCaseSettings.ocr = n.getObjectValue<OcrSettings>(createOcrSettingsFromDiscriminatorValue); },
        "redundancyDetection": n => { ediscoveryCaseSettings.redundancyDetection = n.getObjectValue<RedundancyDetectionSettings>(createRedundancyDetectionSettingsFromDiscriminatorValue); },
        "topicModeling": n => { ediscoveryCaseSettings.topicModeling = n.getObjectValue<TopicModelingSettings>(createTopicModelingSettingsFromDiscriminatorValue); },
    }
}
