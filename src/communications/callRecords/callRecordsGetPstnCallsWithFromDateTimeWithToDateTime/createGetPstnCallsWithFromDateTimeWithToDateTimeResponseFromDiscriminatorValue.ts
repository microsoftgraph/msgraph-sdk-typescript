import {deserializeIntoGetPstnCallsWithFromDateTimeWithToDateTimeResponse} from './deserializeIntoGetPstnCallsWithFromDateTimeWithToDateTimeResponse';
import {GetPstnCallsWithFromDateTimeWithToDateTimeResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGetPstnCallsWithFromDateTimeWithToDateTimeResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoGetPstnCallsWithFromDateTimeWithToDateTimeResponse;
}
