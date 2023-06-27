import {FeatureTargetType} from './featureTargetType';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface FeatureTarget extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The ID of the entity that's targeted in the include or exclude rule, or all_users to target all users.
     */
    id?: string | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * The kind of entity that's targeted. The possible values are: group, administrativeUnit, role, unknownFutureValue.
     */
    targetType?: FeatureTargetType | undefined;
}
