import {BaseItemVersion} from './baseItemVersion';

export interface DriveItemVersion extends BaseItemVersion{
    /** The content property */
    content?:string | undefined;
    /** Indicates the size of the content stream for this version of the item. */
    size?:number | undefined;
}
