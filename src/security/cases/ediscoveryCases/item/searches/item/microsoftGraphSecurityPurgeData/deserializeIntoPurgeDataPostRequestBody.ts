import {PurgeAreas} from '../../../../../../../models/security/purgeAreas';
import {PurgeType} from '../../../../../../../models/security/purgeType';
import type {PurgeDataPostRequestBody} from './purgeDataPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPurgeDataPostRequestBody(purgeDataPostRequestBody: PurgeDataPostRequestBody | undefined = {} as PurgeDataPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "purgeAreas": n => { purgeDataPostRequestBody.purgeAreas = n.getEnumValue<PurgeAreas>(PurgeAreas); },
        "purgeType": n => { purgeDataPostRequestBody.purgeType = n.getEnumValue<PurgeType>(PurgeType); },
    }
}
