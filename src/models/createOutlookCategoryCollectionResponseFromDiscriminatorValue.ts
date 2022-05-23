import {OutlookCategoryCollectionResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createOutlookCategoryCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : OutlookCategoryCollectionResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new OutlookCategoryCollectionResponseImpl();
}
