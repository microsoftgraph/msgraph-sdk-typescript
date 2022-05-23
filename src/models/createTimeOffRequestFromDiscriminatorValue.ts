import {TimeOffRequestImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTimeOffRequestFromDiscriminatorValue(parseNode: ParseNode | undefined) : TimeOffRequestImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new TimeOffRequestImpl();
}
