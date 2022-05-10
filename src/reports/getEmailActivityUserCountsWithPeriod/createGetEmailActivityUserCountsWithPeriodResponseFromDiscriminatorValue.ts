import {GetEmailActivityUserCountsWithPeriodResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGetEmailActivityUserCountsWithPeriodResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : GetEmailActivityUserCountsWithPeriodResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new GetEmailActivityUserCountsWithPeriodResponseImpl();
}
