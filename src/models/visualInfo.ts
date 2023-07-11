import {ImageInfo} from './imageInfo';
import {Json} from './json';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface VisualInfo extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * Optional. JSON object used to represent an icon which represents the application used to generate the activity
     */
    attribution?: ImageInfo | undefined;
    /**
     * Optional. Background color used to render the activity in the UI - brand color for the application source of the activity. Must be a valid hex color
     */
    backgroundColor?: string | undefined;
    /**
     * Optional. Custom piece of data - JSON object used to provide custom content to render the activity in the Windows Shell UI
     */
    content?: Json | undefined;
    /**
     * Optional. Longer text description of the user's unique activity (example: document name, first sentence, and/or metadata)
     */
    description?: string | undefined;
    /**
     * Required. Short text description of the user's unique activity (for example, document name in cases where an activity refers to document creation)
     */
    displayText?: string | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
}
