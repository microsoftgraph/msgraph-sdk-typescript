import {IPv6Range} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createIPv6RangeFromDiscriminatorValue(parseNode: ParseNode | undefined) : IPv6Range {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new IPv6Range();
}
