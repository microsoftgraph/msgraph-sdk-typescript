import {OnenotePatchContentCommand} from '../../../../../../models/onenotePatchContentCommand';

export interface OnenotePatchContentPostRequestBody{
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?:Record<string, unknown>;
    /** The commands property */
    commands?:OnenotePatchContentCommand[] | undefined;
}
