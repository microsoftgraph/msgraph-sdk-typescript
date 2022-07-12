import {TranslateExchangeIdsMember1} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTranslateExchangeIdsMember1FromDiscriminatorValue(parseNode: ParseNode | undefined) : TranslateExchangeIdsMember1 {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new TranslateExchangeIdsMember1();
}
