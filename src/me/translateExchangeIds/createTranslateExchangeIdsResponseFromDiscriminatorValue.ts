import {TranslateExchangeIdsResponse} from './translateExchangeIdsResponse';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTranslateExchangeIdsResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : TranslateExchangeIdsResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new TranslateExchangeIdsResponse();
}
