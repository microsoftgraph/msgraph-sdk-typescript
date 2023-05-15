import {deserializeIntoGetActivitiesByIntervalResponse} from './deserializeIntoGetActivitiesByIntervalResponse';
import {GetActivitiesByIntervalResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGetActivitiesByIntervalResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoGetActivitiesByIntervalResponse;
}
