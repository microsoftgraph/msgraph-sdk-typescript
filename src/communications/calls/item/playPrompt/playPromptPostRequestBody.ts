import {Prompt} from '../../../../models/prompt';

export interface PlayPromptPostRequestBody{
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?:Record<string, unknown>;
    /** The clientContext property */
    clientContext?:string | undefined;
    /** The prompts property */
    prompts?:Prompt[] | undefined;
}
