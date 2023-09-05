import { PurgeAreas } from '../../../../../../../models/security/purgeAreas';
import { PurgeType } from '../../../../../../../models/security/purgeType';
import { type PurgeDataPostRequestBody } from './purgeDataPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoPurgeDataPostRequestBody(purgeDataPostRequestBody: PurgeDataPostRequestBody | undefined = {} as PurgeDataPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "purgeAreas": n => { purgeDataPostRequestBody.purgeAreas = n.getCollectionOfEnumValues<PurgeAreas>(PurgeAreas); },
        "purgeType": n => { purgeDataPostRequestBody.purgeType = n.getEnumValue<PurgeType>(PurgeType); },
    }
}
