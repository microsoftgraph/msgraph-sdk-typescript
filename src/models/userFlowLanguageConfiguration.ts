import {Entity} from './entity';
import {UserFlowLanguagePage} from './userFlowLanguagePage';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface UserFlowLanguageConfiguration extends Entity, Parsable {
    /**
     * Collection of pages with the default content to display in a user flow for a specified language. This collection does not allow any kind of modification.
     */
    defaultPages?: UserFlowLanguagePage[] | undefined;
    /**
     * The language name to display. This property is read-only.
     */
    displayName?: string | undefined;
    /**
     * Indicates whether the language is enabled within the user flow.
     */
    isEnabled?: boolean | undefined;
    /**
     * Collection of pages with the overrides messages to display in a user flow for a specified language. This collection only allows to modify the content of the page, any other modification is not allowed (creation or deletion of pages).
     */
    overridesPages?: UserFlowLanguagePage[] | undefined;
}
