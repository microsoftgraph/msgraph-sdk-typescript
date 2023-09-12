import { deserializeIntoCountryNamedLocation } from './deserializeIntoCountryNamedLocation';
import { type CountryNamedLocation } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createCountryNamedLocationFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoCountryNamedLocation;
}
