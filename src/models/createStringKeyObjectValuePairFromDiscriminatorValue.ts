import {deserializeIntoStringKeyObjectValuePair} from './deserializeIntoStringKeyObjectValuePair';
import {StringKeyObjectValuePair} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createStringKeyObjectValuePairFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoStringKeyObjectValuePair;
}
