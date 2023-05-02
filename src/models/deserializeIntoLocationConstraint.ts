import {createLocationConstraintItemFromDiscriminatorValue} from './createLocationConstraintItemFromDiscriminatorValue';
import {LocationConstraint} from './locationConstraint';
import {LocationConstraintItem} from './locationConstraintItem';
import {serializeLocationConstraintItem} from './serializeLocationConstraintItem';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoLocationConstraint(locationConstraint: LocationConstraint | undefined = {} as LocationConstraint) : Record<string, (node: ParseNode) => void> {
    return {
        "isRequired": n => { locationConstraint.isRequired = n.getBooleanValue(); },
        "locations": n => { locationConstraint.locations = n.getCollectionOfObjectValues<LocationConstraintItem>(createLocationConstraintItemFromDiscriminatorValue); },
        "@odata.type": n => { locationConstraint.odataType = n.getStringValue(); },
        "suggestLocation": n => { locationConstraint.suggestLocation = n.getBooleanValue(); },
    }
}
