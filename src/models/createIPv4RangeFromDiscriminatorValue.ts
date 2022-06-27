import {IPv4RangeImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createIPv4RangeFromDiscriminatorValue(parseNode: ParseNode | undefined) : IPv4RangeImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new IPv4RangeImpl();
}
