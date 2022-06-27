import {OnenoteEntityBaseModel} from './onenoteEntityBaseModel';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface OnenoteResource extends OnenoteEntityBaseModel, Partial<Parsable> {
    /** The content stream */
    content?: string | undefined;
    /** The URL for downloading the content */
    contentUrl?: string | undefined;
}
