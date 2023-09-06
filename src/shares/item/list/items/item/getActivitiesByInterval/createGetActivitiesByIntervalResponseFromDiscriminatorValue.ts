import { deserializeIntoGetActivitiesByIntervalResponse } from './deserializeIntoGetActivitiesByIntervalResponse';
import { type GetActivitiesByIntervalResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createGetActivitiesByIntervalResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoGetActivitiesByIntervalResponse;
}
