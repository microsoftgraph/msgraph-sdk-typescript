import {TimeOffItemImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTimeOffItemFromDiscriminatorValue(parseNode: ParseNode | undefined) : TimeOffItemImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new TimeOffItemImpl();
}
