import { deserializeIntoAdditionalAccessResponse } from './deserializeIntoAdditionalAccessResponse';
import { type AdditionalAccessResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createAdditionalAccessResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAdditionalAccessResponse;
}
