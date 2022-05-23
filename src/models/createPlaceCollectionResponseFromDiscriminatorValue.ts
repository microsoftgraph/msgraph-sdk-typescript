import {PlaceCollectionResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPlaceCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : PlaceCollectionResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new PlaceCollectionResponseImpl();
}
