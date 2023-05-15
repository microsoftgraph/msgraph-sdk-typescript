import {ConditionalAccessDevicePlatform} from './conditionalAccessDevicePlatform';
import {ConditionalAccessPlatforms} from './conditionalAccessPlatforms';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeConditionalAccessPlatforms(writer: SerializationWriter, conditionalAccessPlatforms: ConditionalAccessPlatforms | undefined = {} as ConditionalAccessPlatforms) : void {
        if(conditionalAccessPlatforms.excludePlatforms)
        writer.writeEnumValue<ConditionalAccessDevicePlatform>("excludePlatforms", ...conditionalAccessPlatforms.excludePlatforms);
        if(conditionalAccessPlatforms.includePlatforms)
        writer.writeEnumValue<ConditionalAccessDevicePlatform>("includePlatforms", ...conditionalAccessPlatforms.includePlatforms);
        writer.writeStringValue("@odata.type", conditionalAccessPlatforms.odataType);
        writer.writeAdditionalData(conditionalAccessPlatforms.additionalData);
}
