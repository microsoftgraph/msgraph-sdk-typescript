import {ScheduleItemCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createScheduleItemCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ScheduleItemCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ScheduleItemCollectionResponse();
}
