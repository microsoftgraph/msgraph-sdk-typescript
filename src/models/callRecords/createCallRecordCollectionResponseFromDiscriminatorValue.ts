import {deserializeIntoCallRecordCollectionResponse} from './deserializeIntoCallRecordCollectionResponse';
import {CallRecordCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCallRecordCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoCallRecordCollectionResponse;
}
