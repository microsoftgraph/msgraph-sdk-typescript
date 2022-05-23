import {FreeBusyErrorImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createFreeBusyErrorFromDiscriminatorValue(parseNode: ParseNode | undefined) : FreeBusyErrorImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new FreeBusyErrorImpl();
}
