import {ActionResultPart} from './actionResultPart';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface AadUserConversationMemberResult extends ActionResultPart, Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The user object ID of the Azure AD user that was being added as part of the bulk operation. */
    userId?: string | undefined;
}
