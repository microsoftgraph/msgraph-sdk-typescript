import {Entity} from '../entity';
import {OcrSettings} from './ocrSettings';
import {RedundancyDetectionSettings} from './redundancyDetectionSettings';
import {TopicModelingSettings} from './topicModelingSettings';
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
