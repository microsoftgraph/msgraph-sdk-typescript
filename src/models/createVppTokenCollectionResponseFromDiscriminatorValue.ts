import {VppTokenCollectionResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createVppTokenCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : VppTokenCollectionResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new VppTokenCollectionResponseImpl();
}
