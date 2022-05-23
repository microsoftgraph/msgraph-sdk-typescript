import {ApplicationCollectionResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createApplicationCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ApplicationCollectionResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ApplicationCollectionResponseImpl();
}
