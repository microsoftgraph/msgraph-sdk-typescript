import {Entity} from './entity';
import {UserFlowLanguagePage} from './userFlowLanguagePage';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface UserFlowLanguageConfiguration extends Partial<AdditionalDataHolder>, Entity, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Collection of pages with the default content to display in a user flow for a specified language. This collection does not allow any kind of modification. */
    defaultPages?: UserFlowLanguagePage[] | undefined;
    /** The language name to display. This property is read-only. */
    displayName?: string | undefined;
    /** Indicates whether the language is enabled within the user flow. */
    isEnabled?: boolean | undefined;
    /** Collection of pages with the overrides messages to display in a user flow for a specified language. This collection only allows to modify the content of the page, any other modification is not allowed (creation or deletion of pages). */
    overridesPages?: UserFlowLanguagePage[] | undefined;
}
