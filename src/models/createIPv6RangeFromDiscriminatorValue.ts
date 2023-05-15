import {deserializeIntoIPv6Range} from './deserializeIntoIPv6Range';
import {IPv6Range} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createIPv6RangeFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoIPv6Range;
}
