import {TranslateExchangeIdsPostRequestBodyImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTranslateExchangeIdsPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : TranslateExchangeIdsPostRequestBodyImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new TranslateExchangeIdsPostRequestBodyImpl();
}
