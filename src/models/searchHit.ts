import {Entity} from './entity';

export interface SearchHit{
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?:Record<string, unknown>;
    /** The name of the content source which the externalItem is part of . */
    contentSource?:string | undefined;
    /** The internal identifier for the item. */
    hitId?:string | undefined;
    /** The rank or the order of the result. */
    rank?:number | undefined;
    /** The resource property */
    resource?:Entity | undefined;
    /** ID of the result template for rendering the search result. This ID must map to a display layout in the resultTemplates dictionary, included in the searchresponse as well. */
    resultTemplateId?:string | undefined;
    /** A summary of the result, if a summary is available. */
    summary?:string | undefined;
}
