import {Entity} from './entity';

export interface ServiceAnnouncementAttachment extends Entity{
    /** The attachment content. */
    content?:string | undefined;
    /** The contentType property */
    contentType?:string | undefined;
    /** The lastModifiedDateTime property */
    lastModifiedDateTime?:Date | undefined;
    /** The name property */
    name?:string | undefined;
    /** The size property */
    size?:number | undefined;
}
