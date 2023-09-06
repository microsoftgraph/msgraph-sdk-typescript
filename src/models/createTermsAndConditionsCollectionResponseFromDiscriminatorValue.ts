import { deserializeIntoTermsAndConditionsCollectionResponse } from './deserializeIntoTermsAndConditionsCollectionResponse';
import { type TermsAndConditionsCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createTermsAndConditionsCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoTermsAndConditionsCollectionResponse;
}
