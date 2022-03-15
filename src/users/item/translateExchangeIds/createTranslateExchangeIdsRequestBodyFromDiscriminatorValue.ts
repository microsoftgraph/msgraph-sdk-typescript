import {TranslateExchangeIdsRequestBody} from './translateExchangeIdsRequestBody';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTranslateExchangeIdsRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : TranslateExchangeIdsRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new TranslateExchangeIdsRequestBody();
}
