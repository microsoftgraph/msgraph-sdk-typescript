import {PurgeAreas} from '../../../../../../../models/security/purgeAreas';
import {PurgeType} from '../../../../../../../models/security/purgeType';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface PurgeDataPostRequestBody extends AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The purgeAreas property */
    purgeAreas?: PurgeAreas | undefined;
    /** The purgeType property */
    purgeType?: PurgeType | undefined;
}
