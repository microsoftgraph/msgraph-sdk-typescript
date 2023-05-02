import {deserializeIntoPrintUsageByUserCollectionResponse} from './deserializeIntoPrintUsageByUserCollectionResponse';
import {PrintUsageByUserCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPrintUsageByUserCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoPrintUsageByUserCollectionResponse;
}
