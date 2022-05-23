import {TimeOffRequestCollectionResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTimeOffRequestCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : TimeOffRequestCollectionResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new TimeOffRequestCollectionResponseImpl();
}
