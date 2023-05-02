import {DelegatedPermissionClassification} from './delegatedPermissionClassification';
import {DelegatedPermissionClassificationCollectionResponse} from './delegatedPermissionClassificationCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeDelegatedPermissionClassification} from './serializeDelegatedPermissionClassification';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDelegatedPermissionClassificationCollectionResponse(writer: SerializationWriter, delegatedPermissionClassificationCollectionResponse: DelegatedPermissionClassificationCollectionResponse | undefined = {} as DelegatedPermissionClassificationCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, delegatedPermissionClassificationCollectionResponse)
        writer.writeCollectionOfObjectValues<DelegatedPermissionClassification>("value", delegatedPermissionClassificationCollectionResponse.value, serializeDelegatedPermissionClassification);
}
