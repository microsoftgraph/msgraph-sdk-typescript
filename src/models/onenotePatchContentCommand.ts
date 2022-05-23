import {OnenotePatchActionType} from './onenotePatchActionType';
import {OnenotePatchInsertPosition} from './onenotePatchInsertPosition';

export interface OnenotePatchContentCommand{
    /** The action to perform on the target element. Possible values are: replace, append, delete, insert, or prepend. */
    action?:OnenotePatchActionType | undefined;
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?:Record<string, unknown>;
    /** A string of well-formed HTML to add to the page, and any image or file binary data. If the content contains binary data, the request must be sent using the multipart/form-data content type with a 'Commands' part. */
    content?:string | undefined;
    /** The location to add the supplied content, relative to the target element. Possible values are: after (default) or before. */
    position?:OnenotePatchInsertPosition | undefined;
    /** The element to update. Must be the #<data-id> or the generated {id} of the element, or the body or title keyword. */
    target?:string | undefined;
}
