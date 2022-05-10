import {GetTeamsUserActivityCountsWithPeriodResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGetTeamsUserActivityCountsWithPeriodResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : GetTeamsUserActivityCountsWithPeriodResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new GetTeamsUserActivityCountsWithPeriodResponseImpl();
}
