import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface BroadcastMeetingCaptionSettings extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * Indicates whether captions are enabled for this Teams live event.
     */
    isCaptionEnabled?: boolean | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * The spoken language.
     */
    spokenLanguage?: string | undefined;
    /**
     * The translation languages (choose up to 6).
     */
    translationLanguages?: string[] | undefined;
}
