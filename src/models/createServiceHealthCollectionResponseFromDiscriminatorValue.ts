import {ServiceHealthCollectionResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createServiceHealthCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ServiceHealthCollectionResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ServiceHealthCollectionResponseImpl();
}
