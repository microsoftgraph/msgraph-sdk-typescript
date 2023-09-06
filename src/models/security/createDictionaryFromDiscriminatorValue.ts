import { deserializeIntoDictionary } from './deserializeIntoDictionary';
import { type Dictionary } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createDictionaryFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDictionary;
}
