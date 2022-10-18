import {CountryNamedLocationCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCountryNamedLocationCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : CountryNamedLocationCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new CountryNamedLocationCollectionResponse();
}
