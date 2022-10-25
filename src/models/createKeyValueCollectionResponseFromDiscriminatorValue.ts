import {KeyValueCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createKeyValueCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : KeyValueCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new KeyValueCollectionResponse();
}
