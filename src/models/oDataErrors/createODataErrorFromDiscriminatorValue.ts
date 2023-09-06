import { deserializeIntoODataError } from './deserializeIntoODataError';
import { type ODataError } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createODataErrorFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoODataError;
}
