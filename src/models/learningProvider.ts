import {Entity} from './entity';
import {LearningContent} from './learningContent';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface LearningProvider extends Entity, Parsable {
    /** The display name that appears in Viva Learning. Required. */
    displayName?: string | undefined;
    /** Learning catalog items for the provider. */
    learningContents?: LearningContent[] | undefined;
    /** Authentication URL to access the courses for the provider. Optional. */
    loginWebUrl?: string | undefined;
    /** The long logo URL for the dark mode that needs to be a publicly accessible image. This image would be saved to the blob storage of Viva Learning for rendering within the Viva Learning app. Required. */
    longLogoWebUrlForDarkTheme?: string | undefined;
    /** The long logo URL for the light mode that needs to be a publicly accessible image. This image would be saved to the blob storage of Viva Learning for rendering within the Viva Learning app. Required. */
    longLogoWebUrlForLightTheme?: string | undefined;
    /** The square logo URL for the dark mode that needs to be a publicly accessible image. This image would be saved to the blob storage of Viva Learning for rendering within the Viva Learning app. Required. */
    squareLogoWebUrlForDarkTheme?: string | undefined;
    /** The square logo URL for the light mode that needs to be a publicly accessible image. This image would be saved to the blob storage of Viva Learning for rendering within the Viva Learning app. Required. */
    squareLogoWebUrlForLightTheme?: string | undefined;
}
