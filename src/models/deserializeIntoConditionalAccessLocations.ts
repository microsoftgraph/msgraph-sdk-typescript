import {ConditionalAccessLocations} from './conditionalAccessLocations';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoConditionalAccessLocations(conditionalAccessLocations: ConditionalAccessLocations | undefined = {} as ConditionalAccessLocations) : Record<string, (node: ParseNode) => void> {
    return {
        "excludeLocations": n => { conditionalAccessLocations.excludeLocations = n.getCollectionOfPrimitiveValues<string>(); },
        "includeLocations": n => { conditionalAccessLocations.includeLocations = n.getCollectionOfPrimitiveValues<string>(); },
        "@odata.type": n => { conditionalAccessLocations.odataType = n.getStringValue(); },
    }
}
