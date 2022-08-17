import {CountryNamedLocation} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCountryNamedLocationFromDiscriminatorValue(parseNode: ParseNode | undefined) : CountryNamedLocation {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new CountryNamedLocation();
}
