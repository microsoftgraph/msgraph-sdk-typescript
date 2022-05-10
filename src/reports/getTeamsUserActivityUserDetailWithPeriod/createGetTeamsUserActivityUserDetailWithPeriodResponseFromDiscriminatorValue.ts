import {GetTeamsUserActivityUserDetailWithPeriodResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGetTeamsUserActivityUserDetailWithPeriodResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : GetTeamsUserActivityUserDetailWithPeriodResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new GetTeamsUserActivityUserDetailWithPeriodResponseImpl();
}
