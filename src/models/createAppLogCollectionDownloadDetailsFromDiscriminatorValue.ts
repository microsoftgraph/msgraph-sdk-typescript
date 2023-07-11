import {deserializeIntoAppLogCollectionDownloadDetails} from './deserializeIntoAppLogCollectionDownloadDetails';
import {AppLogCollectionDownloadDetails} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAppLogCollectionDownloadDetailsFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAppLogCollectionDownloadDetails;
}
