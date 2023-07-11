import {AlertEvidence} from './alertEvidence';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface OauthApplicationEvidence extends AlertEvidence, Parsable {
    /**
     * Unique identifier of the application.
     */
    appId?: string | undefined;
    /**
     * Name of the application.
     */
    displayName?: string | undefined;
    /**
     * The unique identifier of the application object in Azure AD.
     */
    objectId?: string | undefined;
    /**
     * The name of the application publisher.
     */
    publisher?: string | undefined;
}
