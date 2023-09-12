import { deserializeIntoStringKeyObjectValuePair } from './deserializeIntoStringKeyObjectValuePair';
import { type StringKeyObjectValuePair } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createStringKeyObjectValuePairFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoStringKeyObjectValuePair;
}
