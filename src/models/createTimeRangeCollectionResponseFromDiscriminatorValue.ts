import {TimeRangeCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTimeRangeCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : TimeRangeCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new TimeRangeCollectionResponse();
}
