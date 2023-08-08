import {PurgeAreas} from '../../../../../../../models/security/purgeAreas';
import {PurgeType} from '../../../../../../../models/security/purgeType';
import type {PurgeDataPostRequestBody} from './purgeDataPostRequestBody';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePurgeDataPostRequestBody(writer: SerializationWriter, purgeDataPostRequestBody: PurgeDataPostRequestBody | undefined = {} as PurgeDataPostRequestBody) : void {
        writer.writeEnumValue<PurgeAreas>("purgeAreas", purgeDataPostRequestBody.purgeAreas);
        writer.writeEnumValue<PurgeType>("purgeType", purgeDataPostRequestBody.purgeType);
        writer.writeAdditionalData(purgeDataPostRequestBody.additionalData);
}
