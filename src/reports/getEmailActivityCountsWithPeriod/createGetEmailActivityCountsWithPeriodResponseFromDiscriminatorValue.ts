import {GetEmailActivityCountsWithPeriodResponse} from './getEmailActivityCountsWithPeriodResponse';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGetEmailActivityCountsWithPeriodResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : GetEmailActivityCountsWithPeriodResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new GetEmailActivityCountsWithPeriodResponse();
}
