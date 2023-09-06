import { ConditionalAccessDevicePlatform } from './conditionalAccessDevicePlatform';
import { type ConditionalAccessPlatforms } from './conditionalAccessPlatforms';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeConditionalAccessPlatforms(writer: SerializationWriter, conditionalAccessPlatforms: ConditionalAccessPlatforms | undefined = {} as ConditionalAccessPlatforms) : void {
        writer.writeCollectionOfObjectValues<ConditionalAccessDevicePlatform>("excludePlatforms", conditionalAccessPlatforms.excludePlatforms, object);
        writer.writeCollectionOfObjectValues<ConditionalAccessDevicePlatform>("includePlatforms", conditionalAccessPlatforms.includePlatforms, object);
        writer.writeStringValue("@odata.type", conditionalAccessPlatforms.odataType);
        writer.writeAdditionalData(conditionalAccessPlatforms.additionalData);
}
