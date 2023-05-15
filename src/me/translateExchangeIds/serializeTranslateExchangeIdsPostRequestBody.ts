import {ExchangeIdFormat} from '../../models/exchangeIdFormat';
import {TranslateExchangeIdsPostRequestBody} from './translateExchangeIdsPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTranslateExchangeIdsPostRequestBody(writer: SerializationWriter, translateExchangeIdsPostRequestBody: TranslateExchangeIdsPostRequestBody | undefined = {} as TranslateExchangeIdsPostRequestBody) : void {
        writer.writeCollectionOfPrimitiveValues<string>("inputIds", translateExchangeIdsPostRequestBody.inputIds);
        writer.writeEnumValue<ExchangeIdFormat>("sourceIdType", translateExchangeIdsPostRequestBody.sourceIdType);
        writer.writeEnumValue<ExchangeIdFormat>("targetIdType", translateExchangeIdsPostRequestBody.targetIdType);
        writer.writeAdditionalData(translateExchangeIdsPostRequestBody.additionalData);
}
