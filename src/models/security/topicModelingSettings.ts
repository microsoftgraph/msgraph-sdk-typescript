import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface TopicModelingSettings extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * Indicates whether the themes model should dynamically optimize the number of generated topics. To learn more, see Adjust maximum number of themes dynamically.
     */
    dynamicallyAdjustTopicCount?: boolean | undefined;
    /**
     * Indicates whether the themes model should exclude numbers while parsing document texts. To learn more, see Include numbers in themes.
     */
    ignoreNumbers?: boolean | undefined;
    /**
     * Indicates whether themes model is enabled for the case.
     */
    isEnabled?: boolean | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * The total number of topics that the themes model will generate for a review set. To learn more, see Maximum number of themes.
     */
    topicCount?: number | undefined;
}
