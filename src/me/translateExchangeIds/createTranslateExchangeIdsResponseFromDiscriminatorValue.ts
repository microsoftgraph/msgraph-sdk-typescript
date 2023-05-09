import {deserializeIntoTranslateExchangeIdsResponse} from './deserializeIntoTranslateExchangeIdsResponse';
import {TranslateExchangeIdsResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTranslateExchangeIdsResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoTranslateExchangeIdsResponse;
}
