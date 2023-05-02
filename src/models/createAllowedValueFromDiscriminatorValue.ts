import {deserializeIntoAllowedValue} from './deserializeIntoAllowedValue';
import {AllowedValue} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAllowedValueFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAllowedValue;
}
