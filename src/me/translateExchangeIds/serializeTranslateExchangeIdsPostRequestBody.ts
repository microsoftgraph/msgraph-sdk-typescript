import { ExchangeIdFormat } from '../../models/exchangeIdFormat';
import { type TranslateExchangeIdsPostRequestBody } from './translateExchangeIdsPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeTranslateExchangeIdsPostRequestBody(writer: SerializationWriter, translateExchangeIdsPostRequestBody: TranslateExchangeIdsPostRequestBody | undefined = {} as TranslateExchangeIdsPostRequestBody) : void {
        writer.writeCollectionOfPrimitiveValues<string>("inputIds", translateExchangeIdsPostRequestBody.inputIds);
        writer.writeEnumValue<ExchangeIdFormat>("sourceIdType", translateExchangeIdsPostRequestBody.sourceIdType);
        writer.writeEnumValue<ExchangeIdFormat>("targetIdType", translateExchangeIdsPostRequestBody.targetIdType);
        writer.writeAdditionalData(translateExchangeIdsPostRequestBody.additionalData);
}
