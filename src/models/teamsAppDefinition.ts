import {Entity} from './entity';
import {IdentitySet} from './identitySet';
import {TeamsAppAuthorization} from './teamsAppAuthorization';
import {TeamsAppPublishingState} from './teamsAppPublishingState';
import {TeamworkBot} from './teamworkBot';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface TeamsAppDefinition extends Entity, Parsable {
    /**
     * Authorization requirements specified in the Teams app manifest.
     */
    authorization?: TeamsAppAuthorization | undefined;
    /**
     * The details of the bot specified in the Teams app manifest.
     */
    bot?: TeamworkBot | undefined;
    /**
     * The createdBy property
     */
    createdBy?: IdentitySet | undefined;
    /**
     * Verbose description of the application.
     */
    description?: string | undefined;
    /**
     * The name of the app provided by the app developer.
     */
    displayName?: string | undefined;
    /**
     * The lastModifiedDateTime property
     */
    lastModifiedDateTime?: Date | undefined;
    /**
     * The published status of a specific version of a Teams app. Possible values are:submitted — The specific version of the Teams app has been submitted and is under review. published  — The request to publish the specific version of the Teams app has been approved by the admin and the app is published.  rejected — The request to publish the specific version of the Teams app was rejected by the admin.
     */
    publishingState?: TeamsAppPublishingState | undefined;
    /**
     * Short description of the application.
     */
    shortDescription?: string | undefined;
    /**
     * The ID from the Teams app manifest.
     */
    teamsAppId?: string | undefined;
    /**
     * The version number of the application.
     */
    version?: string | undefined;
}
