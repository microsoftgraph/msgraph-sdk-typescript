import {deserializeIntoTermsAndConditionsCollectionResponse} from './deserializeIntoTermsAndConditionsCollectionResponse';
import {TermsAndConditionsCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTermsAndConditionsCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoTermsAndConditionsCollectionResponse;
}
