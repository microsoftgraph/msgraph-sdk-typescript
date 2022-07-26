import {IPv4Range} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createIPv4RangeFromDiscriminatorValue(parseNode: ParseNode | undefined) : IPv4Range {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new IPv4Range();
}
