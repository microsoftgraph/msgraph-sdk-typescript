import {deserializeIntoCountryNamedLocation} from './deserializeIntoCountryNamedLocation';
import {CountryNamedLocation} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCountryNamedLocationFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoCountryNamedLocation;
}
