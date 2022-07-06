import {Entity} from '../';
import {createOcrSettingsFromDiscriminatorValue} from './createOcrSettingsFromDiscriminatorValue';
import {createRedundancyDetectionSettingsFromDiscriminatorValue} from './createRedundancyDetectionSettingsFromDiscriminatorValue';
import {createTopicModelingSettingsFromDiscriminatorValue} from './createTopicModelingSettingsFromDiscriminatorValue';
import {OcrSettings, RedundancyDetectionSettings, TopicModelingSettings} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the collection of agreement entities. */
export class EdiscoveryCaseSettings extends Entity implements Parsable {
    /** The OCR (Optical Character Recognition) settings for the case. */
    private _ocr?: OcrSettings | undefined;
    /** The redundancy (near duplicate and email threading) detection settings for the case. */
    private _redundancyDetection?: RedundancyDetectionSettings | undefined;
    /** The Topic Modeling (Themes) settings for the case. */
    private _topicModeling?: TopicModelingSettings | undefined;
    /**
     * Instantiates a new ediscoveryCaseSettings and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "ocr": n => { this.ocr = n.getObjectValue<OcrSettings>(createOcrSettingsFromDiscriminatorValue); },
            "redundancyDetection": n => { this.redundancyDetection = n.getObjectValue<RedundancyDetectionSettings>(createRedundancyDetectionSettingsFromDiscriminatorValue); },
            "topicModeling": n => { this.topicModeling = n.getObjectValue<TopicModelingSettings>(createTopicModelingSettingsFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the ocr property value. The OCR (Optical Character Recognition) settings for the case.
     * @returns a ocrSettings
     */
    public get ocr() {
        return this._ocr;
    };
    /**
     * Sets the ocr property value. The OCR (Optical Character Recognition) settings for the case.
     * @param value Value to set for the ocr property.
     */
    public set ocr(value: OcrSettings | undefined) {
        this._ocr = value;
    };
    /**
     * Gets the redundancyDetection property value. The redundancy (near duplicate and email threading) detection settings for the case.
     * @returns a redundancyDetectionSettings
     */
    public get redundancyDetection() {
        return this._redundancyDetection;
    };
    /**
     * Sets the redundancyDetection property value. The redundancy (near duplicate and email threading) detection settings for the case.
     * @param value Value to set for the redundancyDetection property.
     */
    public set redundancyDetection(value: RedundancyDetectionSettings | undefined) {
        this._redundancyDetection = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeObjectValue<OcrSettings>("ocr", this.ocr);
        writer.writeObjectValue<RedundancyDetectionSettings>("redundancyDetection", this.redundancyDetection);
        writer.writeObjectValue<TopicModelingSettings>("topicModeling", this.topicModeling);
    };
    /**
     * Gets the topicModeling property value. The Topic Modeling (Themes) settings for the case.
     * @returns a topicModelingSettings
     */
    public get topicModeling() {
        return this._topicModeling;
    };
    /**
     * Sets the topicModeling property value. The Topic Modeling (Themes) settings for the case.
     * @param value Value to set for the topicModeling property.
     */
    public set topicModeling(value: TopicModelingSettings | undefined) {
        this._topicModeling = value;
    };
}
