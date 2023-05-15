import {DateTimeTimeZone} from './dateTimeTimeZone';
import {LocaleInfo} from './localeInfo';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface AutomaticRepliesMailTips extends AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The automatic reply message. */
    message?: string | undefined;
    /** The language that the automatic reply message is in. */
    messageLanguage?: LocaleInfo | undefined;
    /** The OdataType property */
    odataType?: string | undefined;
    /** The date and time that automatic replies are set to end. */
    scheduledEndTime?: DateTimeTimeZone | undefined;
    /** The date and time that automatic replies are set to begin. */
    scheduledStartTime?: DateTimeTimeZone | undefined;
}
