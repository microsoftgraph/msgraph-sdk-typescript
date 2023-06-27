import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface ChatMessagePolicyViolationPolicyTip extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The URL a user can visit to read about the data loss prevention policies for the organization. (ie, policies about what users shouldn't say in chats)
     */
    complianceUrl?: string | undefined;
    /**
     * Explanatory text shown to the sender of the message.
     */
    generalText?: string | undefined;
    /**
     * The list of improper data in the message that was detected by the data loss prevention app. Each DLP app defines its own conditions, examples include 'Credit Card Number' and 'Social Security Number'.
     */
    matchedConditionDescriptions?: string[] | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
}
