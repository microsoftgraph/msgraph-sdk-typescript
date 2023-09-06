import { deserializeIntoStringKeyStringValuePair } from './deserializeIntoStringKeyStringValuePair';
import { type StringKeyStringValuePair } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createStringKeyStringValuePairFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoStringKeyStringValuePair;
}
