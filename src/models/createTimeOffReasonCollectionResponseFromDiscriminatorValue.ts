import {TimeOffReasonCollectionResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTimeOffReasonCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : TimeOffReasonCollectionResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new TimeOffReasonCollectionResponseImpl();
}
