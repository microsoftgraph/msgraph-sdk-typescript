import { type RemoteAssistancePartner } from './remoteAssistancePartner';
import { type RemoteAssistancePartnerCollectionResponse } from './remoteAssistancePartnerCollectionResponse';
import { serializeBaseCollectionPaginationCountResponse } from './serializeBaseCollectionPaginationCountResponse';
import { serializeRemoteAssistancePartner } from './serializeRemoteAssistancePartner';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeRemoteAssistancePartnerCollectionResponse(writer: SerializationWriter, remoteAssistancePartnerCollectionResponse: RemoteAssistancePartnerCollectionResponse | undefined = {} as RemoteAssistancePartnerCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, remoteAssistancePartnerCollectionResponse)
        writer.writeCollectionOfObjectValues<RemoteAssistancePartner>("value", remoteAssistancePartnerCollectionResponse.value, serializeRemoteAssistancePartner);
}
