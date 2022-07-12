import {GetPstnCallsWithFromDateTimeWithToDateTimeMember1} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGetPstnCallsWithFromDateTimeWithToDateTimeMember1FromDiscriminatorValue(parseNode: ParseNode | undefined) : GetPstnCallsWithFromDateTimeWithToDateTimeMember1 {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new GetPstnCallsWithFromDateTimeWithToDateTimeMember1();
}
