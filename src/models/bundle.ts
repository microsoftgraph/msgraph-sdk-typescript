import {Album} from './album';

export interface Bundle{
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?:Record<string, unknown>;
    /** If the bundle is an [album][], then the album property is included */
    album?:Album | undefined;
    /** Number of children contained immediately within this container. */
    childCount?:number | undefined;
}
