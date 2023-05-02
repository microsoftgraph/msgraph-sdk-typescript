import {deserializeIntoPrintServiceCollectionResponse} from './deserializeIntoPrintServiceCollectionResponse';
import {PrintServiceCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPrintServiceCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoPrintServiceCollectionResponse;
}
