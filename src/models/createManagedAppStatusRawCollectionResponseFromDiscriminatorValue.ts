import {ManagedAppStatusRawCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createManagedAppStatusRawCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ManagedAppStatusRawCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ManagedAppStatusRawCollectionResponse();
}
