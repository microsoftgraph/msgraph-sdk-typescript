import { deserializeIntoGetAllMessagesResponse } from './deserializeIntoGetAllMessagesResponse';
import { type GetAllMessagesResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createGetAllMessagesResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoGetAllMessagesResponse;
}
