import {Entity} from './entity';

export interface OnenoteEntityBaseModel extends Entity{
    /** The endpoint where you can get details about the page. Read-only. */
    self?:string | undefined;
}
