import {deserializeIntoDictionary} from './deserializeIntoDictionary';
import {Dictionary} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDictionaryFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDictionary;
}
