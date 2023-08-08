import type {ConvertIdResult} from '../../../models/convertIdResult';
import {createConvertIdResultFromDiscriminatorValue} from '../../../models/createConvertIdResultFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from '../../../models/deserializeIntoBaseCollectionPaginationCountResponse';
import {serializeConvertIdResult} from '../../../models/serializeConvertIdResult';
import type {TranslateExchangeIdsResponse} from './translateExchangeIdsResponse';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTranslateExchangeIdsResponse(translateExchangeIdsResponse: TranslateExchangeIdsResponse | undefined = {} as TranslateExchangeIdsResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(translateExchangeIdsResponse),
        "value": n => { translateExchangeIdsResponse.value = n.getCollectionOfObjectValues<ConvertIdResult>(createConvertIdResultFromDiscriminatorValue); },
    }
}
