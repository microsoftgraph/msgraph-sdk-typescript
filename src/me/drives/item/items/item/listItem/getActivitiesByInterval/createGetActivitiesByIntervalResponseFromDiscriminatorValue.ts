import {GetActivitiesByIntervalResponse} from './getActivitiesByIntervalResponse';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGetActivitiesByIntervalResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : GetActivitiesByIntervalResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new GetActivitiesByIntervalResponse();
}
