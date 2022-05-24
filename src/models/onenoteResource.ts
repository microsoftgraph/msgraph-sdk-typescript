import {OnenoteEntityBaseModel} from './onenoteEntityBaseModel';

export interface OnenoteResource extends OnenoteEntityBaseModel{
    /** The content stream */
    content?:string | undefined;
    /** The URL for downloading the content */
    contentUrl?:string | undefined;
}
