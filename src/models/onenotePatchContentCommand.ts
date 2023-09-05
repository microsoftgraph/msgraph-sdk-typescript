import { OnenotePatchActionType } from './onenotePatchActionType';
import { OnenotePatchInsertPosition } from './onenotePatchInsertPosition';
import { type AdditionalDataHolder, type Parsable } from '@microsoft/kiota-abstractions';

export interface OnenotePatchContentCommand extends AdditionalDataHolder, Parsable {
    /**
     * The action property
     */
    action?: OnenotePatchActionType | undefined;
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * A string of well-formed HTML to add to the page, and any image or file binary data. If the content contains binary data, the request must be sent using the multipart/form-data content type with a 'Commands' part.
     */
    content?: string | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * The location to add the supplied content, relative to the target element. The possible values are: after (default) or before.
     */
    position?: OnenotePatchInsertPosition | undefined;
    /**
     * The element to update. Must be the #<data-id> or the generated <id> of the element, or the body or title keyword.
     */
    target?: string | undefined;
}
