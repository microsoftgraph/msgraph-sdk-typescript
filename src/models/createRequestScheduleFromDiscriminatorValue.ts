import {RequestScheduleImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRequestScheduleFromDiscriminatorValue(parseNode: ParseNode | undefined) : RequestScheduleImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new RequestScheduleImpl();
}
