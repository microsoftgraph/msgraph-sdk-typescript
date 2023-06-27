import {ChatMessagePolicyViolationDlpActionTypes} from './chatMessagePolicyViolationDlpActionTypes';
import {ChatMessagePolicyViolationPolicyTip} from './chatMessagePolicyViolationPolicyTip';
import {ChatMessagePolicyViolationUserActionTypes} from './chatMessagePolicyViolationUserActionTypes';
import {ChatMessagePolicyViolationVerdictDetailsTypes} from './chatMessagePolicyViolationVerdictDetailsTypes';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface ChatMessagePolicyViolation extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The action taken by the DLP provider on the message with sensitive content. Supported values are: NoneNotifySender -- Inform the sender of the violation but allow readers to read the message.BlockAccess -- Block readers from reading the message.BlockAccessExternal -- Block users outside the organization from reading the message, while allowing users within the organization to read the message.
     */
    dlpAction?: ChatMessagePolicyViolationDlpActionTypes | undefined;
    /**
     * Justification text provided by the sender of the message when overriding a policy violation.
     */
    justificationText?: string | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * Information to display to the message sender about why the message was flagged as a violation.
     */
    policyTip?: ChatMessagePolicyViolationPolicyTip | undefined;
    /**
     * Indicates the action taken by the user on a message blocked by the DLP provider. Supported values are: NoneOverrideReportFalsePositiveWhen the DLP provider is updating the message for blocking sensitive content, userAction is not required.
     */
    userAction?: ChatMessagePolicyViolationUserActionTypes | undefined;
    /**
     * Indicates what actions the sender may take in response to the policy violation. Supported values are: NoneAllowFalsePositiveOverride -- Allows the sender to declare the policyViolation to be an error in the DLP app and its rules, and allow readers to see the message again if the dlpAction had hidden it.AllowOverrideWithoutJustification -- Allows the sender to overriide the DLP violation and allow readers to see the message again if the dlpAction had hidden it, without needing to provide an explanation for doing so. AllowOverrideWithJustification -- Allows the sender to overriide the DLP violation and allow readers to see the message again if the dlpAction had hidden it, after providing an explanation for doing so.AllowOverrideWithoutJustification and AllowOverrideWithJustification are mutually exclusive.
     */
    verdictDetails?: ChatMessagePolicyViolationVerdictDetailsTypes | undefined;
}
