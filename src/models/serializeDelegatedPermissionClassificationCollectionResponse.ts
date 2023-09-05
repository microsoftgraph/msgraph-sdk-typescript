import { type DelegatedPermissionClassification } from './delegatedPermissionClassification';
import { type DelegatedPermissionClassificationCollectionResponse } from './delegatedPermissionClassificationCollectionResponse';
import { serializeBaseCollectionPaginationCountResponse } from './serializeBaseCollectionPaginationCountResponse';
import { serializeDelegatedPermissionClassification } from './serializeDelegatedPermissionClassification';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeDelegatedPermissionClassificationCollectionResponse(writer: SerializationWriter, delegatedPermissionClassificationCollectionResponse: DelegatedPermissionClassificationCollectionResponse | undefined = {} as DelegatedPermissionClassificationCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, delegatedPermissionClassificationCollectionResponse)
        writer.writeCollectionOfObjectValues<DelegatedPermissionClassification>("value", delegatedPermissionClassificationCollectionResponse.value, serializeDelegatedPermissionClassification);
}
