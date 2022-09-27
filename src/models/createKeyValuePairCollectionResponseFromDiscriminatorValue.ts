import {KeyValuePairCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createKeyValuePairCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : KeyValuePairCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new KeyValuePairCollectionResponse();
}
