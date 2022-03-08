import {GetTeamsUserActivityUserDetailWithPeriodResponse} from './getTeamsUserActivityUserDetailWithPeriodResponse';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGetTeamsUserActivityUserDetailWithPeriodResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : GetTeamsUserActivityUserDetailWithPeriodResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new GetTeamsUserActivityUserDetailWithPeriodResponse();
}
