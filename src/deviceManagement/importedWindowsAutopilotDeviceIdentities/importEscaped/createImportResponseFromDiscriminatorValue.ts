import { deserializeIntoImportResponse } from './deserializeIntoImportResponse';
import { type ImportResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createImportResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoImportResponse;
}
