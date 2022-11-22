import {PhoneCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPhoneCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : PhoneCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new PhoneCollectionResponse();
}
