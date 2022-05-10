import {GetAllMessagesResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGetAllMessagesResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : GetAllMessagesResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new GetAllMessagesResponseImpl();
}
