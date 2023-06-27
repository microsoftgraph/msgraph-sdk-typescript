import {Entity} from './entity';
import {ShiftPreferences} from './shiftPreferences';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface UserSettings extends Entity, Parsable {
    /**
     * Reflects the organization level setting controlling delegate access to the trending API. When set to true, the organization doesn't have access to Office Delve. The relevancy of the content displayed in Microsoft 365, for example in Suggested sites in SharePoint Home and the Discover view in OneDrive for Business is affected for the whole organization. This setting is read-only and can only be changed by administrators in the SharePoint admin center.
     */
    contributionToContentDiscoveryAsOrganizationDisabled?: boolean | undefined;
    /**
     * When set to true, the delegate access to the user's trending API is disabled. When set to true, documents in the user's Office Delve are disabled. When set to true, the relevancy of the content displayed in Microsoft 365, for example in Suggested sites in SharePoint Home and the Discover view in OneDrive for Business is affected. Users can control this setting in Office Delve.
     */
    contributionToContentDiscoveryDisabled?: boolean | undefined;
    /**
     * The shiftPreferences property
     */
    shiftPreferences?: ShiftPreferences | undefined;
}
