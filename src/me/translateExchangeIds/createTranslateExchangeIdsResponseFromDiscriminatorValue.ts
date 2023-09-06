import { deserializeIntoTranslateExchangeIdsResponse } from './deserializeIntoTranslateExchangeIdsResponse';
import { type TranslateExchangeIdsResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createTranslateExchangeIdsResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoTranslateExchangeIdsResponse;
}
