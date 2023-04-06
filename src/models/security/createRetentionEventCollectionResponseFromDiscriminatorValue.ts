import {RetentionEventCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRetentionEventCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : RetentionEventCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new RetentionEventCollectionResponse();
}
