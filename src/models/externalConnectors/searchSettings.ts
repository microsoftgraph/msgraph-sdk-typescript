import { type DisplayTemplate } from './displayTemplate';
import { type AdditionalDataHolder, type Parsable } from '@microsoft/kiota-abstractions';

export interface SearchSettings extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * Enables the developer to define the appearance of the content and configure conditions that dictate when the template should be displayed. Maximum of 2 search result templates per connection.
     */
    searchResultTemplates?: DisplayTemplate[] | undefined;
}
