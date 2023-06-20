import {AppManagementPolicy} from './appManagementPolicy';
import {AppManagementPolicyCollectionResponse} from './appManagementPolicyCollectionResponse';
import {serializeAppManagementPolicy} from './serializeAppManagementPolicy';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAppManagementPolicyCollectionResponse(appManagementPolicyCollectionResponse: AppManagementPolicyCollectionResponse | undefined = {} as AppManagementPolicyCollectionResponse, writer: SerializationWriter) : void {
        serializeBaseCollectionPaginationCountResponse(writer, appManagementPolicyCollectionResponse)
        writer.writeCollectionOfObjectValues<AppManagementPolicy>("value", appManagementPolicyCollectionResponse.value, serializeAppManagementPolicy);
}
