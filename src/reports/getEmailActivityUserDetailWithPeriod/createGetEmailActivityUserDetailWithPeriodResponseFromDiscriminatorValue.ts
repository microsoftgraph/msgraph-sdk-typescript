import {GetEmailActivityUserDetailWithPeriodResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGetEmailActivityUserDetailWithPeriodResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : GetEmailActivityUserDetailWithPeriodResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new GetEmailActivityUserDetailWithPeriodResponseImpl();
}
