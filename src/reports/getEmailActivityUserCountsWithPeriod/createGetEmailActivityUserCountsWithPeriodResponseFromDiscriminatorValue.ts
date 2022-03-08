import {GetEmailActivityUserCountsWithPeriodResponse} from './getEmailActivityUserCountsWithPeriodResponse';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGetEmailActivityUserCountsWithPeriodResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : GetEmailActivityUserCountsWithPeriodResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new GetEmailActivityUserCountsWithPeriodResponse();
}
