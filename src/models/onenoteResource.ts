import type {OnenoteEntityBaseModel} from './onenoteEntityBaseModel';
import type {Parsable} from '@microsoft/kiota-abstractions';

export interface OnenoteResource extends OnenoteEntityBaseModel, Parsable {
    /**
     * The content stream
     */
    content?: string | undefined;
    /**
     * The URL for downloading the content
     */
    contentUrl?: string | undefined;
}
