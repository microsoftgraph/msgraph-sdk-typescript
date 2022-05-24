import {ExchangeIdFormat} from '../../../models/exchangeIdFormat';

export interface TranslateExchangeIdsPostRequestBody{
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?:Record<string, unknown>;
    /** The InputIds property */
    inputIds?:string[] | undefined;
    /** The SourceIdType property */
    sourceIdType?:ExchangeIdFormat | undefined;
    /** The TargetIdType property */
    targetIdType?:ExchangeIdFormat | undefined;
}
