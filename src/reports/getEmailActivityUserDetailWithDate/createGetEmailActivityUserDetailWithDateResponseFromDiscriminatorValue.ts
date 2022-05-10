import {GetEmailActivityUserDetailWithDateResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGetEmailActivityUserDetailWithDateResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : GetEmailActivityUserDetailWithDateResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new GetEmailActivityUserDetailWithDateResponseImpl();
}
