import {FilterMode} from './filterMode';

export interface ConditionalAccessFilter{
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?:Record<string, unknown>;
    /** Mode to use for the filter. Possible values are include or exclude. */
    mode?:FilterMode | undefined;
    /** Rule syntax is similar to that used for membership rules for groups in Azure Active Directory. For details, see rules with multiple expressions */
    rule?:string | undefined;
}
