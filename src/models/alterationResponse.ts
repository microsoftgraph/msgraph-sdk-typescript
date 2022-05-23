import {SearchAlteration} from './searchAlteration';
import {SearchAlterationType} from './searchAlterationType';

export interface AlterationResponse{
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?:Record<string, unknown>;
    /** Defines the original user query string. */
    originalQueryString?:string | undefined;
    /** Defines the details of alteration information for the spelling correction. */
    queryAlteration?:SearchAlteration | undefined;
    /** Defines the type of the spelling correction. Possible values are suggestion, modification. */
    queryAlterationType?:SearchAlterationType | undefined;
}
