import {deserializeIntoStringKeyStringValuePair} from './deserializeIntoStringKeyStringValuePair';
import {StringKeyStringValuePair} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createStringKeyStringValuePairFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoStringKeyStringValuePair;
}
