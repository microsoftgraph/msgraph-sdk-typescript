import {ConditionalAccessLocations} from './conditionalAccessLocations';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeConditionalAccessLocations(conditionalAccessLocations: ConditionalAccessLocations | undefined = {} as ConditionalAccessLocations, writer: SerializationWriter) : void {
        writer.writeCollectionOfPrimitiveValues<string>("excludeLocations", conditionalAccessLocations.excludeLocations);
        writer.writeCollectionOfPrimitiveValues<string>("includeLocations", conditionalAccessLocations.includeLocations);
        writer.writeStringValue("@odata.type", conditionalAccessLocations.odataType);
        writer.writeAdditionalData(conditionalAccessLocations.additionalData);
}
