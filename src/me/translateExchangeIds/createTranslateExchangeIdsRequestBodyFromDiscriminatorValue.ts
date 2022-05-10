import {TranslateExchangeIdsRequestBodyImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTranslateExchangeIdsRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : TranslateExchangeIdsRequestBodyImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new TranslateExchangeIdsRequestBodyImpl();
}
