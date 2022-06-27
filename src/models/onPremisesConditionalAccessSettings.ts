import {Entity} from './entity';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface OnPremisesConditionalAccessSettings extends Partial<AdditionalDataHolder>, Entity, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Indicates if on premises conditional access is enabled for this organization */
    enabled?: boolean | undefined;
    /** User groups that will be exempt by on premises conditional access. All users in these groups will be exempt from the conditional access policy. */
    excludedGroups?: string[] | undefined;
    /** User groups that will be targeted by on premises conditional access. All users in these groups will be required to have mobile device managed and compliant for mail access. */
    includedGroups?: string[] | undefined;
    /** Override the default access rule when allowing a device to ensure access is granted. */
    overrideDefaultRule?: boolean | undefined;
}
