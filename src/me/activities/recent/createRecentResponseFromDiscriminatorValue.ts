import {deserializeIntoRecentResponse} from './deserializeIntoRecentResponse';
import {RecentResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRecentResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoRecentResponse;
}
