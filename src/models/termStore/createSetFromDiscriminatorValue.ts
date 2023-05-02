import {deserializeIntoSet} from './deserializeIntoSet';
import {Set} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSetFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSet;
}
