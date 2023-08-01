import type {Entity} from '../entity';
import type {OcrSettings} from './ocrSettings';
import type {RedundancyDetectionSettings} from './redundancyDetectionSettings';
import type {TopicModelingSettings} from './topicModelingSettings';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface EdiscoveryCaseSettings extends Entity, Parsable {
    /**
     * The OCR (Optical Character Recognition) settings for the case.
     */
    ocr?: OcrSettings | undefined;
    /**
     * The redundancy (near duplicate and email threading) detection settings for the case.
     */
    redundancyDetection?: RedundancyDetectionSettings | undefined;
    /**
     * The Topic Modeling (Themes) settings for the case.
     */
    topicModeling?: TopicModelingSettings | undefined;
}
