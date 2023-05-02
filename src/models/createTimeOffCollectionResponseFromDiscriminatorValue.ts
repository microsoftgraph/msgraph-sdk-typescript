import {deserializeIntoTimeOffCollectionResponse} from './deserializeIntoTimeOffCollectionResponse';
import {TimeOffCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTimeOffCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoTimeOffCollectionResponse;
}
