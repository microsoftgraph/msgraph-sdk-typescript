import { deserializeIntoEntity } from './deserializeIntoEntity';
import { type NamedLocation } from './namedLocation';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoNamedLocation(namedLocation: NamedLocation | undefined = {} as NamedLocation) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(namedLocation),
        "createdDateTime": n => { namedLocation.createdDateTime = n.getDateValue(); },
        "displayName": n => { namedLocation.displayName = n.getStringValue(); },
        "modifiedDateTime": n => { namedLocation.modifiedDateTime = n.getDateValue(); },
    }
}
