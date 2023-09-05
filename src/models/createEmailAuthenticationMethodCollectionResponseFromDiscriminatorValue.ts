import { deserializeIntoEmailAuthenticationMethodCollectionResponse } from './deserializeIntoEmailAuthenticationMethodCollectionResponse';
import { type EmailAuthenticationMethodCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createEmailAuthenticationMethodCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoEmailAuthenticationMethodCollectionResponse;
}
