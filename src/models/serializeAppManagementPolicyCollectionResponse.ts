import { type AppManagementPolicy } from './appManagementPolicy';
import { type AppManagementPolicyCollectionResponse } from './appManagementPolicyCollectionResponse';
import { serializeAppManagementPolicy } from './serializeAppManagementPolicy';
import { serializeBaseCollectionPaginationCountResponse } from './serializeBaseCollectionPaginationCountResponse';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeAppManagementPolicyCollectionResponse(writer: SerializationWriter, appManagementPolicyCollectionResponse: AppManagementPolicyCollectionResponse | undefined = {} as AppManagementPolicyCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, appManagementPolicyCollectionResponse)
        writer.writeCollectionOfObjectValues<AppManagementPolicy>("value", appManagementPolicyCollectionResponse.value, serializeAppManagementPolicy);
}
