import { deserializeIntoGetPstnCallsWithFromDateTimeWithToDateTimeResponse } from './deserializeIntoGetPstnCallsWithFromDateTimeWithToDateTimeResponse';
import { type GetPstnCallsWithFromDateTimeWithToDateTimeResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createGetPstnCallsWithFromDateTimeWithToDateTimeResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoGetPstnCallsWithFromDateTimeWithToDateTimeResponse;
}
