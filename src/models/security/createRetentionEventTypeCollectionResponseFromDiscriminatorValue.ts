import {RetentionEventTypeCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRetentionEventTypeCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : RetentionEventTypeCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new RetentionEventTypeCollectionResponse();
}
