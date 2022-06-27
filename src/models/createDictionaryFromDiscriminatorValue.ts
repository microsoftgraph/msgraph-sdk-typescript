import {DictionaryImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDictionaryFromDiscriminatorValue(parseNode: ParseNode | undefined) : DictionaryImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DictionaryImpl();
}
