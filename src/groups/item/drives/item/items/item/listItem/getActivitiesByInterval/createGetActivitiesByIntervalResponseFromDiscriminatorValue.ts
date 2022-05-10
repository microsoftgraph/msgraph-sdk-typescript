import {GetActivitiesByIntervalResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGetActivitiesByIntervalResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : GetActivitiesByIntervalResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new GetActivitiesByIntervalResponseImpl();
}
