import {deserializeIntoMultiValueLegacyExtendedPropertyCollectionResponse} from './deserializeIntoMultiValueLegacyExtendedPropertyCollectionResponse';
import {MultiValueLegacyExtendedPropertyCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMultiValueLegacyExtendedPropertyCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoMultiValueLegacyExtendedPropertyCollectionResponse;
}
