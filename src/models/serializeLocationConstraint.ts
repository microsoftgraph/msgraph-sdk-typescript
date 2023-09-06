import { type LocationConstraint } from './locationConstraint';
import { type LocationConstraintItem } from './locationConstraintItem';
import { serializeLocationConstraintItem } from './serializeLocationConstraintItem';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeLocationConstraint(writer: SerializationWriter, locationConstraint: LocationConstraint | undefined = {} as LocationConstraint) : void {
        writer.writeBooleanValue("isRequired", locationConstraint.isRequired);
        writer.writeCollectionOfObjectValues<LocationConstraintItem>("locations", locationConstraint.locations, serializeLocationConstraintItem);
        writer.writeStringValue("@odata.type", locationConstraint.odataType);
        writer.writeBooleanValue("suggestLocation", locationConstraint.suggestLocation);
        writer.writeAdditionalData(locationConstraint.additionalData);
}
