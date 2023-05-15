import {deserializeIntoOutlookCategoryCollectionResponse} from './deserializeIntoOutlookCategoryCollectionResponse';
import {OutlookCategoryCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createOutlookCategoryCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoOutlookCategoryCollectionResponse;
}
