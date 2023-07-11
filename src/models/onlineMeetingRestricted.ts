import {OnlineMeetingContentSharingDisabledReason} from './onlineMeetingContentSharingDisabledReason';
import {OnlineMeetingVideoDisabledReason} from './onlineMeetingVideoDisabledReason';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface OnlineMeetingRestricted extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * Specifies the reason shared content from this participant is disabled. Possible values are: watermarkProtection, unknownFutureValue.
     */
    contentSharingDisabled?: OnlineMeetingContentSharingDisabledReason | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * Specifies the reason video from this participant is disabled. Possible values are: watermarkProtection, unknownFutureValue.
     */
    videoDisabled?: OnlineMeetingVideoDisabledReason | undefined;
}
