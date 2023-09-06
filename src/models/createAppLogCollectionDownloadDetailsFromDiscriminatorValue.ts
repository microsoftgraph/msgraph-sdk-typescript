import { deserializeIntoAppLogCollectionDownloadDetails } from './deserializeIntoAppLogCollectionDownloadDetails';
import { type AppLogCollectionDownloadDetails } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createAppLogCollectionDownloadDetailsFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAppLogCollectionDownloadDetails;
}
