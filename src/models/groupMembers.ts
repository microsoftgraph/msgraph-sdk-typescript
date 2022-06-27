import {SubjectSet} from './subjectSet';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface GroupMembers extends Partial<AdditionalDataHolder>, Partial<Parsable>, SubjectSet {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The name of the group in Azure AD. Read only. */
    description?: string | undefined;
    /** The ID of the group in Azure AD. */
    groupId?: string | undefined;
}
