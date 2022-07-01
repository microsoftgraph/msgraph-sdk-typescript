import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface ResultTemplateOption extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown> | undefined;
    /** Indicates whether search display layouts are enabled. If enabled, the user will get the result template to render the search results content in the resultTemplates property of the response. The result template is based on Adaptive Cards. This property is optional. */
    enableResultTemplate?: boolean | undefined;
}
