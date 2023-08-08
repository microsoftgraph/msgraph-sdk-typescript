import {ExchangeIdFormat} from '../../models/exchangeIdFormat';
import type {TranslateExchangeIdsPostRequestBody} from './translateExchangeIdsPostRequestBody';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTranslateExchangeIdsPostRequestBody(translateExchangeIdsPostRequestBody: TranslateExchangeIdsPostRequestBody | undefined = {} as TranslateExchangeIdsPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "inputIds": n => { translateExchangeIdsPostRequestBody.inputIds = n.getCollectionOfPrimitiveValues<string>(); },
        "sourceIdType": n => { translateExchangeIdsPostRequestBody.sourceIdType = n.getEnumValue<ExchangeIdFormat>(ExchangeIdFormat); },
        "targetIdType": n => { translateExchangeIdsPostRequestBody.targetIdType = n.getEnumValue<ExchangeIdFormat>(ExchangeIdFormat); },
    }
}
