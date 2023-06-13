import {deserializeIntoStringKeyLongValuePair} from './deserializeIntoStringKeyLongValuePair';
import {StringKeyLongValuePair} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createStringKeyLongValuePairFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoStringKeyLongValuePair;
}
