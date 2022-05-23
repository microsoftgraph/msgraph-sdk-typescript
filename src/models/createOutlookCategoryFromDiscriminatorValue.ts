import {OutlookCategoryImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createOutlookCategoryFromDiscriminatorValue(parseNode: ParseNode | undefined) : OutlookCategoryImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new OutlookCategoryImpl();
}
