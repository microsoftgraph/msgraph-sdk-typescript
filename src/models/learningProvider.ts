import {Entity} from './entity';
import {LearningContent} from './learningContent';
import {LearningCourseActivity} from './learningCourseActivity';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface LearningProvider extends Entity, Parsable {
    /**
     * The display name that appears in Viva Learning. Required.
     */
    displayName?: string | undefined;
    /**
     * Indicates whether a provider can ingest learning course activity records. The default value is false. Set to true to make learningCourseActivities available for this provider.
     */
    isCourseActivitySyncEnabled?: boolean | undefined;
    /**
     * Learning catalog items for the provider.
     */
    learningContents?: LearningContent[] | undefined;
    /**
     * The learningCourseActivities property
     */
    learningCourseActivities?: LearningCourseActivity[] | undefined;
    /**
     * Authentication URL to access the courses for the provider. Optional.
     */
    loginWebUrl?: string | undefined;
    /**
     * The long logo URL for the dark mode that needs to be a publicly accessible image. This image would be saved to the blob storage of Viva Learning for rendering within the Viva Learning app. Required.
     */
    longLogoWebUrlForDarkTheme?: string | undefined;
    /**
     * The long logo URL for the light mode that needs to be a publicly accessible image. This image would be saved to the blob storage of Viva Learning for rendering within the Viva Learning app. Required.
     */
    longLogoWebUrlForLightTheme?: string | undefined;
    /**
     * The square logo URL for the dark mode that needs to be a publicly accessible image. This image would be saved to the blob storage of Viva Learning for rendering within the Viva Learning app. Required.
     */
    squareLogoWebUrlForDarkTheme?: string | undefined;
    /**
     * The square logo URL for the light mode that needs to be a publicly accessible image. This image would be saved to the blob storage of Viva Learning for rendering within the Viva Learning app. Required.
     */
    squareLogoWebUrlForLightTheme?: string | undefined;
}
