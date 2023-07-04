import {EducationResource} from './educationResource';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface EducationTeamsAppResource extends EducationResource, Parsable {
    /**
     * URL that points to the icon of the app.
     */
    appIconWebUrl?: string | undefined;
    /**
     * Teams app ID of the application.
     */
    appId?: string | undefined;
    /**
     * URL for the app resource that will be opened by Teams.
     */
    teamsEmbeddedContentUrl?: string | undefined;
    /**
     * URL for the app resource that can be opened in the browser.
     */
    webUrl?: string | undefined;
}
