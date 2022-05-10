import {GetTeamsUserActivityUserCountsWithPeriodResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGetTeamsUserActivityUserCountsWithPeriodResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : GetTeamsUserActivityUserCountsWithPeriodResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new GetTeamsUserActivityUserCountsWithPeriodResponseImpl();
}
