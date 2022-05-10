import {GetTeamsUserActivityUserDetailWithDateResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGetTeamsUserActivityUserDetailWithDateResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : GetTeamsUserActivityUserDetailWithDateResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new GetTeamsUserActivityUserDetailWithDateResponseImpl();
}
