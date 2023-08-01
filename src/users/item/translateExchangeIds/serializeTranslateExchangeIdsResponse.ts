import type {ConvertIdResult} from '../../../models/convertIdResult';
import {serializeBaseCollectionPaginationCountResponse} from '../../../models/serializeBaseCollectionPaginationCountResponse';
import {serializeConvertIdResult} from '../../../models/serializeConvertIdResult';
import type {TranslateExchangeIdsResponse} from './translateExchangeIdsResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTranslateExchangeIdsResponse(writer: SerializationWriter, translateExchangeIdsResponse: TranslateExchangeIdsResponse | undefined = {} as TranslateExchangeIdsResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, translateExchangeIdsResponse)
        writer.writeCollectionOfObjectValues<ConvertIdResult>("value", translateExchangeIdsResponse.value, serializeConvertIdResult);
}
