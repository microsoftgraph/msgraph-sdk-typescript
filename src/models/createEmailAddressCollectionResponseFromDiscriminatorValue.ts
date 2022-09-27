import {EmailAddressCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEmailAddressCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : EmailAddressCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new EmailAddressCollectionResponse();
}
