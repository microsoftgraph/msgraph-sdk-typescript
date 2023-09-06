import { deserializeIntoOutlookCategory } from './deserializeIntoOutlookCategory';
import { type OutlookCategory } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createOutlookCategoryFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoOutlookCategory;
}
