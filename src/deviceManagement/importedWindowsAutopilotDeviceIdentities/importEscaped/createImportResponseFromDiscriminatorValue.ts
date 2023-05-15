import {deserializeIntoImportResponse} from './deserializeIntoImportResponse';
import {ImportResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createImportResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoImportResponse;
}
