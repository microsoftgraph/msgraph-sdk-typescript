import { deserializeIntoFileDetails } from './deserializeIntoFileDetails';
import { type FileDetails } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createFileDetailsFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoFileDetails;
}
