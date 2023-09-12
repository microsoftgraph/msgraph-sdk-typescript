import { deserializeIntoTranslateExchangeIdsPostRequestBody } from './deserializeIntoTranslateExchangeIdsPostRequestBody';
import { type TranslateExchangeIdsPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createTranslateExchangeIdsPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoTranslateExchangeIdsPostRequestBody;
}
