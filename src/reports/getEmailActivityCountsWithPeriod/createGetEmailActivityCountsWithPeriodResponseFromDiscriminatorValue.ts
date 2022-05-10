import {GetEmailActivityCountsWithPeriodResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGetEmailActivityCountsWithPeriodResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : GetEmailActivityCountsWithPeriodResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new GetEmailActivityCountsWithPeriodResponseImpl();
}
