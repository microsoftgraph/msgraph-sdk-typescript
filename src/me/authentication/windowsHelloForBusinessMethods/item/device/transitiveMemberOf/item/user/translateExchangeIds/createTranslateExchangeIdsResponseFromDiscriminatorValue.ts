import {TranslateExchangeIdsResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTranslateExchangeIdsResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : TranslateExchangeIdsResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new TranslateExchangeIdsResponseImpl();
}
