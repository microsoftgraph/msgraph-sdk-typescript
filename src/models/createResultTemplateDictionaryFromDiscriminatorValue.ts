import {deserializeIntoResultTemplateDictionary} from './deserializeIntoResultTemplateDictionary';
import {ResultTemplateDictionary} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createResultTemplateDictionaryFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoResultTemplateDictionary;
}
