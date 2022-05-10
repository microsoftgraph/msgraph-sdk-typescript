import {ResultTemplateDictionaryImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createResultTemplateDictionaryFromDiscriminatorValue(parseNode: ParseNode | undefined) : ResultTemplateDictionaryImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ResultTemplateDictionaryImpl();
}
