import {ConditionalAccessLocations} from './conditionalAccessLocations';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeConditionalAccessLocations(writer: SerializationWriter, conditionalAccessLocations: ConditionalAccessLocations | undefined = {} as ConditionalAccessLocations) : void {
        writer.writeCollectionOfPrimitiveValues<string>("excludeLocations", conditionalAccessLocations.excludeLocations);
        writer.writeCollectionOfPrimitiveValues<string>("includeLocations", conditionalAccessLocations.includeLocations);
        writer.writeStringValue("@odata.type", conditionalAccessLocations.odataType);
        writer.writeAdditionalData(conditionalAccessLocations.additionalData);
}
