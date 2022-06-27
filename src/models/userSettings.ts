import {Entity} from './entity';
import {ShiftPreferences} from './shiftPreferences';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface UserSettings extends Partial<AdditionalDataHolder>, Entity, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Reflects the Office Delve organization level setting. When set to true, the organization doesn't have access to Office Delve. This setting is read-only and can only be changed by administrators in the SharePoint admin center. */
    contributionToContentDiscoveryAsOrganizationDisabled?: boolean | undefined;
    /** When set to true, documents in the user's Office Delve are disabled. Users can control this setting in Office Delve. */
    contributionToContentDiscoveryDisabled?: boolean | undefined;
    /** The shift preferences for the user. */
    shiftPreferences?: ShiftPreferences | undefined;
}
